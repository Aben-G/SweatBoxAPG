// =============================================
// LANGUAGE SWITCHING FUNCTIONALITY
// =============================================
const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        trainers: "Trainers",
        shop: "Shop",
        membership: "Membership",
        contact: "Contact",
        myCart: "My Cart",
        theme: "Theme",
        language: "Language",
        
        // Hero Section
        heroTitle: "Welcome to Sweat Box APG",
        heroSubtitle: "Addis Ababa's Premier Performance Gym",
        heroDescription: "Transform your fitness journey with state-of-the-art equipment, expert trainers, and a community that pushes you to be your best.",
        getStarted: "Get Started",
        
        // Common
        searchPlaceholder: "Search trainers, products…",
        viewMore: "View More",
        learnMore: "Learn More",
        readMore: "Read More",
        submit: "Submit",
        close: "Close",
        
        // About Page
        aboutTitle: "About Sweat Box APG",
        aboutSubtitle: "Your Fitness Journey Starts Here",
        ourStory: "Our Story",
        ourStoryText: "Founded with a passion for fitness excellence, Sweat Box APG has become Addis Ababa's most trusted performance gym. We combine cutting-edge equipment with personalized training to help you achieve your fitness goals.",
        ourMission: "Our Mission",
        ourMissionText: "To empower individuals through fitness, providing world-class facilities, expert guidance, and a supportive community that inspires lasting health and wellness.",
        ourValues: "Our Values",
        ourValuesText: "Excellence, Community, Innovation, and Results-driven approach to fitness.",
        contact: "Contact",
        phone: "Phone",
        email: "Email",
        phoneValue: "+251 11 639 2624",
        emailValue: "contact@sweatboxapg.com",
        
        // Trainers Page
        trainersTitle: "Expert Trainers",
        trainersSubtitle: "Meet Our Certified Fitness Professionals",
        specialties: "Specialties",
        experience: "Experience",
        certification: "Certification",
        bio: "Bio",
        
        // Contact Page
        contactTitle: "Contact Us",
        contactSubtitle: "Get in Touch with Sweat Box APG",
        send: "Send Message",
        name: "Name",
        email: "Email",
        message: "Message",
        location: "Location",
        hours: "Hours",
        
        // Membership Page
        membershipTitle: "Membership Plans",
        membershipSubtitle: "Choose Your Fitness Journey",
        selectPlan: "Select Plan",
        monthly: "Monthly",
        quarterly: "Quarterly",
        yearly: "Yearly",
        features: "Features",
        price: "Price",
        signUp: "Sign Up",
        
        // Shop Page
        shopTitle: "Fitness Shop",
        shopSubtitle: "Premium Fitness Equipment & Supplements",
        addToCart: "Add to Cart",
        price: "Price",
        description: "Description",
        cart: "Cart",
        checkout: "Checkout",
        total: "Total",
        
        // Footer
        aboutUs: "About Us",
        services: "Services",
        quickLinks: "Quick Links",
        followUs: "Follow Us",
        allRightsReserved: "All Rights Reserved",
        
        // Mobile Navigation
        menu: "Menu",
        search: "Search",
        
        // Form Validation
        required: "This field is required",
        invalidEmail: "Please enter a valid email",
        messageTooShort: "Message is too short"
    },
    am: {
        // Navigation
        home: "መነሻ",
        about: "ስለ እኛ",
        trainers: "ስልጠና ሰጪዎች",
        shop: "ሱቅ",
        membership: "አባልነት",
        contact: "ያግኙን",
        myCart: "የእኔ ጋሪ",
        theme: "ገጽታ",
        language: "ቋንቋ",
        
        // Hero Section
        heroTitle: "እንኳን ወደ ስዌት ቦክስ ኤፒጂ በደህና መጡ",
        heroSubtitle: "የአዲስ አበባ ቀዳሚ የፍትህ ጉዞ ማእበቻ",
        heroDescription: "የዘመናዊ መሳሪያዎች፣ የባለሙያ ስልጠና ሰጪዎች እና የሚያስተውልዎ ማህበረሰብ በመጠቀም የፍትህ ጉዞዎን ይለውጡ።",
        getStarted: "ይጀምሩ",
        
        // Common
        searchPlaceholder: "ስልጠና ሰጪዎች፣ ምርቶችን ይፈልጉ…",
        viewMore: "ተጨማሪ ይመልከቱ",
        learnMore: "ተጨማሪ ይወቁ",
        readMore: "ተጨማሪ ያንብቡ",
        submit: "ያስገቡ",
        close: "ዝጋ",
        
        // About Page
        aboutTitle: "ስለ ስዌት ቦክስ ኤፒጂ",
        aboutSubtitle: "የፍትህ ጉዎዎ እዚህ ይጀምራል",
        ourStory: "ታሪካችን",
        ourStoryText: "በፍትህ የተሞላ ትልቅ ፍላጎት በመጀመር የተመሰረተው ስዌት ቦክስ ኤፒጂ ወደ አዲስ አበባ በጣም የሚታመን የፍትህ ጉዞ ማእበቻ ሆኗል። የዘመናዊ መሳሪያዎችን ከግል ስልጠና ጋር በማዋሃድ የፍትህ ዓላማዎችዎን ለማሳካት እንረዳዎታለን።",
        ourMission: "ተልዕኮችን",
        ourMissionText: "በፍትህ የተሞላ ሰዎችን በመቀላቀል፣ የዓለም ክፍል መመሪያዎች፣ የባለሙያ መመሪያዎች እና የሚያስተውል ማህበረሰብ በመስጠት የረዥም ጊዜ ጤናን እና ደህንነትን ለማሳያ ነው።",
        ourValues: "ዋጋዎቻችን",
        ourValuesText: "አስተማሪነት፣ ማህበረሰብ፣ አዳዲስ ሀሳብ እና የውጤት-የሚመራ የፍትህ አቀራረብ።",
        contact: "ያግኙን",
        phone: "ስልክ",
        email: "ኢሜይል",
        phoneValue: "+251 11 639 2624",
        emailValue: "contact@sweatboxapg.com",
        
        // Trainers Page
        trainersTitle: "የባለሙያ ስልጠና ሰጪዎች",
        trainersSubtitle: "የተረጋገጡ የፍትህ ሙያተኞችን ይገኙባቸው",
        specialties: "ልምዶች",
        experience: "ልምድ",
        certification: "የምስክር ወረቀት",
        bio: "ታሪክ",
        
        // Contact Page
        contactTitle: "ያግኙን",
        contactSubtitle: "ከስዌት ቦክስ ኤፒጂ ጋር ይገናኙ",
        send: "መልዕክት ይላኩ",
        name: "ስም",
        email: "ኢሜይል",
        message: "መልዕክት",
        location: "አካባቢ",
        hours: "ሰዓታት",
        
        // Membership Page
        membershipTitle: "የአባልነት እቅዶች",
        membershipSubtitle: "የፍትህ ጉዎዎን ይምረጡ",
        selectPlan: "እቅድ ይምረጡ",
        monthly: "ወርሃዊ",
        quarterly: "ሩብ ዓመታዊ",
        yearly: "ዓመታዊ",
        features: "ባህሪያት",
        price: "ዋጋ",
        signUp: "ይመዝገቡ",
        
        // Shop Page
        shopTitle: "የፍትህ ሱቅ",
        shopSubtitle: "የፍትህ መሳሪያዎች እና ተጨማሪ ምግቦች",
        addToCart: "ወደ ጋሪ ያክሉ",
        price: "ዋጋ",
        description: "መግለጫ",
        cart: "ጋሪ",
        checkout: "ይክፈሉ",
        total: "ድምር",
        
        // Footer
        aboutUs: "ስለ እኛ",
        services: "አገልግሎቶች",
        quickLinks: "ፈጣን አገናኞች",
        followUs: "ይከተሉን",
        allRightsReserved: "ሁሉም መብቶች የተጠበቁ ናቸው",
        
        // Mobile Navigation
        menu: "ዝርዝር",
        search: "ፈልግ",
        
        // Form Validation
        required: "ይህ መስክ ያስፈልጋል",
        invalidEmail: "እባክዎ ትክክለኛ ኢሜይል ያስገቡ",
        messageTooShort: "መልዕክቱ በጣም አጭር ነው"
    }
};

