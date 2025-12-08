# Gulf Skill Development Center Website

A professional website for Gulf Skill Development Center, a training institute dedicated to developing skilled workers for Gulf and Middle East job markets.

## Website Structure

### Main Pages
- **index.html** - Homepage with all 13 sections
- **about-us.html** - About page with vision, mission, and values
- **courses.html** - Main courses listing page
- **trade-test-preparation.html** - Trade test preparation information
- **admissions.html** - Online application form
- **placement-support.html** - Job and placement support services
- **gallery.html** - Photo gallery with filtering
- **faqs.html** - Frequently asked questions
- **contact-us.html** - Contact form and location map
- **candidate-login.html** - Student portal login (basic implementation)

### Course Pages (in `/courses/` directory)
- **ac-refrigeration.html** - AC & Refrigeration Technician
- **electrical.html** - Electrical Technician
- **plumbing.html** - Plumbing (Gulf Standard)
- **welding.html** - Welding (MIG/TIG/ARC)
- **fire-safety.html** - Fire & Safety Officer
- **driving.html** - Driving (LMV/HMV)
- **mechanical-fabrication.html** - Mechanical / Fabrication
- **hospitality-housekeeping.html** - Hospitality & Housekeeping

## Features

### Design
- Modern, responsive design with Gulf-inspired color palette
- Mobile-first approach with full responsive support
- Sticky header navigation
- Smooth scrolling and animations
- Professional typography (Poppins/Montserrat for headings, Open Sans/Roboto for body)

### Functionality
- Online application form with file uploads
- Contact form
- FAQ accordion
- Gallery with category filtering
- WhatsApp integration (click-to-chat buttons)
- Google Maps integration
- Mobile menu toggle

### Color Palette
- Navy Blue: #002B5B
- Gulf Green: #0FA958
- Golden Accent: #D4A73C
- Light Gray: #F7F7F7
- Gulf Blue: #003E6C

## File Structure

```
.
├── index.html
├── about-us.html
├── courses.html
├── trade-test-preparation.html
├── admissions.html
├── placement-support.html
├── gallery.html
├── faqs.html
├── contact-us.html
├── candidate-login.html
├── courses/
│   ├── ac-refrigeration.html
│   ├── electrical.html
│   ├── plumbing.html
│   ├── welding.html
│   ├── fire-safety.html
│   ├── driving.html
│   ├── mechanical-fabrication.html
│   └── hospitality-housekeeping.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── (image files to be added)
└── README.md
```

## Setup Instructions

### For Netlify Hosting (Recommended)

