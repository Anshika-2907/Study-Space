# StudySpace — Full-stack starter

A responsive React + Vite education app with Supabase authentication and cloud data storage.

## Features in this starter
- Email/password signup and login
- Supabase-backed notes: create, edit, search and delete
- 50-question starter bank across HTML, CSS, JavaScript and DSA
- Quiz sessions of 10, 20 or up to 50 questions, by subject or mixed
- Quiz results saved to the signed-in user's cloud history
- Dashboard, subject pages, progress summary and editable student profile
- Responsive desktop and mobile layouts
- Row Level Security policies in `supabase/schema.sql`

## 1. Requirements
Install Node.js LTS from https://nodejs.org/ and install VS Code.

## 2. Open the project
1. Extract `StudySpace_FullStack.zip`.
2. In VS Code, select **File → Open Folder** and choose `StudySpace_FullStack`.
3. Open Terminal → New Terminal.

Run:

```bash
npm install
```

## 3. Create a Supabase project
1. Visit https://supabase.com/ and create a free project.
2. Open **Project Settings → API** (or the project's Connect/API section).
3. Copy the Project URL and the publishable/anon key. Never use a `service_role` or secret key in browser code.
4. In the project folder, duplicate `.env.example` and name the copy `.env`.
5. Put your real values in `.env`:

```env
VITE_SUPABASE_URL=https://YOUR_REAL_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_REAL_PUBLISHABLE_OR_ANON_KEY
```

Do not put quotes around the values. Do not share `.env` or commit it to GitHub.

## 4. Create the database tables and access policies
1. In Supabase, open **SQL Editor → New query**.
2. Open `supabase/schema.sql` in VS Code and copy all of it.
3. Paste into the Supabase SQL editor and click **Run**.
4. Confirm the `notes`, `quiz_attempts`, and `profiles` tables exist under Table Editor.

The SQL enables Row Level Security (RLS). Keep it enabled. Policies restrict rows by the signed-in user's ID.

## 5. Configure email signup
In Supabase, open **Authentication → URL Configuration** and set the site URL for local development to `http://localhost:5173`. For production, change/add the deployed website URL. Email confirmation settings are under **Authentication → Providers → Email**. If confirmation is enabled, a new user must confirm their email before signing in.

## 6. Run locally

After `.env` is saved, restart the dev server if it was already running:

```bash
npm run dev
```

Open the local URL Vite prints, usually `http://localhost:5173`.

For production build checks:

```bash
npm run build
npm run preview
```

## 7. Put the site online with Vercel
1. Push this project to a private or public GitHub repository. Do not upload `.env`.
2. Visit https://vercel.com/ and import the repository.
3. Vercel usually detects Vite automatically. Build command: `npm run build`; output directory: `dist`.
4. In Vercel project **Settings → Environment Variables**, add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Deploy and copy the deployed URL.
6. In Supabase **Authentication → URL Configuration**, set Site URL to the deployed URL and add the deployed URL to Redirect URLs.
7. Test signup, email confirmation (if enabled), login, note save on one device and note visibility after login on another device.

## Important security notes
- The publishable/anon key is intended for client use only when RLS is configured correctly. Never place a Supabase service-role or secret key in Vite/browser code.
- Keep RLS enabled. Do not remove user_id policies.
- Cloud sync works only when the app is configured with your own Supabase project and the user signs in.
- The quiz question bank is currently stored in `src/questions.js`; adding questions means editing that file. Quiz attempts are saved to Supabase.
- Password reset, social login, admin question management, file uploads and offline sync are not included yet.

## Troubleshooting
- **Supabase URL/key error:** check `.env` names and restart `npm run dev`.
- **Signup succeeds but no session:** check email confirmation settings and your inbox.
- **Database permission error:** rerun `supabase/schema.sql` and verify RLS policies exist.
- **Profile empty:** sign out and sign in again after the SQL trigger is installed, or create/update the profile from the Profile page.
- **Mobile view:** use the deployed URL on your phone for the most reliable experience. Data follows the same Supabase account across devices.
