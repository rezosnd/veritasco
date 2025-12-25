import bcrypt from 'bcryptjs';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

async function setupPasswords() {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    console.error('ADMIN_PASSWORD not set in environment');
    return;
  }

  console.log('Hashing admin password...');
  const saltRounds = 12;
  const hash = await bcrypt.hash(password, saltRounds);

  // Read current .env.local
  const envPath = join(process.cwd(), '.env.local');
  let envContent = readFileSync(envPath, 'utf-8');

  // Replace or add ADMIN_PASSWORD_HASH
  if (envContent.includes('ADMIN_PASSWORD_HASH=')) {
    envContent = envContent.replace(/ADMIN_PASSWORD_HASH=.*/, `ADMIN_PASSWORD_HASH=${hash}`);
  } else {
    envContent += `\nADMIN_PASSWORD_HASH=${hash}`;
  }

  // Remove the plain password
  envContent = envContent.replace(/ADMIN_PASSWORD=.*/, '# ADMIN_PASSWORD=removed_for_security');

  writeFileSync(envPath, envContent);
  console.log('✅ Password hashed and stored securely');
  console.log('✅ Plain password removed from environment');
}

setupPasswords().catch(console.error);