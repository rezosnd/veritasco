import { defineConfig } from 'prisma/config'
import * as dotenv from 'dotenv'

// Load .env for CLI commands (db push, migrate, etc.)
dotenv.config()

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
})
