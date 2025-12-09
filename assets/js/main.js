// Gulf Skill Development Center - Main JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && menuToggle && 
            !navMenu.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
    
    // Highlight Active Navigation Item
    highlightActiveNavItem();
    
    // Hero Image Rotation
    initHeroImageRotation();
    
    // Certificate Search Functionality
    initCertificateSearch();
    
    // File Upload Preview Functionality (only if file upload wrappers exist)
    // Note: Admission form uses simple file inputs, so preview setup is optional
    const photoInput = document.getElementById('photo');
    if (photoInput && photoInput.closest('.file-upload-wrapper, .file-upload')) {
        setupFileUpload('photo');
        setupFileUpload('aadhar');
        setupFileUpload('certificates');
        setupFileUpload('passport');
        setupFileUpload('education-cert');
    }
    
    // Form Submission Handling
    setupFormSubmission();
    
    // Debug: Log form submission attempts for admission form
    const admissionForm = document.getElementById('admission-form');
    if (admissionForm) {
        admissionForm.addEventListener('submit', function(e) {
            console.log('Admission form submit event triggered');
            // Don't prevent default - let Netlify handle it
        });
    }
});

// Highlight Active Navigation Item
function highlightActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Page mapping for navigation
    const pageMap = {
        'index.html': 'Home',
        'about-us.html': 'About',
        'courses.html': 'Courses',
        'trade-test-preparation.html': 'Trade Test',
        'admissions.html': 'Admissions',
        'placement-support.html': 'Placement',
        'gallery.html': 'Gallery',
        'contact-us.html': 'Contact'
    };
    
    // Also check for course pages
    if (currentPage.includes('ac-refrigeration') || 
        currentPage.includes('electrical') || 
        currentPage.includes('plumbing') || 
        currentPage.includes('welding') || 
        currentPage.includes('fire-safety') || 
        currentPage.includes('driving') || 
        currentPage.includes('mechanical-fabrication') || 
        currentPage.includes('hospitality-housekeeping')) {
        pageMap[currentPage] = 'Courses';
    }
    
    navLinks.forEach(link => {
        const linkText = link.textContent.trim();
        const linkHref = link.getAttribute('href');
        
        // Remove active class from all links
        link.classList.remove('active');
        
        // Check if current page matches
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else if (pageMap[currentPage] && linkText === pageMap[currentPage]) {
            link.classList.add('active');
        }
    });
}

// Hero Image Rotation Function
function initHeroImageRotation() {
    const heroSlides = document.querySelectorAll('.hero-slide');
    if (heroSlides.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = heroSlides.length;
    const rotationInterval = 5000; // 5 seconds between rotations
    let rotationTimer = null;
    
    function showSlide(index) {
        // Remove active class from all slides
        heroSlides.forEach(slide => slide.classList.remove('active'));
        
        // Add active class to current slide
        if (heroSlides[index]) {
            heroSlides[index].classList.add('active');
            currentSlide = index;
        }
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    
    function previousSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }
    
    function resetRotationTimer() {
        // Clear existing timer
        if (rotationTimer) {
            clearInterval(rotationTimer);
        }
        // Restart rotation timer
        rotationTimer = setInterval(nextSlide, rotationInterval);
    }
    
    // Initialize: show first slide
    showSlide(0);
    
    // Rotate images every 5 seconds
    rotationTimer = setInterval(nextSlide, rotationInterval);
    
    // Arrow button navigation
    const leftArrow = document.querySelector('.hero-arrow-left');
    const rightArrow = document.querySelector('.hero-arrow-right');
    
    if (leftArrow) {
        leftArrow.addEventListener('click', function() {
            previousSlide();
            resetRotationTimer(); // Reset timer after manual navigation
        });
    }
    
    if (rightArrow) {
        rightArrow.addEventListener('click', function() {
            nextSlide();
            resetRotationTimer(); // Reset timer after manual navigation
        });
    }
}

// File Upload Preview Setup
function setupFileUpload(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    const wrapper = input.closest('.file-upload-wrapper') || input.closest('.file-upload');
    if (!wrapper) return;
    
    const uploadArea = wrapper.querySelector('.file-upload-area');
    const previewArea = wrapper.querySelector('.file-preview');
    const fileNameSpan = previewArea ? previewArea.querySelector('.file-name') : null;
    const changeBtn = previewArea ? previewArea.querySelector('.btn-change') : null;
    const deleteBtn = previewArea ? previewArea.querySelector('.btn-delete') : null;
    
    if (!input || !wrapper) return;
    
    // Create preview area if it doesn't exist
    if (!previewArea && input.type === 'file') {
        const previewDiv = document.createElement('div');
        previewDiv.className = 'file-preview';
        previewDiv.innerHTML = `
            <span class="file-icon">📄</span>
            <span class="file-name"></span>
            <div class="file-actions">
                <button type="button" class="btn-change">Change</button>
                <button type="button" class="btn-delete">Delete</button>
            </div>
        `;
        wrapper.appendChild(previewDiv);
        
        // Update references
        const newPreviewArea = wrapper.querySelector('.file-preview');
        const newFileNameSpan = newPreviewArea.querySelector('.file-name');
        const newChangeBtn = newPreviewArea.querySelector('.btn-change');
        const newDeleteBtn = newPreviewArea.querySelector('.btn-delete');
        
        setupFilePreview(input, uploadArea, newPreviewArea, newFileNameSpan, newChangeBtn, newDeleteBtn);
    } else if (previewArea) {
        setupFilePreview(input, uploadArea, previewArea, fileNameSpan, changeBtn, deleteBtn);
    }
}

function setupFilePreview(input, uploadArea, previewArea, fileNameSpan, changeBtn, deleteBtn) {
    function showPreview(file) {
        if (uploadArea) uploadArea.style.display = 'none';
        if (previewArea) {
            previewArea.style.display = 'flex';
            previewArea.classList.add('active');
        }
        if (fileNameSpan) fileNameSpan.textContent = file.name;
        
        // Show image preview for image files
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                // Could add image preview here if needed
            };
            reader.readAsDataURL(file);
        }
    }
    
    function hidePreview() {
        if (uploadArea) uploadArea.style.display = 'flex';
        if (previewArea) {
            previewArea.style.display = 'none';
            previewArea.classList.remove('active');
        }
        if (input) input.value = '';
    }
    
    if (input) {
        input.addEventListener('change', function() {
            if (this.files.length > 0) {
                const file = this.files[0];
                const maxSize = 10 * 1024 * 1024; // 10MB
                const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
                
                if (file.size > maxSize) {
                    alert('File size exceeds 10MB limit.');
                    hidePreview();
                    return;
                }
                
                const fileType = file.type.toLowerCase();
                const isValidType = allowedTypes.some(type => fileType.includes(type.split('/')[1]));
                
                if (!isValidType && !file.name.match(/\.(jpg|jpeg|png|pdf)$/i)) {
                    alert('Invalid file type. Only JPG, PNG, and PDF are allowed.');
                    hidePreview();
                    return;
                }
                
                showPreview(file);
            } else {
                hidePreview();
            }
        });
    }
    
    if (changeBtn) {
        changeBtn.addEventListener('click', () => {
            if (input) input.click();
        });
    }
    
    if (deleteBtn) {
        deleteBtn.addEventListener('click', hidePreview);
    }
}