function setupLanguageSwitcher() {
    // Desktop language toggle
    const langToggle = document.getElementById('langToggle');
    // Mobile language toggle
    const mobileLangToggle = document.getElementById('mobileLangToggle');
    
    if (!langToggle && !mobileLangToggle) return;
    
    // Load saved language or default to English
    let currentLang = localStorage.getItem('preferredLanguage') || 'en';
    
    const handleLanguageToggle = (toggle) => {
        currentLang = currentLang === 'en' ? 'am' : 'en';
        
        // Save preference
        localStorage.setItem('preferredLanguage', currentLang);
        
        // Update all language toggles
        updateAllLanguageToggles(currentLang);
        
        // Apply translations
        applyTranslations(currentLang);
    };
    
    // Initialize both toggles
    updateAllLanguageToggles(currentLang);
    
    // Apply translations
    applyTranslations(currentLang);
    
    // Add event listeners
    if (langToggle) {
        langToggle.addEventListener('click', () => handleLanguageToggle(langToggle));
    }
    
    if (mobileLangToggle) {
        mobileLangToggle.addEventListener('click', () => handleLanguageToggle(mobileLangToggle));
    }
}

// Update all language toggle buttons (desktop and mobile)
function updateAllLanguageToggles(lang) {
    // Calculate the opposite language (what we will switch TO)
    const oppositeLang = lang === 'en' ? 'am' : 'en';
    
    // Desktop language toggle
    const desktopLangToggle = document.getElementById('langToggle');
    if (desktopLangToggle) {
        desktopLangToggle.setAttribute('data-lang', lang);
        const desktopLabel = desktopLangToggle.querySelector('.btn-label');
        if (desktopLabel) {
            desktopLabel.textContent = oppositeLang.toUpperCase();
        }
    }
    
    // Mobile language toggle
    const mobileLangToggle = document.getElementById('mobileLangToggle');
    if (mobileLangToggle) {
        mobileLangToggle.setAttribute('data-lang', lang);
        const mobileLabel = mobileLangToggle.querySelector('.btn-label');
        if (mobileLabel) {
            mobileLabel.textContent = oppositeLang.toUpperCase();
        }
    }
}

function applyTranslations(lang) {
    const t = translations[lang];
    
    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    if (navLinks.length >= 6) {
        navLinks[0].textContent = t.home;
        navLinks[1].textContent = t.about;
        navLinks[2].textContent = t.trainers;
        navLinks[3].textContent = t.shop;
        navLinks[4].textContent = t.membership;
        navLinks[5].textContent = t.contact;
    }
    
    // Update mobile navigation links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-content .nav-links a');
    if (mobileNavLinks.length >= 6) {
        mobileNavLinks[0].textContent = t.home;
        mobileNavLinks[1].textContent = t.about;
        mobileNavLinks[2].textContent = t.trainers;
        mobileNavLinks[3].textContent = t.shop;
        mobileNavLinks[4].textContent = t.membership;
        mobileNavLinks[5].textContent = t.contact;
    }
    
    // Update header buttons
    const cartLabel = document.querySelector('#cartBtn .btn-label');
    const themeLabel = document.querySelector('#themeToggle .btn-label');
    if (cartLabel) cartLabel.textContent = t.myCart;
    if (themeLabel) themeLabel.textContent = t.theme;
    
    // Update mobile header buttons
    const mobileCartLabel = document.querySelector('.mobile-controls #cartBtn .btn-label');
    const mobileThemeLabel = document.querySelector('.mobile-controls #mobileThemeToggle .btn-label');
    if (mobileCartLabel) mobileCartLabel.textContent = t.myCart;
    if (mobileThemeLabel) mobileThemeLabel.textContent = t.theme;
    
    // Update language toggles using the centralized function
    updateAllLanguageToggles(lang);
    
    // Update search placeholder
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;
    
    // Update mobile search placeholder
    const mobileSearchInput = document.querySelector('.mobile-search input');
    if (mobileSearchInput) mobileSearchInput.placeholder = t.searchPlaceholder;
    
    // Update page titles based on current page
    updatePageContent(lang);
    
    // Update footer content
    updateFooterContent(lang);
    
    // Update mobile menu button text
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn) {
        const menuText = menuBtn.querySelector('.menu-text');
        if (menuText) menuText.textContent = t.menu;
    }
    
    // Update close button text
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        const closeText = closeBtn.querySelector('.close-text');
        if (closeText) closeText.textContent = t.close;
    }
}

function updateFooterContent(lang) {
    const t = translations[lang];
    
    // Update footer headings
    const aboutUsHeadings = document.querySelectorAll('.footer-col h3');
    const servicesHeadings = document.querySelectorAll('.footer-col:nth-child(2) h3');
    const quickLinksHeadings = document.querySelectorAll('.footer-col:nth-child(3) h3');
    const followUsHeadings = document.querySelectorAll('.footer-col:nth-child(4) h3');
    
    if (aboutUsHeadings.length > 0) aboutUsHeadings[0].textContent = t.aboutUs;
    if (servicesHeadings.length > 0) servicesHeadings[0].textContent = t.services;
    if (quickLinksHeadings.length > 0) quickLinksHeadings[0].textContent = t.quickLinks;
    if (followUsHeadings.length > 0) followUsHeadings[0].textContent = t.followUs;
    
    // Update copyright text
    const copyright = document.querySelector('.footer-bottom p');
    if (copyright) {
        const currentYear = new Date().getFullYear();
        copyright.textContent = `© ${currentYear} Sweat Box APG. ${t.allRightsReserved}`;
    }
}

function updatePageContent(lang) {
    const t = translations[lang];
    const path = window.location.pathname;
    
    // Update hero section
    const heroTitle = document.querySelector('.hero-text h2');
    const heroSubtitle = document.querySelector('.hero-text .muted');
    const heroDescription = document.querySelector('.hero-text p');
    const getStartedBtn = document.querySelector('.hero-text .btn');
    
    if (heroTitle) heroTitle.textContent = t.heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
    if (heroDescription) heroDescription.textContent = t.heroDescription;
    if (getStartedBtn) getStartedBtn.textContent = t.getStarted;
    
    // Update page-specific content
    if (path.includes('about.html')) {
        updateAboutPage(lang);
    } else if (path.includes('trainers.html')) {
        updateTrainersPage(lang);
    } else if (path.includes('contact.html')) {
        updateContactPage(lang);
    } else if (path.includes('membership.html')) {
        updateMembershipPage(lang);
    } else if (path.includes('shop.html')) {
        updateShopPage(lang);
    }
}