1. **Create Netlify Account**: Sign up at [netlify.com](https://www.netlify.com)
2. **Deploy Options**:
   - **Drag & Drop**: Drag your project folder to Netlify dashboard
   - **Git Integration**: Connect your GitHub/GitLab repository for automatic deployments
   - **Netlify CLI**: Use `netlify deploy` command
3. **Configure Forms**: 
   - Go to Site Settings → Forms
   - Add your email for form notifications
4. **Custom Domain** (Optional): Add your custom domain in Site Settings → Domain management

### For Traditional Web Server Hosting

1. **Hosting**: Upload all files to your web server
2. **Images**: Add images to `assets/images/` directory:
   - Hero background image
   - Course images
   - Gallery photos
   - Facility photos
   - Testimonial photos
3. **Contact Information**: Update phone number (replace `XXXXXXXXXX` with actual number) in all HTML files
4. **WhatsApp**: Update WhatsApp number in all HTML files (replace `91XXXXXXXXXX`)
5. **Google Maps**: Update the Google Maps embed URL in contact pages with the actual location coordinates

## Local Testing

To test the website on your local machine before deploying, you can use any of the following methods:

### Method 1: Python HTTP Server (Recommended - Easiest)

If you have Python installed:

1. Open PowerShell or Command Prompt in your project directory
2. Run one of these commands:

**For Python 3:**
```bash
python -m http.server 8000
```

**For Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

3. Open your browser and navigate to: `http://localhost:8000`
4. The website will be available at `http://localhost:8000/index.html` or just `http://localhost:8000/`

### Method 2: Node.js HTTP Server

If you have Node.js installed:

1. Install `http-server` globally (one-time setup):
```bash
npm install -g http-server
```

2. Navigate to your project directory in PowerShell/Command Prompt

3. Run:
```bash
http-server -p 8000
```

4. Open your browser and navigate to: `http://localhost:8000`

### Method 3: PHP Built-in Server

If you have PHP installed:

1. Open PowerShell or Command Prompt in your project directory

2. Run:
```bash
php -S localhost:8000
```

3. Open your browser and navigate to: `http://localhost:8000`

### Method 4: VS Code Live Server Extension

If you're using Visual Studio Code:

1. Install the "Live Server" extension from the VS Code marketplace
2. Right-click on `index.html` in the file explorer
3. Select "Open with Live Server"
4. The website will automatically open in your default browser

### Method 5: Opening Files Directly (Not Recommended)

You can open `index.html` directly in your browser by double-clicking it, but this method has limitations:
- Some JavaScript features may not work due to CORS restrictions
- Relative paths might not resolve correctly
- Forms and AJAX requests may fail

**Note:** To stop any of the server methods above, press `Ctrl + C` in the terminal/command prompt.

### Testing Checklist

When testing locally, check:
- [ ] All pages load correctly
- [ ] Navigation links work properly
- [ ] CSS styles are applied correctly
- [ ] JavaScript functionality works (mobile menu, forms, etc.)
- [ ] Images display (or placeholders show if images are missing)
- [ ] Forms can be filled (backend submission won't work locally)
- [ ] Responsive design works on different screen sizes

## Form Integration (Netlify Forms)

The application form (`admissions.html`) and contact form (`contact-us.html`) are configured to use **Netlify Forms**, which works automatically when deployed on Netlify. No backend server (PHP, Node.js, etc.) is required.

### How Netlify Forms Works

1. **Automatic Processing**: Forms with the `netlify` attribute are automatically processed by Netlify
2. **Email Notifications**: You'll receive email notifications for each form submission
3. **File Uploads**: The application form supports file uploads (up to 10MB per file)
4. **Spam Protection**: Built-in honeypot spam protection is included
5. **Form Submissions Dashboard**: View all submissions in your Netlify dashboard

### Form Configuration

Both forms include:
- `netlify` attribute for automatic processing
- `data-netlify="true"` for form detection
- `netlify-honeypot="bot-field"` for spam protection
- `enctype="multipart/form-data"` on the application form for file uploads

### Setting Up Email Notifications

1. Log in to your Netlify account
2. Go to your site dashboard
3. Navigate to **Forms** section
4. Click on **Notifications & webhooks**
5. Add your email address to receive form submissions

### Viewing Form Submissions

- **Netlify Dashboard**: All submissions are stored in your Netlify dashboard under the **Forms** section
- **Email**: You'll receive email notifications for each submission (if configured)
- **Webhooks**: You can set up webhooks to send data to external services

### Free Tier Limits

- 100 form submissions per month (free tier)
- 10MB file upload limit per file
- Upgrade to paid plans for higher limits

### Testing Forms Locally

When testing locally, forms won't submit to Netlify. To test:
1. Deploy to Netlify (even a draft deployment)
2. Test forms on the deployed site
3. Or use Netlify CLI: `netlify dev` (requires Netlify CLI installation)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- All phone numbers and WhatsApp links use placeholder values (`XXXXXXXXXX`) - update these before going live
- Images use placeholder divs - replace with actual images
- Forms are configured for Netlify Forms (no backend required when hosted on Netlify)
- Google Maps embed needs actual coordinates for the center location

## Future Enhancements

- Full student portal functionality
- Online payment integration
- Multi-language support (Arabic)
- Blog/news section
- Online course materials
- Student dashboard

## Contact

For questions or support, contact:
- Email: gulfetf@gmail.com
- Address: Plot No-39, Khasra No-331, Lucknow – 226028 (U.P.), India

