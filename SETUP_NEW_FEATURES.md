# StudySpace campus features setup

This update keeps the existing React/Vite StudySpace app and adds:
-  Forum (post questions, filter by year and branch, delete your own questions)
- Student Community (publish posts and filter by year/branch)
- Notes Sharing (import a text-readable file into your notes and download saved notes as `.txt`)
- Profile fields for year of study and branch
- Existing dashboard, personal notes, quiz zone, subjects, progress, and profile rDoubtemain in place.

## Required Supabase step

1. Open your Supabase project.
2. Go to **SQL Editor** → **New query**.
3. Open `supabase/schema.sql` from this project, copy the complete file, and run it.
4. Ensure your `.env` / Vercel environment variables still contain `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
5. Push the updated project to the same GitHub repository connected to the correct Vercel project, then redeploy.

The forum and community are cross-account features backed by Supabase. They will not work until the SQL is applied and users are signed in. Notes remain private to each user's account in the current database policy; making notes publicly downloadable to all students needs a separate shared-notes policy/storage design.

## Run locally

```bash
npm install
npm run dev
```