function updateAboutPage(lang) {
    const t = translations[lang];
    const aboutTitle = document.querySelector('.about-hero h2');
    const aboutSubtitle = document.querySelector('.about-hero .muted');
    
    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
    if (aboutSubtitle) aboutSubtitle.textContent = t.aboutSubtitle;
    
    // Update about content sections
    const storyHeadings = document.querySelectorAll('h3');
    const missionHeadings = document.querySelectorAll('h3');
    const valuesHeadings = document.querySelectorAll('h3');
    
    // Update contact info
    const phoneLabels = document.querySelectorAll('.contact-info p');
    const emailLabels = document.querySelectorAll('.contact-info p');
    
    // Update buttons
    const contactButtons = document.querySelectorAll('.btn');
    contactButtons.forEach(btn => {
        if (btn.textContent.includes('Contact') || btn.textContent.includes('ያግኙን')) {
            btn.textContent = t.contact;
        }
    });
}

function updateTrainersPage(lang) {
    const t = translations[lang];
    const trainersTitle = document.querySelector('.trainers-hero h2');
    const trainersSubtitle = document.querySelector('.trainers-hero .muted');
    
    if (trainersTitle) trainersTitle.textContent = t.trainersTitle;
    if (trainersSubtitle) trainersSubtitle.textContent = t.trainersSubtitle;
    
    // Update trainer cards
    const specialtyLabels = document.querySelectorAll('.trainer-card h4');
    const experienceLabels = document.querySelectorAll('.trainer-card p');
    const bioLabels = document.querySelectorAll('.trainer-card .bio h4');
    
    specialtyLabels.forEach(label => {
        if (label.textContent.includes('Specialties') || label.textContent.includes('ልምዶች')) {
            label.textContent = t.specialties;
        }
    });
    
    experienceLabels.forEach(label => {
        if (label.textContent.includes('Experience') || label.textContent.includes('ልምድ')) {
            label.textContent = t.experience;
        }
    });
    
    bioLabels.forEach(label => {
        if (label.textContent.includes('Bio') || label.textContent.includes('ታሪክ')) {
            label.textContent = t.bio;
        }
    });
}

function updateContactPage(lang) {
    const t = translations[lang];
    const contactTitle = document.querySelector('.contact-hero h2');
    const contactSubtitle = document.querySelector('.contact-hero .muted');
    
    if (contactTitle) contactTitle.textContent = t.contactTitle;
    if (contactSubtitle) contactSubtitle.textContent = t.contactSubtitle;
    
    // Update form labels
    const nameLabel = document.querySelector('label[for="name"]');
    const emailLabel = document.querySelector('label[for="email"]');
    const messageLabel = document.querySelector('label[for="message"]');
    
    if (nameLabel) nameLabel.textContent = t.name;
    if (emailLabel) emailLabel.textContent = t.email;
    if (messageLabel) messageLabel.textContent = t.message;
    
    // Update form placeholders
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    if (nameInput) nameInput.placeholder = t.name;
    if (emailInput) emailInput.placeholder = t.email;
    if (messageInput) messageInput.placeholder = t.message;
    
    // Update submit button
    const submitBtn = document.querySelector('.contact-form .btn');
    if (submitBtn) submitBtn.textContent = t.send;
    
    // Update contact info
    const locationHeadings = document.querySelectorAll('.contact-info h3');
    const hoursHeadings = document.querySelectorAll('.contact-info h3');
    
    locationHeadings.forEach(heading => {
        if (heading.textContent.includes('Location') || heading.textContent.includes('አካባቢ')) {
            heading.textContent = t.location;
        }
    });
    
    hoursHeadings.forEach(heading => {
        if (heading.textContent.includes('Hours') || heading.textContent.includes('ሰዓታት')) {
            heading.textContent = t.hours;
        }
    });
}

function updateMembershipPage(lang) {
    const t = translations[lang];
    const membershipTitle = document.querySelector('.membership-hero h2');
    const membershipSubtitle = document.querySelector('.membership-hero .muted');
    
    if (membershipTitle) membershipTitle.textContent = t.membershipTitle;
    if (membershipSubtitle) membershipSubtitle.textContent = t.membershipSubtitle;
    
    // Update membership cards
    const selectPlanButtons = document.querySelectorAll('.membership-card .btn');
    const featuresHeadings = document.querySelectorAll('.membership-card h4');
    const priceLabels = document.querySelectorAll('.membership-card .price');
    
    selectPlanButtons.forEach(btn => {
        if (btn.textContent.includes('Select') || btn.textContent.includes('ይምረጡ')) {
            btn.textContent = t.selectPlan;
        }
    });
    
    featuresHeadings.forEach(heading => {
        if (heading.textContent.includes('Features') || heading.textContent.includes('ባህሪያት')) {
            heading.textContent = t.features;
        }
    });
    
    priceLabels.forEach(label => {
        if (label.textContent.includes('Price') || label.textContent.includes('ዋጋ')) {
            label.textContent = t.price;
        }
    });
}

function updateShopPage(lang) {
    const t = translations[lang];
    
    // Update product cards
    const addToCartButtons = document.querySelectorAll('.product-card .btn');
    const priceLabels = document.querySelectorAll('.product-card .price');
    const descriptionLabels = document.querySelectorAll('.product-card .description h4');
    
    addToCartButtons.forEach(btn => {
        if (btn.textContent.includes('Add to Cart') || btn.textContent.includes('ወደ ጋሪ')) {
            btn.textContent = t.addToCart;
        }
    });
    
    priceLabels.forEach(label => {
        if (label.textContent.includes('Price') || label.textContent.includes('ዋጋ')) {
            label.textContent = t.price;
        }
    });
    
    descriptionLabels.forEach(label => {
        if (label.textContent.includes('Description') || label.textContent.includes('መግለጫ')) {
            label.textContent = t.description;
        }
    });
    
    // Update cart section
    const cartHeadings = document.querySelectorAll('.cart-section h2');
    const checkoutButtons = document.querySelectorAll('.cart-section .btn');
    const totalLabels = document.querySelectorAll('.cart-section .total');
    
    cartHeadings.forEach(heading => {
        if (heading.textContent.includes('Cart') || heading.textContent.includes('ጋሪ')) {
            heading.textContent = t.cart;
        }
    });
    
    checkoutButtons.forEach(btn => {
        if (btn.textContent.includes('Checkout') || btn.textContent.includes('ይክፈሉ')) {
            btn.textContent = t.checkout;
        }
    });
    
    totalLabels.forEach(label => {
        if (label.textContent.includes('Total') || label.textContent.includes('ድምር')) {
            label.textContent = t.total;
        }
    });
}

// =============================================
// CART FUNCTIONALITY
// =============================================
function setupCartFunctionality() {
    // Ensure badges reflect current cart state on load (all pages)
    updateCartUI();
}

