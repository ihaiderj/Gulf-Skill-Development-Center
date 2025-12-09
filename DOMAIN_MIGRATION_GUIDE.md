# Domain Migration Guide: Netlify to Hostinger (gulfskillcenter.com)

## ✅ Current Status

You've already added `gulfskillcenter.com` as your primary domain in Netlify! The status shows "Netlify DNS propagating..." which means you now need to configure DNS at Hostinger.

**Since you're using Netlify Forms, you'll keep everything on Netlify** - this is the best approach. You just need to point your domain to Netlify.

---

## Step-by-Step: Configure DNS at Hostinger

### Method 1: Use Netlify Nameservers (RECOMMENDED - Easiest)

This is the simplest method. You'll let Netlify manage all DNS records.

1. **Get Netlify Nameservers:**
   - In Netlify dashboard, go to: **Domain management** → Click on `gulfskillcenter.com`
   - Look for "Netlify nameservers" section
   - You'll see 4 nameservers (usually something like):
     - `dns1.p01.nsone.net`
     - `dns2.p01.nsone.net`
     - `dns3.p01.nsone.net`
     - `dns4.p01.nsone.net`
   - **Note these down** (they may be different for your account)

2. **Update Nameservers at Hostinger:**
   - Log in to Hostinger: https://hpanel.hostinger.com
   - Go to **Domains** → Select `gulfskillcenter.com`
   - Click on **DNS / Nameservers** or **Nameservers**
   - Select **"Custom nameservers"** or **"Use custom nameservers"**
   - Enter the 4 Netlify nameservers you copied
   - Click **Save** or **Update**

3. **Wait for DNS Propagation:**
   - Usually takes 1-2 hours (can take up to 24-48 hours)
   - The "Netlify DNS propagating..." message will disappear once DNS is configured
   - Check status: https://dnschecker.org (search for `gulfskillcenter.com`)

---

### Method 2: Add DNS Records at Hostinger (Alternative)

If you prefer to keep DNS management at Hostinger:

1. **Get DNS Records from Netlify:**
   - In Netlify dashboard, go to: **Domain management** → Click on `gulfskillcenter.com`
   - Look for "DNS records" or "DNS configuration"
   - You'll see records like:
     ```
     Type: A
     Name: @
     Value: 75.2.60.5 (or similar IP)
     
     Type: CNAME
     Name: www
     Value: gulf-skill-development-center.netlify.app
     ```

2. **Add DNS Records at Hostinger:**
   - Log in to Hostinger: https://hpanel.hostinger.com
   - Go to **Domains** → Select `gulfskillcenter.com`
   - Go to **DNS / Zone Editor** or **DNS Management**
   - **Delete existing A and CNAME records** for @ and www (if any)
   - **Add new A record:**
     - Type: `A`
     - Name: `@` (or leave blank, or use root domain)
     - Value: `75.2.60.5` (use the IP from Netlify)
     - TTL: `3600` (or default)
   - **Add new CNAME record:**
     - Type: `CNAME`
     - Name: `www`
     - Value: `gulf-skill-development-center.netlify.app` (your Netlify subdomain)
     - TTL: `3600` (or default)
   - Click **Save** or **Add Record**

3. **Wait for DNS Propagation:**
   - Usually takes 1-2 hours
   - Check status: https://dnschecker.org

---

## After DNS is Configured

1. **Verify Domain in Netlify:**
   - Go back to Netlify **Domain management**
   - The "Netlify DNS propagating..." message should disappear
   - You should see a green checkmark or "Active" status

2. **Enable HTTPS (Automatic):**
   - Netlify will automatically provision an SSL certificate
   - This usually happens within 5-10 minutes after DNS is configured
   - Go to **Domain management** → **HTTPS** section
   - Enable **"Force HTTPS"** to redirect all HTTP to HTTPS

3. **Test Your Domain:**
   - Visit: `https://gulfskillcenter.com`
   - Visit: `https://www.gulfskillcenter.com` (should redirect to non-www)
   - Test your contact form to ensure Netlify Forms still work

---

## Important Notes

### ✅ Netlify Forms Will Continue Working
- Your forms in `contact-us.html` and `admissions.html` will work perfectly
- No changes needed to your HTML files
- Form submissions will still go to your Netlify dashboard

