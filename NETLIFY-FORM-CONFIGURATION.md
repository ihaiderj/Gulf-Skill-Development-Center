# Netlify Form Configuration Guide

## Email Notifications Setup

To receive form submissions at multiple email addresses, you need to configure this in your Netlify dashboard.

### Steps to Configure Email Notifications:

1. **Log in to Netlify Dashboard**
   - Go to https://app.netlify.com
   - Select your site: `gulf-skill-development-center`

2. **Navigate to Form Settings**
   - Go to **Site settings** → **Forms** → **Form notifications**

3. **Configure Email Notifications for Admissions Form**
   - Find the form named `admission`
   - Click **Add notification** → **Email notification**
   - **To email:** Enter: `gulfetf@gmail.com, immy666@gmail.com`
   - **From email:** `gulfetf@gmail.com` (or your preferred sender)
   - **Subject:** `New Admission Application - Gulf Skill Development Center`
   - **Email template:** You can customize the email template to include all form fields

4. **Configure Email Notifications for Contact Form**
   - Find the form named `contact`
   - Click **Add notification** → **Email notification**
   - **To email:** Enter: `gulfetf@gmail.com, immy666@gmail.com`
   - **From email:** `gulfetf@gmail.com` (or your preferred sender)
   - **Subject:** `New Contact Form Submission - Gulf Skill Development Center`
   - **Email template:** You can customize the email template to include all form fields

### Alternative: Using Netlify Functions (Advanced)

If you need more control, you can create a Netlify function to send emails to multiple addresses. However, the dashboard method above is simpler and recommended.

### Testing

After configuration:
1. Submit a test form from the website
2. Check both email inboxes (`gulfetf@gmail.com` and `immy666@gmail.com`)
3. Verify that both addresses receive the notifications

### Important Notes

- Multiple email addresses should be separated by commas: `email1@gmail.com, email2@gmail.com`
- Make sure both email addresses are valid and can receive emails
- Check spam folders if emails don't arrive
- Netlify sends form data in the email body by default