// =============================================
// MOBILE NAVIGATION FUNCTIONALITY
// =============================================
function setupMobileNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    const mobileButtons = document.querySelectorAll('.mobile-btn');

    // Open mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        mobileNavOverlay.classList.add('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Animate hamburger to X
        mobileMenuBtn.classList.add('active');
    });

    // Close mobile menu
    function closeMobileMenu() {
        mobileNavOverlay.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = ''; // Restore scrolling
        
        // Reset hamburger animation
        mobileMenuBtn.classList.remove('active');
    }

    // Close button functionality
    mobileCloseBtn.addEventListener('click', closeMobileMenu);

    // Close when clicking on overlay background
    mobileNavOverlay.addEventListener('click', (e) => {
        if (e.target === mobileNavOverlay) {
            closeMobileMenu();
        }
    });

    // Close when clicking on nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Handle mobile buttons (prevent menu close when clicking buttons)
    mobileButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent menu from closing
            
            // Handle specific button functionality
            if (button.id === 'cartBtn') {
                // Cart functionality - navigate to shop page
                window.location.href = 'shop.html';
            } else if (button.id === 'themeToggle') {
                // Theme toggle functionality
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                
                // Update theme
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('sb_theme', newTheme); // Use same key as desktop
                
                // Update button icon
                const icon = button.querySelector('.theme-icon');
                if (icon) {
                    icon.className = newTheme === 'light' ? 'fas fa-sun theme-icon' : 'fas fa-moon theme-icon';
                }
                
                // Update aria-pressed
                button.setAttribute('aria-pressed', newTheme === 'light' ? 'true' : 'false');
                
                // Update canvas colors if animated background exists
                const canvas = document.getElementById('bgCanvas');
                if (canvas && window.updateCanvasColors) {
                    window.updateCanvasColors();
                }
            } else if (button.id === 'langToggle') {
                // Language toggle functionality
                const currentLang = button.getAttribute('data-lang') || 'en';
                const newLang = currentLang === 'en' ? 'am' : 'en';
                
                // Update language
                button.setAttribute('data-lang', newLang);
                document.documentElement.setAttribute('data-lang', newLang);
                localStorage.setItem('preferredLanguage', newLang); // Use same key as desktop
                
                // Update button text
                const langText = button.querySelector('.lang-text');
                if (langText) {
                    langText.textContent = newLang.toUpperCase();
                }
                
                // Apply translations
                applyTranslations(newLang);
            }
        });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNavOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });

}

// =============================================
// GLOBAL UTILITY FUNCTIONS
// =============================================

// Show notification function
function showNotification(message, duration = 3000) {
    // Remove existing notification if any
    const existing = document.getElementById('sb-notification');
    if (existing) existing.remove();

    // Create new notification
    const notification = document.createElement('div');
    notification.id = 'sb-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--accent);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: var(--soft-shadow);
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Remove after duration
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, duration);
}

// Update theme icon based on current theme
function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    if (icon) {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// Update all theme toggle icons (desktop and mobile)
function updateAllThemeIcons(theme) {
    // Desktop theme icon
    const desktopIcon = document.querySelector('#themeToggle i');
    if (desktopIcon) {
        desktopIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
    
    // Mobile theme icon
    const mobileIcon = document.querySelector('#mobileThemeToggle i');
    if (mobileIcon) {
        mobileIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// =============================================
// THEME TOGGLE FUNCTIONALITY
// =============================================
function setupThemeToggle() {
    // Desktop theme toggle
    const themeToggle = document.getElementById('themeToggle');
    // Mobile theme toggle
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    
    if (!themeToggle && !mobileThemeToggle) return;

    const handleThemeToggle = (toggle) => {
        const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('sb_theme', next);
        toggle.setAttribute('aria-pressed', next === 'light');
        updateThemeIcon(next);
        
        // Update all theme toggle icons
        updateAllThemeIcons(next);
    };
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => handleThemeToggle(themeToggle));
    }
    
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', () => handleThemeToggle(mobileThemeToggle));
    }
}

// =============================================
// SHOP PAGE FUNCTIONALITY
// =============================================

// Banner Functionality
function initializeBannerSlider() {
    const bannerSlides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dots .dot');
    
    if (!bannerSlides.length || !dots.length) return;
    
    let currentSlide = 0;
    const slideCount = bannerSlides.length;
    
    // Set first slide as active initially
    bannerSlides[0].classList.add('active');
    
    // Manual navigation with dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
            resetInterval();
        });
    });
    
    function updateSlider() {
        // Hide all slides
        bannerSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Show current slide
        bannerSlides[currentSlide].classList.add('active');
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Auto-advance slides
    function autoAdvance() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    }
    
    // Set interval for auto-advance (every 4 seconds)
    let slideInterval = setInterval(autoAdvance, 4000);
    
    // Reset interval function
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(autoAdvance, 4000);
    }
}