### DNS Propagation
- **Typical time:** 1-2 hours
- **Maximum time:** 24-48 hours
- **Check status:** https://dnschecker.org (search for `gulfskillcenter.com`)
- The site will work for some users before others during propagation

### SSL Certificate
- Netlify automatically provides free SSL certificates via Let's Encrypt
- Certificate is issued automatically after DNS is configured
- No manual configuration needed

---

## Option 2: Full Migration to Hostinger Hosting

### Step 1: Prepare Your Files

Your website files are already in the project folder. You'll need to upload:
- All HTML files (index.html, about-us.html, etc.)
- `assets/` folder (CSS, JS, images)
- Any other files in the root directory

### Step 2: Access Hostinger File Manager

1. Log in to Hostinger: https://hpanel.hostinger.com
2. Go to **Hosting** → Select your hosting plan
3. Click **File Manager** or use **FTP**

### Step 3: Upload Files via File Manager

1. Navigate to `public_html` folder (or `www` folder)
2. Delete default files (index.html, etc.) if present
3. Upload all your website files:
   - Upload all HTML files to root
   - Upload the entire `assets` folder

### Step 4: Upload Files via FTP (Alternative)

If File Manager is slow, use FTP:
1. In Hostinger, go to **FTP Accounts**
2. Note your FTP credentials:
   - Host: `ftp.gulfskillcenter.com` or IP address
   - Username: (provided by Hostinger)
   - Password: (your FTP password)
3. Use FTP client (FileZilla, WinSCP) to upload files
4. Connect and upload to `public_html` folder

### Step 5: Configure Domain DNS

1. In Hostinger, go to **Domains** → `gulfskillcenter.com`
2. Go to **DNS / Nameservers**
3. Ensure these records exist:
   ```
   Type: A
   Name: @
   Value: [Your Hostinger IP - check in hosting panel]
   
   Type: CNAME
   Name: www
   Value: gulfskillcenter.com
   ```

### Step 6: Enable SSL Certificate

1. In Hostinger, go to **SSL** section
2. Enable **Free SSL** (Let's Encrypt)
3. Wait for activation (usually 5-10 minutes)

### Step 7: Test Your Website

1. Visit: `http://gulfskillcenter.com` (should redirect to HTTPS)
2. Test all pages:
   - Home page
   - About Us
   - Test Categories
   - Contact form
   - All navigation links

### Step 8: Update Netlify (Optional)

If you want to keep Netlify as backup:
- Keep the Netlify site running
- Or disable it if you're fully migrating

---

## Important Notes:

### DNS Propagation Time:
- Can take 24-48 hours for full propagation
- Usually works within 1-2 hours
- Check status: https://dnschecker.org

### File Paths:
- Ensure all file paths are relative (they already are: `assets/css/style.css`)
- No changes needed to your HTML files

### ✅ Netlify Forms (No Changes Needed)
Your site uses **Netlify Forms** in:
- `contact-us.html` (contact form)
- `admissions.html` (admission form)

**Since you're keeping Netlify hosting, your forms will continue working perfectly!**
- No code changes needed
- Form submissions will appear in your Netlify dashboard
- Email notifications can be configured in Netlify dashboard

### Performance:
- Netlify: Better CDN, faster global access
- Hostinger: Standard hosting, may need caching plugins

---

## ✅ You're Using the Recommended Approach!

**Netlify + Custom Domain** is the best choice because:
- ✅ Better performance (global CDN)
- ✅ Free SSL certificate (automatic)
- ✅ Automatic deployments from Git
- ✅ Netlify Forms work perfectly (no backend needed)
- ✅ No file uploads or server management
- ✅ Free hosting with excellent uptime

---

## Troubleshooting:

### Domain not working?
1. Check DNS propagation: https://dnschecker.org
2. Clear browser cache
3. Try incognito/private browsing
4. Check DNS records are correct

### SSL not working?
1. Wait 10-15 minutes after enabling
2. Clear browser cache
3. Try accessing via `https://` directly

### Files not showing?
1. Ensure files are in `public_html` (not subfolders)
2. Check file permissions (should be 644 for files, 755 for folders)
3. Verify `index.html` exists in root

---

## Need Help?

If you encounter issues:
1. Check Hostinger documentation
2. Contact Hostinger support
3. Verify DNS settings match this guide

