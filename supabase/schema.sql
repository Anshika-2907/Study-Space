-- Run this entire script in Supabase Dashboard > SQL Editor.
-- Row Level Security ensures each student can only access their own rows.

create table if not exists public.notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null default 'Untitled note',
  subject text not null default 'General',
  content text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  topic text not null,
  score integer not null check (score >= 0),
  total integer not null check (total > 0 and score <= total),
  created_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  course text not null default 'CSE',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.notes enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.profiles enable row level security;

drop policy if exists "Users manage their own notes" on public.notes;
create policy "Users manage their own notes" on public.notes
  for all to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users read their own quiz attempts" on public.quiz_attempts;
create policy "Users read their own quiz attempts" on public.quiz_attempts
  for select to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Users insert their own quiz attempts" on public.quiz_attempts;
create policy "Users insert their own quiz attempts" on public.quiz_attempts
  for insert to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "Users manage their own profile" on public.profiles;
create policy "Users manage their own profile" on public.profiles
  for all to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Create a profile automatically when a new user signs up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', '')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Indexes make per-user queries faster.
create index if not exists notes_user_updated_idx on public.notes(user_id, updated_at desc);
create index if not exists quiz_attempts_user_created_idx on public.quiz_attempts(user_id, created_at desc);

-- Campus-wide doubt forum and student community
alter table public.profiles add column if not exists year text not null default '2nd Year';
alter table public.profiles add column if not exists branch text not null default 'CSE';

create table if not exists public.doubts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  author_name text not null default 'Student',
  title text not null,
  body text not null,
  category text not null default 'Doubt',
  branch text not null default 'CSE',
  year text not null default '2nd Year',
  created_at timestamptz not null default now()
);
create table if not exists public.community_posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  author_name text not null default 'Student',
  body text not null,
  branch text not null default 'CSE',
  year text not null default '2nd Year',
  created_at timestamptz not null default now()
);

alter table public.doubts enable row level security;
alter table public.community_posts enable row level security;
drop policy if exists "Authenticated students can read doubts" on public.doubts;
create policy "Authenticated students can read doubts" on public.doubts for select to authenticated using (true);
drop policy if exists "Students can post doubts" on public.doubts;
create policy "Students can post doubts" on public.doubts for insert to authenticated with check (auth.uid() = user_id);
drop policy if exists "Students can delete their own doubts" on public.doubts;
create policy "Students can delete their own doubts" on public.doubts for delete to authenticated using (auth.uid() = user_id);
drop policy if exists "Authenticated students can read community posts" on public.community_posts;
create policy "Authenticated students can read community posts" on public.community_posts for select to authenticated using (true);
drop policy if exists "Students can publish community posts" on public.community_posts;
create policy "Students can publish community posts" on public.community_posts for insert to authenticated with check (auth.uid() = user_id);
drop policy if exists "Students can delete their own community posts" on public.community_posts;
create policy "Students can delete their own community posts" on public.community_posts for delete to authenticated using (auth.uid() = user_id);
create index if not exists doubts_created_idx on public.doubts(created_at desc);
create index if not exists community_posts_created_idx on public.community_posts(created_at desc);
