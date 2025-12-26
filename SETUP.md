# VeritasCo Setup Guide

## Environment Variables Required

Create a `.env.local` file in the root directory with the following variables:

```env
# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/veritasco?retryWrites=true&w=majority

# Email SMTP (Gmail example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Next.js
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

## Vercel Deployment Setup

1. **Connect Repository**: Connect your GitHub repository to Vercel
2. **Environment Variables**: Add the above variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add each variable with the appropriate values

3. **MongoDB Atlas Setup**:
   - Create a MongoDB Atlas cluster
   - Whitelist IP: `0.0.0.0/0` (for Vercel)
   - Create database user with read/write permissions
   - Get connection string from Atlas dashboard

4. **Email Setup**:
   - For Gmail: Enable 2FA, generate App Password
   - Use App Password (not regular password) for SMTP_PASS

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Features Included

- ✅ Job application form with OTP verification
- ✅ File upload for resumes
- ✅ Admin dashboard for managing applications
- ✅ Email notifications
- ✅ Rate limiting and security measures
- ✅ Responsive design with animations

## API Endpoints

- `POST /api/join-us/send-otp` - Send OTP to email
- `POST /api/join-us/verify-otp` - Verify OTP
- `POST /api/join-us` - Submit job application
- `POST /api/admin/login` - Admin authentication
- `GET /api/admin/applications` - Get all applications
- `POST /api/booking` - Handle booking requests

## Database Collections

- `applications` - Job applications
- `otps` - Temporary OTP storage
- `bookings` - Booking requests
- `logs` - System logs

## Security Features

- CSRF protection
- Rate limiting
- Input sanitization
- File type validation
- SQL injection prevention
- XSS protection

## Troubleshooting

### OTP Issues on Vercel
- Ensure `MONGODB_URI` is set in Vercel environment variables
- Check MongoDB network access allows Vercel's IPs
- Verify SMTP settings are correct

### Build Issues
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `pnpm install`
- Check Node.js version compatibility

### Email Issues
- Use App Passwords for Gmail
- Check SMTP server settings
- Verify firewall allows SMTP ports