const PRODUCTS = [
    // Shoes
    { id: 'p1', name: 'CrossFit Training Shoes', price: 2500, image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=800&q=60', description: 'High-performance training shoes for CrossFit.', category: 'shoes' },
    { id: 'p2', name: 'Running Shoes', price: 1800, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60', description: 'Lightweight running shoes for cardio sessions.', category: 'shoes' },
    { id: 'p3', name: 'Weightlifting Shoes', price: 3200, image: 'https://images.unsplash.com/photo-1596461404969-9372132a134a?auto=format&fit=crop&w=800&q=60', description: 'Stable and supportive shoes for heavy lifts.', category: 'shoes' },

    // Tops
    { id: 'p4', name: 'Performance T-Shirt', price: 800, image: 'https://images.unsplash.com/photo-1581655353564-df123a1642b1?auto=format&fit=crop&w=800&q=60', description: 'Moisture-wicking t-shirt for intense workouts.', category: 'tops' },
    { id: 'p5', name: 'Tank Top', price: 650, image: 'https://images.unsplash.com/photo-1611312449412-6cefac5dc2d0?auto=format&fit=crop&w=800&q=60', description: 'Breathable tank top for maximum mobility.', category: 'tops' },
    { id: 'p6', name: 'Hoodie', price: 1500, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=60', description: 'Comfortable hoodie for warm-ups and cool-downs.', category: 'tops' },

    // Bottoms
    { id: 'p7', name: 'Training Shorts', price: 900, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=60', description: 'Flexible and durable shorts for all types of training.', category: 'bottoms' },
    { id: 'p8', name: 'Joggers', price: 1200, image: 'https://images.unsplash.com/photo-1563389234822-1b0529798c73?auto=format&fit=crop&w=800&q=60', description: 'Stylish and comfortable joggers for gym and casual wear.', category: 'bottoms' },
    { id: 'p9', name: 'Compression Pants', price: 1100, image: 'https://images.unsplash.com/photo-1612871689353-ccc5b033aaac?auto=format&fit=crop&w=800&q=60', description: 'Supportive compression pants for improved performance.', category: 'bottoms' },

    // Weights
    { id: 'p10', name: 'Dumbbell Set', price: 5000, image: 'https://images.unsplash.com/photo-1584735935639-c09f2e571c37?auto=format&fit=crop&w=800&q=60', description: 'Adjustable dumbbell set for a variety of exercises.', category: 'weights' },
    { id: 'p11', name: 'Kettlebell', price: 2000, image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=60', description: 'Versatile kettlebell for strength and conditioning.', category: 'weights' },
    { id: 'p12', name: 'Barbell', price: 8000, image: 'https://images.unsplash.com/photo-1547919343-035b7185e6a8?auto=format&fit=crop&w=800&q=60', description: 'Olympic barbell for heavy lifting.', category: 'weights' },

    // Materials
    { id: 'p13', name: 'Yoga Mat', price: 700, image: 'https://images.unsplash.com/photo-1591291621229-a1d7c3b22b4a?auto=format&fit=crop&w=800&q=60', description: 'Non-slip yoga mat for stretching and floor exercises.', category: 'materials' },
    { id: 'p14', name: 'Resistance Bands', price: 500, image: 'https://images.unsplash.com/photo-1607962837359-5e7e8438a7da?auto=format&fit=crop&w=800&q=60', description: 'Set of resistance bands for strength and mobility.', category: 'materials' },
    { id: 'p15', name: 'Gymnastic Rings', price: 1500, image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=60', description: 'Wooden gymnastic rings for bodyweight training.', category: 'materials' },

    // Supplements
    { id: 'p16', name: 'Whey Protein', price: 3500, image: 'https://images.unsplash.com/photo-1579783902614-a345cd077227?auto=format&fit=crop&w=800&q=60', description: 'High-quality whey protein for muscle recovery.', category: 'supplements' },
    { id: 'p17', name: 'Creatine', price: 1200, image: 'https://images.unsplash.com/photo-1639413665432-8c17555f75f3?auto=format&fit=crop&w=800&q=60', description: 'Micronized creatine for increased strength and power.', category: 'supplements' },
    { id: 'p18', name: 'Pre-Workout', price: 1800, image: 'https://images.unsplash.com/photo-1623382121394-84c9b46a0691?auto=format&fit=crop&w=800&q=60', description: 'Energy-boosting pre-workout for intense training sessions.', category: 'supplements' }
];

// Cart management functions
function getCart() {
    return JSON.parse(localStorage.getItem('sb_cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('sb_cart', JSON.stringify(cart));
}

function addToCart(product, quantity = 1) {
    const cart = getCart();
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingItemIndex !== -1) {
        // Update quantity if product already in cart
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item to cart
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    saveCart(cart);
    updateCartUI();
    // If we're on the shop page and have the sidebar toggle, open it
    if (typeof toggleCartSidebar === 'function') toggleCartSidebar(true);
    
    // Show confirmation notification
    showNotification(`Added ${product.name} to cart!`);
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    updateCartUI();
}

function updateItemQuantity(productId, newQuantity) {
    if (newQuantity < 1) return removeFromCart(productId);
    
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity = newQuantity;
        saveCart(cart);
        updateCartUI();
    }
}

function clearCart() {
    saveCart([]);
    updateCartUI();
    showNotification('Cart cleared');
}

function calculateCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartUI() {
    // Update cart count badges
    const navCartCount = document.getElementById('navCartCount');
    const mobileCartCount = document.getElementById('mobileCartCount');
    const generalCartBadges = document.querySelectorAll('#cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const orderSummaryItems = document.getElementById('orderSummaryItems');
    const orderTotal = document.getElementById('orderTotal');
    
    const cart = getCart();
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Update cart count badges - ensure they're always visible with correct count
    if (navCartCount) {
        navCartCount.textContent = totalItems;
        navCartCount.style.display = 'flex';
        if (totalItems === 0) {
            navCartCount.textContent = '0';
        }
    }
    
    if (mobileCartCount) {
        mobileCartCount.textContent = totalItems;
        mobileCartCount.style.display = 'flex';
        if (totalItems === 0) {
            mobileCartCount.textContent = '0';
        }
    }

    // Also update any generic cart badges (used on non-shop pages)
    if (generalCartBadges && generalCartBadges.length) {
        generalCartBadges.forEach(badge => {
            badge.textContent = totalItems;
            badge.style.display = 'flex';
            if (totalItems === 0) badge.textContent = '0';
        });
    }
    
    // Update cart sidebar items
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        } else {
            cartItems.innerHTML = '';
            
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">${item.price.toLocaleString()} ETB</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <button class="remove-item" data-id="${item.id}">&times;</button>
                `;
                
                cartItems.appendChild(cartItem);
            });
            
            // Add event listeners for quantity buttons and remove buttons
            cartItems.querySelectorAll('.quantity-btn.minus').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = btn.getAttribute('data-id');
                    const item = cart.find(item => item.id === id);
                    if (item) updateItemQuantity(id, item.quantity - 1);
                });
            });
            
            cartItems.querySelectorAll('.quantity-btn.plus').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = btn.getAttribute('data-id');
                    const item = cart.find(item => item.id === id);
                    if (item) updateItemQuantity(id, item.quantity + 1);
                });
            });
            
            cartItems.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = btn.getAttribute('data-id');
                    removeFromCart(id);
                });
            });
        }
    }
    
    // Update cart total
    const total = calculateCartTotal();
    if (cartTotal) cartTotal.textContent = `${total.toLocaleString()} ETB`;
    
    // Update order summary in checkout modal
    if (orderSummaryItems && orderTotal) {
        if (cart.length === 0) {
            orderSummaryItems.innerHTML = '<div class="empty-order">No items in cart</div>';
            orderTotal.textContent = '0 ETB';
        } else {
            orderSummaryItems.innerHTML = '';
            
            cart.forEach(item => {
                const orderItem = document.createElement('div');
                orderItem.className = 'order-item';
                orderItem.innerHTML = `
                    <div class="order-item-name">${item.name} × ${item.quantity}</div>
                    <div class="order-item-price">${(item.price * item.quantity).toLocaleString()} ETB</div>
                `;
                
                orderSummaryItems.appendChild(orderItem);
            });
            
            orderTotal.textContent = `${total.toLocaleString()} ETB`;
        }
    }
}

// Render product list
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    // Get active category
    const activeCategory = document.querySelector('.category-tab.active')?.dataset.category || 'all';
    
    // Filter products by category
    const filteredProducts = activeCategory === 'all' 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category === activeCategory);
    
    // Clear existing products
    productsGrid.innerHTML = '';
    
    // Render filtered products
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.category = product.category;

        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-details">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" data-product-id="${product.id}" onclick='addToCart(${JSON.stringify(product)})'>
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
    
    // Add event listeners to Add to Cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            const product = PRODUCTS.find(p => p.id === productId);
            if (product) {
                addToCart(product);
            }
        });
    });
}

// Setup shop page functionality
function setupShopPage() {
    // Initialize banner slider
    initializeBannerSlider();
    
    // Render products initially so they appear automatically
    renderProducts();
    
    // Setup category tabs
    const categoryTabs = document.querySelectorAll('.category-tab');
    if (categoryTabs.length > 0) {
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                categoryTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');
                // Render products for selected category
                renderProducts();
            });
        });
    }
    
    // Setup cart sidebar toggle
    const navCartBtn = document.getElementById('navCartBtn');
    const mobileCartBtn = document.getElementById('mobileCartBtn');
    const closeCartBtn = document.getElementById('closeCart');
    const cartSidebar = document.getElementById('cartSidebar');
    
    // Function to toggle cart sidebar
    window.toggleCartSidebar = function(show) {
        if (!cartSidebar) return;
        
        if (show === undefined) {
            cartSidebar.classList.toggle('active');
        } else if (show) {
            cartSidebar.classList.add('active');
        } else {
            cartSidebar.classList.remove('active');
        }
    };
    
    // Add event listeners for cart buttons
    if (navCartBtn) {
        navCartBtn.addEventListener('click', () => toggleCartSidebar());
    }
    
    if (mobileCartBtn) {
        mobileCartBtn.addEventListener('click', () => toggleCartSidebar());
    }
    
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => toggleCartSidebar(false));
    }
    
    // Setup checkout functionality
    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutModal = document.getElementById('checkoutModal');
    const closeCheckoutBtn = document.getElementById('closeCheckout');
    
    // Function to toggle checkout modal
    function toggleCheckoutModal(show) {
        if (!checkoutModal) return;
        
        if (show === undefined) {
            checkoutModal.classList.toggle('open');
        } else if (show) {
            checkoutModal.classList.add('open');
        } else {
            checkoutModal.classList.remove('open');
        }
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            const cart = getCart();
            if (cart.length === 0) {
                showNotification('Your cart is empty');
                return;
            }
            toggleCartSidebar(false);
            toggleCheckoutModal(true);
        });
    }
    
    if (closeCheckoutBtn) {
        closeCheckoutBtn.addEventListener('click', () => toggleCheckoutModal(false));
    }
    
    // Setup checkout form submission
    const checkoutForm = document.getElementById('checkoutForm');
    const orderConfirmation = document.getElementById('orderConfirmation');
    const closeConfirmationBtn = document.getElementById('closeConfirmation');
    
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show order confirmation
            if (orderConfirmation) {
                toggleCheckoutModal(false);
                orderConfirmation.classList.add('open');

                // Populate simple order details
                const orderIdEl = document.getElementById('orderId');
                const orderDateEl = document.getElementById('orderDate');
                const orderTotalAmountEl = document.getElementById('orderTotalAmount');
                const total = calculateCartTotal();
                const orderId = 'SB-' + Math.random().toString(36).slice(2, 8).toUpperCase();
                if (orderIdEl) orderIdEl.textContent = orderId;
                if (orderDateEl) orderDateEl.textContent = new Date().toLocaleString();
                if (orderTotalAmountEl) orderTotalAmountEl.textContent = `${total.toLocaleString()} ETB`;

                // Clear cart after successful order
                clearCart();
            }
        });
    }

    // Close confirmation handler
    if (closeConfirmationBtn && orderConfirmation) {
        closeConfirmationBtn.addEventListener('click', () => {
            orderConfirmation.classList.remove('open');
        });
    }
    
    // Setup shop search functionality
    const shopSearch = document.getElementById('shopSearch');
    if (shopSearch) {
        shopSearch.addEventListener('input', () => {
            const searchTerm = shopSearch.value.toLowerCase().trim();
            const productCards = document.querySelectorAll('.product-card');
            
            productCards.forEach(card => {
                const productName = card.querySelector('.product-name').textContent.toLowerCase();
                const productDesc = card.querySelector('.product-description').textContent.toLowerCase();
                
                if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}

// =============================================
// SEARCH FUNCTIONALITY
// =============================================
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', () => {
        const q = searchInput.value.toLowerCase().trim();
        if (q.length < 2) return;

        // Search through page content
        const contentElements = Array.from(document.querySelectorAll('#pageContainer .page *'))
            .filter(el => el.children.length === 0 && el.textContent.trim().length > 0);

        let foundMatch = false;

        contentElements.forEach(el => {
            const text = el.textContent.toLowerCase();
            if (text.includes(q)) {
                foundMatch = true;
                const originalHTML = el.innerHTML;
                const regex = new RegExp(q, 'gi');
                el.innerHTML = el.innerHTML.replace(regex, match =>
                    `<span class="search-highlight">${match}</span>`
                );

                // Remove highlight after 3 seconds
                setTimeout(() => {
                    el.innerHTML = originalHTML;
                }, 3000);

                // Scroll to element
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });

        if (!foundMatch) {
            showNotification('No results found for: ' + q);
        }
    });
}

// =============================================
// MEMBERSHIP FORM HANDLING
// =============================================
function setupMembershipForm() {
    const memberForm = document.getElementById('memberForm');
    if (!memberForm) return;

    memberForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const payload = Object.fromEntries(data.entries());
        alert('Signed up (demo): ' + payload.first + ' ' + payload.last + ' — plan:' + payload.plan);
        e.target.reset();
        showNotification('Membership form submitted!');
    });
}

// =============================================
// CART BUTTON FUNCTIONALITY
// =============================================
function setupCartButton() {
    const cartBtn = document.getElementById('cartBtn');
    if (!cartBtn) return;

    cartBtn.addEventListener('click', () => {
        window.location.href = 'shop.html';
    });
}

// =============================================
// ANIMATED BACKGROUND FOR ALL PAGES
// =============================================
function setupAnimatedBackground() {
    const canvas = document.getElementById('bgCanvas');
    if (!canvas) {
        return;
    }

    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, deviceScale = Math.max(1, window.devicePixelRatio || 1);
    let animationId = null;
    let resizeTimeout = null;

    function resize() {
        // Cancel any pending resize to prevent multiple rapid resizes
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        
        resizeTimeout = setTimeout(() => {
            // Get current device pixel ratio
            deviceScale = Math.max(1, window.devicePixelRatio || 1);
            
            // Get actual viewport dimensions
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            
            // Set canvas internal resolution (for high DPI displays)
            w = canvas.width = Math.floor(viewportWidth * deviceScale);
            h = canvas.height = Math.floor(viewportHeight * deviceScale);
            
            // Set canvas CSS dimensions (for layout)
            canvas.style.width = viewportWidth + 'px';
            canvas.style.height = viewportHeight + 'px';
            
            // Scale the context to match device pixel ratio
            ctx.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
            
            // Update wave base positions for new viewport size
            waves.forEach((wave, index) => {
                wave.baseY = viewportHeight * (0.7 + index * 0.1);
            });
            
            // Clear any existing animation and restart
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            loop();
        }, 100); // Debounce resize events
    }

    // Enhanced resize event listener with passive option for better performance
    window.addEventListener('resize', resize, { passive: true });
    
    // Also listen for orientation changes on mobile devices
    window.addEventListener('orientationchange', () => {
        setTimeout(resize, 100); // Small delay to ensure viewport has updated
    }, { passive: true });
    
    // Initial resize
    resize();

    // ocean waves
    const waves = [];
    const WAVE_COUNT = 3;
    let time = 0;

    function themeColors() {
        const theme = document.documentElement.getAttribute('data-theme') || 'dark';
        if (theme === 'light') return { bgAlpha: 0.08, wave1: 'rgba(255,107,53,0.3)', wave2: 'rgba(255,140,105,0.2)', wave3: 'rgba(255,160,122,0.1)' };
        return { bgAlpha: 0.06, wave1: 'rgba(255,107,53,0.4)', wave2: 'rgba(255,140,105,0.3)', wave3: 'rgba(255,160,122,0.2)' };
    }

    class Wave {
        constructor(index) {
            this.index = index;
            this.amplitude = 30 + index * 15;
            this.frequency = 0.003 + index * 0.001;
            this.speed = 0.02 + index * 0.01;
            this.offset = index * Math.PI / 3;
            this.baseY = window.innerHeight * (0.7 + index * 0.1);
        }
        
        draw(ctx, colors, time) {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            
            ctx.beginPath();
            ctx.moveTo(0, this.baseY);
            
            for (let x = 0; x <= viewportWidth; x += 5) {
                const y = this.baseY + Math.sin(x * this.frequency + time * this.speed + this.offset) * this.amplitude;
                ctx.lineTo(x, y);
            }
            
            ctx.lineTo(viewportWidth, viewportHeight);
            ctx.lineTo(0, viewportHeight);
            ctx.closePath();
            
            const waveColor = this.index === 0 ? colors.wave1 : this.index === 1 ? colors.wave2 : colors.wave3;
            ctx.fillStyle = waveColor;
            ctx.fill();
        }
    }

    for (let i = 0; i < WAVE_COUNT; i++) waves.push(new Wave(i));

    // Interactive wave effect on mouse move with better device support
    canvas.addEventListener('pointermove', (e) => {
        const viewportWidth = window.innerWidth;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        waves.forEach((wave, index) => {
            const distance = Math.abs(mouseX - viewportWidth / 2);
            const influence = Math.max(0, 1 - distance / (viewportWidth / 2));
            wave.amplitude = (30 + index * 15) * (1 + influence * 0.5);
        });
    });

    canvas.addEventListener('pointerleave', () => {
        waves.forEach((wave, index) => {
            wave.amplitude = 30 + index * 15;
        });
    });

    function loop() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        ctx.clearRect(0, 0, viewportWidth, viewportHeight);
        const col = themeColors();
        
        // subtle background overlay
        ctx.fillStyle = `rgba(0,0,0,${col.bgAlpha})`;
        ctx.fillRect(0, 0, viewportWidth, viewportHeight);

        // update time
        time += 1;
        
        // draw ocean waves from back to front
        waves.forEach(wave => {
            wave.draw(ctx, col, time);
        });
        
        animationId = requestAnimationFrame(loop);
    }

    loop();

    // update when theme changes for immediate color switch
    new MutationObserver(() => { }).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
    });
    
    // Cleanup function to prevent memory leaks
    return function cleanup() {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        window.removeEventListener('resize', resize);
        window.removeEventListener('orientationchange', resize);
    };
}

// =============================================
// ACCESSIBILITY & KEYBOARD SHORTCUTS
// =============================================
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.altKey && !e.shiftKey) {
            const map = {
                Digit1: 'index.html',
                Digit2: 'about.html',
                Digit3: 'classes.html',
                Digit4: 'trainers.html',
                Digit5: 'shop.html',
                Digit6: 'membership.html',
                Digit7: 'contact.html'
            };
            if (map[e.code]) {
                window.location.href = map[e.code];
            }
        }
    });
}

// =============================================
// INITIALIZATION
// =============================================
function initializePage() {
    // Initialize theme
    const savedTheme = localStorage.getItem('sb_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Initialize language
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    document.documentElement.setAttribute('data-lang', savedLanguage);
    
    // Setup all functionality
    setupMobileNavigation();
    setupThemeToggle();
    setupCartFunctionality(); // Cart functionality
    setupSearch();
    setupMembershipForm();
    setupAnimatedBackground();
    setupKeyboardShortcuts();
    setupLanguageSwitcher();
    
    // Setup shop page if on shop.html
    if (window.location.pathname.includes('shop.html')) {
        setupShopPage();
    }
    
    // Apply initial translations
    applyTranslations(savedLanguage);
    
    // Update cart UI
    updateCartUI();
    
    // Render products if on shop page
    if (window.location.pathname.includes('shop.html')) {
        renderProducts();
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);

// =============================================
// SLIDING BANNER FUNCTIONALITY
// =============================================
let bannerInterval;
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.banner-arrow.prev');
const nextBtn = document.querySelector('.banner-arrow.next');

function initSlidingBanner() {
    // Only initialize if we're on the about page and have banner elements
    if (!document.querySelector('.sliding-banner-container')) return;
    
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.banner-arrow.prev');
    const nextBtn = document.querySelector('.banner-arrow.next');
    
    if (slides.length === 0) return;
    
    // Set first slide as active
    showSlide(0);
    
    // Start auto-sliding
    startAutoSlide();
    
    // Add event listeners for manual controls
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });
    }
    
    // Add event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            showSlide(index);
            startAutoSlide();
        });
    });
    
    // Pause on hover
    const bannerContainer = document.querySelector('.sliding-banner-container');
    if (bannerContainer) {
        bannerContainer.addEventListener('mouseenter', stopAutoSlide);
        bannerContainer.addEventListener('mouseleave', startAutoSlide);
    }
    
    // Handle touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    bannerContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoSlide();
    }, { passive: true });
    
    bannerContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoSlide();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left, go to next slide
                nextSlide();
            } else {
                // Swipe right, go to previous slide
                prevSlide();
            }
        }
    }
}

function showSlide(index) {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    // Remove active class from all slides and dots
    slides.forEach(slide => {
        slide.classList.remove('active', 'prev');
    });
    
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Handle index wrapping
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    // Add active class to current slide
    slides[currentSlide].classList.add('active');
    
    // Add prev class to slide before current for smooth transition
    const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    slides[prevIndex].classList.add('prev');
    
    // Add active class to current dot
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
    }
}

function nextSlide() {
    const slides = document.querySelectorAll('.banner-slide');
    if (slides.length === 0) return;
    
    showSlide(currentSlide + 1);
}

function prevSlide() {
    const slides = document.querySelectorAll('.banner-slide');
    if (slides.length === 0) return;
    
    showSlide(currentSlide - 1);
}

function startAutoSlide() {
    stopAutoSlide(); // Clear any existing interval
    bannerInterval = setInterval(() => {
        nextSlide();
    }, 5000); // Change slide every 5 seconds
}

function stopAutoSlide() {
    if (bannerInterval) {
        clearInterval(bannerInterval);
        bannerInterval = null;
    }
}

// Initialize sliding banner when page loads
document.addEventListener('DOMContentLoaded', () => {
    initSlidingBanner();
});

// Also initialize when navigating to about page (for single-page applications)
window.addEventListener('popstate', () => {
    setTimeout(initSlidingBanner, 100);
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    stopAutoSlide();
});

// SETTINGS DROPDOWN FUNCTIONALITY
// =============================================
function initializeSettingsDropdown() {
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsDropdown = document.getElementById('settingsDropdown');
    
    if (!settingsBtn || !settingsDropdown) return;
    
    // Toggle dropdown on settings button click
    settingsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const isOpen = settingsDropdown.classList.contains('show');
        
        // Close all other dropdowns
        closeAllDropdowns();
        
        if (!isOpen) {
            settingsDropdown.classList.add('show');
            settingsBtn.setAttribute('aria-expanded', 'true');
        } else {
            settingsDropdown.classList.remove('show');
            settingsBtn.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!settingsBtn.contains(e.target) && !settingsDropdown.contains(e.target)) {
            settingsDropdown.classList.remove('show');
            settingsBtn.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Close dropdown on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && settingsDropdown.classList.contains('show')) {
            settingsDropdown.classList.remove('show');
            settingsBtn.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Note: Theme and language toggles are handled by setupThemeToggle() and setupLanguageSwitcher()
    // We just need to handle dropdown closing when they're clicked
    
    // Handle theme toggle click to close dropdown
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            // Close dropdown after toggle
            setTimeout(() => {
                settingsDropdown.classList.remove('show');
                settingsBtn.setAttribute('aria-expanded', 'false');
            }, 100);
        });
    }
    
    // Handle language toggle click to close dropdown
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            // Close dropdown after toggle
            setTimeout(() => {
                settingsDropdown.classList.remove('show');
                settingsBtn.setAttribute('aria-expanded', 'false');
            }, 100);
        });
    }
}

// Helper function to close all dropdowns
function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll('.settings-dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
    });
    
    const settingsBtns = document.querySelectorAll('.settings-btn');
    settingsBtns.forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
    });
}

// Initialize settings dropdown when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSettingsDropdown);

// ENHANCED ABOUT PAGE FUNCTIONALITY
// =============================================

// Enhanced About Page Features
document.addEventListener('DOMContentLoaded', function() {
    // Initialize counters
    initializeCounters();
    
    // Initialize horizontal timeline animations
    initializeTimeline();
    
    // Initialize scroll effects
    initializeScrollEffects();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize community events
    initializeCommunityEvents();
    
    // Initialize progress bars
    initializeProgressBars();
    
    console.log('About page initialized successfully');
});

// Counter Animation Function
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number, .achievement-number');
    
    const animateCounter = (counter) => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    // Intersection Observer for counter animation
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Timeline Animations
function initializeTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
}

// Initialize Timeline
function initializeTimeline() {
    const timelineSteps = document.querySelectorAll('.timeline-step');
    
    if (timelineSteps.length === 0) return;
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a delay based on the index to create a sequential animation
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200);
            }
        });
    }, { threshold: 0.2 });
    
    timelineSteps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(20px)';
        step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        timelineObserver.observe(step);
    });
}

// Testimonial Carousel
function initializeTestimonialCarousel() {
    const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    if (!testimonialContainer || testimonialSlides.length === 0) return;
    
    let currentSlide = 0;
    
    function showSlide(index) {
        // Remove active class from all slides and dots
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        testimonialSlides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        
        // Update container transform
        testimonialContainer.style.transform = `translateX(-${index * 100}%)`;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
        showSlide(currentSlide);
    }
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto-play
    setInterval(nextSlide, 5000);
    
    // Initialize first slide
    showSlide(0);
}

// Enhanced Sliding Banner
function initializeEnhancedSlidingBanner() {
    const banner = document.querySelector('.sliding-banner-enhanced .sliding-banner');
    const slides = document.querySelectorAll('.sliding-banner-enhanced .banner-slide');
    const dots = document.querySelectorAll('.banner-dots .dot');
    const prevBtn = document.querySelector('.banner-arrow.prev');
    const nextBtn = document.querySelector('.banner-arrow.next');
    
    if (!banner || slides.length === 0) return;
    
    let currentSlide = 0;
    
    function showSlide(index) {
        // Remove active class from all dots
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current dot
        if (dots[index]) dots[index].classList.add('active');
        
        // Update banner transform
        banner.style.transform = `translateX(-${index * 100}%)`;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto-play
    setInterval(nextSlide, 6000);
    
    // Initialize first slide
    showSlide(0);
}

// Scroll Effects
function initializeScrollEffects() {
    // Parallax effect for hero section
    const heroSection = document.querySelector('.about-hero-enhanced');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroSection.style.transform = `translateY(${parallax}px)`;
        });
    }
    
    // Fade in animations for sections
    const sections = document.querySelectorAll('.timeline-section, .facilities-section, .achievements-section, .testimonials-section, .community-section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const heroButtons = document.querySelectorAll('.hero-btn');
    
    heroButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Community Events
function initializeCommunityEvents() {
    const calendarNav = document.querySelector('.calendar-nav');
    const calendarMonth = document.querySelector('.calendar-month');
    
    if (!calendarNav || !calendarMonth) return;
    
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    
    function updateCalendarMonth() {
        calendarMonth.textContent = `${months[currentMonth]} ${currentYear}`;
    }
    
    calendarNav.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            if (e.target.classList.contains('prev') || e.target.textContent.includes('fa-chevron-left')) {
                currentMonth--;
                if (currentMonth < 0) {
                    currentMonth = 11;
                    currentYear--;
                }
            } else if (e.target.classList.contains('next') || e.target.textContent.includes('fa-chevron-right')) {
                currentMonth++;
                if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear++;
                }
            }
            updateCalendarMonth();
        }
    });
    
    // Initialize calendar
    updateCalendarMonth();
}

// Progress Bar Animation
function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const width = entry.target.getAttribute('data-width') || '75%';
                entry.target.style.width = width;
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

// Initialize progress bars when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProgressBars);

// =============================================
// END OF ENHANCED ABOUT PAGE FUNCTIONALITY
// =============================================

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    stopAutoSlide();
});

// =============================================
// BACK TO TOP BUTTON FUNCTIONALITY
// =============================================

// Initialize back to top button
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) { // Show after scrolling 300px
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top when clicked
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Add some interactive effects to trainer cards
    const trainerCards = document.querySelectorAll('.trainer-card');
    trainerCards.forEach((card, index) => {
        // Add random floating animation delays
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Add interactive glow effect on hover
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(255, 107, 53, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
});

// Initialize banner slider
function initializeBannerSlider() {
    const slides = document.querySelectorAll('.banner-slide');
    
    let currentSlide = 0;
    let slideInterval;
    const slideDelay = 4000; // 4 seconds
    
    // Function to show a specific slide
    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Add active class to current slide
        slides[index].classList.add('active');
        
        currentSlide = index;
    }
    
    // Function to go to next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Function to start automatic sliding
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, slideDelay);
    }
    
    // Function to stop automatic sliding
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }
    
    // Start automatic sliding
    startAutoSlide();
}

// Initialize trainers page
function initializeTrainersPage() {
    // Initialize expandable trainer list
    const trainerListItems = document.querySelectorAll('.trainer-list-item');
    
    trainerListItems.forEach(item => {
        const header = item.querySelector('.trainer-list-header');
        const content = item.querySelector('.trainer-list-content');
        const expandIcon = item.querySelector('.expand-icon i');
        
        header.addEventListener('click', () => {
            const isExpanded = item.classList.contains('expanded');
            
            // Close all other items
            trainerListItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('expanded');
                    const otherContent = otherItem.querySelector('.trainer-list-content');
                    const otherIcon = otherItem.querySelector('.expand-icon i');
                    otherContent.style.maxHeight = '0';
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current item
            if (isExpanded) {
                item.classList.remove('expanded');
                content.style.maxHeight = '0';
                expandIcon.style.transform = 'rotate(0deg)';
            } else {
                item.classList.add('expanded');
                content.style.maxHeight = content.scrollHeight + 'px';
                expandIcon.style.transform = 'rotate(180deg)';
            }
        });
    });
    
    // Add smooth scroll for CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = ctaButton.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }
}

// =============================================
// ADVERTISING BANNER SLIDER FUNCTIONALITY
// =============================================
function initializeAdBannerSlider() {
    const slides = document.querySelectorAll('.ad-banner-slider .banner-slide');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    
    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Add active class to current slide
        slides[index].classList.add('active');
        
        // Force a reflow to ensure the slide is visible
        slides[index].offsetHeight;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Initialize first slide immediately
    showSlide(0);
    
    // Auto-play with 8-second interval
    setInterval(nextSlide, 8000);
}

document.addEventListener('DOMContentLoaded', function() {
    initializeBannerSlider();
    initializeTrainersPage();
    initializeAdBannerSlider();
});