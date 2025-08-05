# PHP Email Setup Instructions

To enable actual email sending to your Gmail account, follow these steps:

## Option 1: Direct PHP Configuration (Recommended for simple setup)

1. **Install a PHP mail server** like `ssmtp` or configure `sendmail`:
   ```bash
   # Install ssmtp
   sudo apt-get install ssmtp
   
   # Configure /etc/ssmtp/ssmtp.conf
   mailhub=smtp.gmail.com:587
   AuthUser=your-email@gmail.com
   AuthPass=your-app-password
   UseSTARTTLS=YES
   ```

2. **Get Gmail App Password**:
   - Go to Google Account settings
   - Enable 2-factor authentication
   - Generate an App Password for "Mail"
   - Use this password in the configuration

## Option 2: Node.js with Nodemailer (Current Implementation)

Update `server/routes.ts` with real Gmail SMTP settings:

```typescript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password' // Use app password, not regular password
  }
});
```

## Option 3: Environment Variables (Secure)

1. Create a `.env` file:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   ```

2. Update the code to use environment variables:
   ```typescript
   auth: {
     user: process.env.GMAIL_USER,
     pass: process.env.GMAIL_APP_PASSWORD
   }
   ```

## Current Status

The email subscription form is working and will:
- ✅ Validate email addresses
- ✅ Log subscription attempts to console
- ✅ Show success/error messages to users
- ⚠️ Needs Gmail credentials to send actual emails

To enable real email sending, provide your Gmail credentials and I'll update the configuration.