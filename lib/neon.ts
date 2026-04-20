import { neon } from '@neondatabase/serverless'

if (!process.env.DATABASE_URL) {
  throw new Error('Missing environment variable: DATABASE_URL')
}

// Neon serverless SQL client — works perfectly in Next.js edge/serverless functions
export const sql = neon(process.env.DATABASE_URL)

// Initialize tables (call once on first request via initDb)
export async function initDb() {
  await sql`
    CREATE TABLE IF NOT EXISTS bookings (
      id          SERIAL PRIMARY KEY,
      school_name TEXT NOT NULL,
      contact_person TEXT NOT NULL,
      email       TEXT NOT NULL,
      phone       TEXT NOT NULL,
      student_count INTEGER,
      message     TEXT,
      status      TEXT NOT NULL DEFAULT 'pending',
      created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `

  await sql`
    CREATE TABLE IF NOT EXISTS applications (
      id                  SERIAL PRIMARY KEY,
      full_name           TEXT NOT NULL,
      email               TEXT NOT NULL,
      phone               TEXT NOT NULL,
      position            TEXT NOT NULL,
      years_of_experience INTEGER NOT NULL,
      current_company     TEXT,
      skills              TEXT NOT NULL,
      why_interested      TEXT NOT NULL,
      past_experience     TEXT NOT NULL,
      resume_filename     TEXT,
      resume_content_type TEXT,
      resume_data         TEXT,
      status              TEXT NOT NULL DEFAULT 'pending',
      created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `
}