// Form Submission Handling
function setupFormSubmission() {
    // Only handle forms with PHP actions, let Netlify forms submit naturally
    const phpForms = document.querySelectorAll('form[action*=".php"]');
    
    // Ensure Netlify forms are NOT interfered with
    const netlifyForms = document.querySelectorAll('form[netlify], form[data-netlify]');
    netlifyForms.forEach(form => {
        // Remove any existing submit handlers that might interfere
        form.onsubmit = null;
    });
    
    phpForms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            // Only handle PHP forms, let Netlify handle its own forms
            const formAction = form.getAttribute('action');
            
            if (formAction && formAction.includes('.php')) {
                e.preventDefault();
                
                const formData = new FormData(form);
                const submitButton = form.querySelector('button[type="submit"]');
                const originalText = submitButton ? submitButton.textContent : 'Submit';
                
                // Show loading state
                if (submitButton) {
                    submitButton.disabled = true;
                    submitButton.textContent = 'Submitting...';
                }
                
                try {
                    const response = await fetch(formAction, {
                        method: 'POST',
                        body: formData
                    });
                    
                    const result = await response.json();
                    
                    if (result.success) {
                        // Show success message
                        showFormMessage(form, result.message || 'Form submitted successfully!', 'success');
                        form.reset();
                        
                        // Reset file previews
                        const filePreviews = form.querySelectorAll('.file-preview');
                        filePreviews.forEach(preview => {
                            preview.style.display = 'none';
                            preview.classList.remove('active');
                        });
                        
                        const uploadAreas = form.querySelectorAll('.file-upload-area');
                        uploadAreas.forEach(area => {
                            area.style.display = 'flex';
                        });
                    } else {
                        showFormMessage(form, result.message || 'An error occurred. Please try again.', 'error');
                    }
                } catch (error) {
                    console.error('Form submission error:', error);
                    showFormMessage(form, 'Network error. Please check your connection and try again.', 'error');
                } finally {
                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.textContent = originalText;
                    }
                }
            }
        });
    });
}

function showFormMessage(form, message, type) {
    // Remove existing messages
    const existingMessage = form.parentElement.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type === 'success' ? 'success-message' : 'error-message'}`;
    messageDiv.textContent = message;
    
    // Insert after form
    form.parentElement.insertBefore(messageDiv, form.nextSibling);
    
    // Scroll to message
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Accordion (if needed)
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                const answer = item.querySelector('.faq-answer');
                const isActive = item.classList.contains('active');
                
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        }
    });
});

// Gallery Filter (if needed)
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// WhatsApp Click-to-Chat
function openWhatsApp(number, message = '') {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${number}${message ? '?text=' + encodedMessage : ''}`;
    window.open(whatsappUrl, '_blank');
}

// Initialize WhatsApp buttons
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn, .whatsapp-link');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.includes('wa.me')) {
                // Let the link work naturally
                return;
            }
            
            e.preventDefault();
            const number = this.getAttribute('data-number') || '917860743786';
            const message = this.getAttribute('data-message') || 'Hello, I am interested in your training programs.';
            openWhatsApp(number, message);
        });
    });
});

// Certificate Search Functionality
function initCertificateSearch() {
    const searchInput = document.getElementById('certificate-search');
    const searchBtn = document.getElementById('search-btn');
    
    if (!searchInput || !searchBtn) return;
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        
        if (!searchTerm) {
            alert('Please enter a certificate number or name to search.');
            return;
        }
        
        // Scroll to certificate section
        const certificateSection = document.querySelector('.certificate-container');
        if (certificateSection) {
            certificateSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        // Here you can add actual search logic
        // For now, just show the certificate
        console.log('Searching for:', searchTerm);
        // You can implement actual certificate verification logic here
    }
    
    // Search on button click
    searchBtn.addEventListener('click', performSearch);
    
    // Search on Enter key press
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

