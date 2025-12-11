# Quick DNS Setup Guide - gulfskillcenter.com

## ✅ What You've Done
- ✅ Added `gulfskillcenter.com` to Netlify
- ✅ Domain shows "Netlify DNS propagating..."

## 🎯 What You Need to Do Now

### Option A: Use Netlify Nameservers (EASIEST - Recommended)

1. **In Netlify Dashboard:**
   - Go to: **Domain management** → Click on `gulfskillcenter.com`
   - Find the **"Netlify nameservers"** section
   - Copy the 4 nameservers (they look like `dns1.p01.nsone.net`, etc.)

2. **In Hostinger:**
   - Login: https://hpanel.hostinger.com
   - Go to: **Domains** → `gulfskillcenter.com` → **DNS / Nameservers**
   - Select **"Custom nameservers"**
   - Paste the 4 Netlify nameservers
   - Click **Save**

3. **Wait 1-2 hours** for DNS to propagate

---

### Option B: Add DNS Records (Alternative)

1. **In Netlify Dashboard:**
   - Go to: **Domain management** → Click on `gulfskillcenter.com`
   - Find the **DNS records** section
   - Note the A record IP (usually `75.2.60.5`)
   - Note the CNAME value (your `.netlify.app` domain)

2. **In Hostinger:**
   - Login: https://hpanel.hostinger.com
   - Go to: **Domains** → `gulfskillcenter.com` → **DNS / Zone Editor**
   - Delete existing A and CNAME records for `@` and `www`
   - Add A record:
     - Type: `A`
     - Name: `@`
     - Value: `75.2.60.5` (from Netlify)
   - Add CNAME record:
     - Type: `CNAME`
     - Name: `www`
     - Value: `gulf-skill-development-center.netlify.app`
   - Click **Save**

3. **Wait 1-2 hours** for DNS to propagate

---

## ✅ After DNS is Configured

1. **Check Netlify:**
   - "Netlify DNS propagating..." message should disappear
   - Domain should show as "Active"

2. **Enable HTTPS:**
   - Netlify will auto-provision SSL (takes 5-10 minutes)
   - Go to **Domain management** → **HTTPS** → Enable **"Force HTTPS"**

3. **Test:**
   - Visit: `https://gulfskillcenter.com`
   - Test your contact form (Netlify Forms will work automatically)

---

## ⚠️ Important Notes

- **Netlify Forms:** Will continue working - no changes needed!
- **DNS Propagation:** Can take 1-24 hours (usually 1-2 hours)
- **Check Status:** https://dnschecker.org (search for `gulfskillcenter.com`)
- **SSL Certificate:** Netlify provides it automatically (free)

---

## 🆘 Troubleshooting

**Domain not working after 2 hours?**
- Check DNS propagation: https://dnschecker.org
- Verify nameservers/DNS records are correct
- Clear browser cache and try incognito mode

**SSL not working?**
- Wait 10-15 minutes after DNS is configured
- Netlify automatically provisions SSL certificates
- Check **Domain management** → **HTTPS** section in Netlify


