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
    const langToggle = document.getElementById('langToggle');
    const langLabel = langToggle.querySelector('.btn-label');
    
    // Load saved language or default to English
    let currentLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // Update button state
    langToggle.setAttribute('data-lang', currentLang);
    langLabel.textContent = currentLang.toUpperCase();
    
    // Apply translations
    applyTranslations(currentLang);
    
    // Toggle language on click
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'am' : 'en';
        
        // Save preference
        localStorage.setItem('preferredLanguage', currentLang);
        
        // Update button
        langToggle.setAttribute('data-lang', currentLang);
        langLabel.textContent = currentLang.toUpperCase();
        
        // Apply translations
        applyTranslations(currentLang);
    });
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
    const langLabel = document.querySelector('#langToggle .btn-label');
    if (cartLabel) cartLabel.textContent = t.myCart;
    if (themeLabel) themeLabel.textContent = t.theme;
    if (langLabel) langLabel.textContent = lang.toUpperCase();
    
    // Update mobile header buttons
    const mobileCartLabel = document.querySelector('.mobile-controls #cartBtn .btn-label');
    const mobileThemeLabel = document.querySelector('.mobile-controls #themeToggle .btn-label');
    const mobileLangLabel = document.querySelector('.mobile-controls #langToggle .lang-text');
    if (mobileCartLabel) mobileCartLabel.textContent = t.myCart;
    if (mobileThemeLabel) mobileThemeLabel.textContent = t.theme;
    if (mobileLangLabel) mobileLangLabel.textContent = lang.toUpperCase();
    
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
    const shopTitle = document.querySelector('.shop-hero h2');
    const shopSubtitle = document.querySelector('.shop-hero .muted');
    
    if (shopTitle) shopTitle.textContent = t.shopTitle;
    if (shopSubtitle) shopSubtitle.textContent = t.shopSubtitle;
    
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
    // Initialize cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Update cart count for all cart badges
    function updateCartCount() {
        const cartBadges = document.querySelectorAll('#cartCount');
        const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
        
        cartBadges.forEach(badge => {
            badge.textContent = totalItems;
            badge.style.display = totalItems > 0 ? 'inline-flex' : 'none';
        });
    }
    
    // Add to cart function
    window.addToCart = function(product) {
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // Show notification
        showNotification(`${product.name} added to cart!`);
    };
    
    // Remove from cart function
    window.removeFromCart = function(productId) {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    };
    
    // Get cart function
    window.getCart = function() {
        return cart;
    };
    
    // Clear cart function
    window.clearCart = function() {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    };
    
    // Initial cart count update
    updateCartCount();
    
    // Set up cart button clicks
    const cartButtons = document.querySelectorAll('#cartBtn');
    cartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = 'shop.html';
        });
    });
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

// =============================================
// THEME TOGGLE FUNCTIONALITY
// =============================================
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('sb_theme', next);
        themeToggle.setAttribute('aria-pressed', next === 'light');
        updateThemeIcon(next);
    });
}

// =============================================
// CART MANAGEMENT FUNCTIONALITY
// =============================================
const PRODUCTS = [
    { id: 'p1', name: 'Sweat Box Tee', price: 650, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bSUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60', desc: 'Comfort fit gym tee.' },
    { id: 'p2', name: 'Protein Shaker', price: 300, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60', desc: '700ml shaker bottle.' },
    { id: 'p3', name: 'Performance Hoodie', price: 2200, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9vZGllfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60', desc: 'Warm hoodie for training.' },
    { id: 'p4', name: '1 Month Membership (Digital)', price: 3999, img: 'https://images.unsplash.com/photo-1554284126-aa88f22d8b6f?auto=format&fit=crop&w=800&q=60', desc: 'One month access to all classes.' }
];

// Cart management functions
function getCart() {
    return JSON.parse(localStorage.getItem('sb_cart') || '{}');
}

function saveCart(c) {
    localStorage.setItem('sb_cart', JSON.stringify(c));
}

function addToCart(productId, qty = 1) {
    const cart = getCart();
    cart[productId] = (cart[productId] || 0) + qty;
    saveCart(cart);
    updateCartUI();

    // Show confirmation
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
        showNotification(`Added ${product.name} to cart!`);
    }
}

function removeFromCart(productId) {
    const cart = getCart();
    delete cart[productId];
    saveCart(cart);
    updateCartUI();
}

function clearCart() {
    localStorage.removeItem('sb_cart');
    updateCartUI();
    showNotification('Cart cleared');
}

function updateCartUI() {
    const cartCountEl = document.getElementById('cartCount');
    const cartItemsEl = document.getElementById('cartItems');

    if (!cartCountEl || !cartItemsEl) return;

    const cart = getCart();
    const keys = Object.keys(cart);

    if (!keys.length) {
        cartItemsEl.innerHTML = 'No items yet.';
        cartCountEl.innerText = '0';
        return;
    }

    let html = '<ul class="muted small">';
    let total = 0;

    keys.forEach(id => {
        const qty = cart[id];
        const p = PRODUCTS.find(x => x.id === id) || { name: id, price: 0 };
        html += `<li>${p.name} × ${qty} — ${(p.price * qty).toLocaleString()} ETB <button class="btn" data-remove="${id}" style="margin-left:10px">Remove</button></li>`;
        total += p.price * qty;
    });

    html += `</ul><div style="margin-top:8px"><strong>Total: ${total.toLocaleString()} ETB</strong></div>`;
    cartItemsEl.innerHTML = html;
    cartCountEl.innerText = keys.reduce((s, k) => s + cart[k], 0);

    // Add event listeners to Remove buttons
    cartItemsEl.querySelectorAll('[data-remove]').forEach(b => {
        b.addEventListener('click', (e) => {
            removeFromCart(b.getAttribute('data-remove'));
        });
    });
}

// Render product list
function renderProducts() {
    const productListEl = document.getElementById('productList');
    if (!productListEl) return;

    productListEl.innerHTML = '';
    PRODUCTS.forEach(p => {
        const item = document.createElement('div');
        item.className = 'product panel';
        item.innerHTML = `
            <img src="${p.img}" alt="${p.name}" loading="lazy" />
            <div class="product-info">
                <strong>${p.name}</strong>
                <div class="muted small">${p.desc}</div>
                <div style="margin-top:8px; display:flex; gap:8px; align-items:center">
                    <div class="price">${p.price.toLocaleString()} ETB</div>
                    <button class="btn" data-add='${p.id}'>Add</button>
                </div>
            </div>
        `;
        productListEl.appendChild(item);
    });

    // Add event listeners to Add buttons
    productListEl.querySelectorAll('[data-add]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = btn.getAttribute('data-add');
            addToCart(id);
        });
    });
}

// Setup cart functionality
function setupCart() {
    const clearCartBtn = document.getElementById('clearCart');
    const checkoutBtn = document.getElementById('checkoutBtn');

    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            const cart = getCart();
            if (Object.keys(cart).length === 0) {
                showNotification('Cart is empty');
                return;
            }
            // Demo checkout:
            alert('Checkout demo — this is client-side only. Implement payment & server to capture orders.');
            clearCart();
        });
    }

    // Quick buy buttons (day/week passes)
    document.querySelectorAll('[data-buy]').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = JSON.parse(btn.getAttribute('data-buy'));
            addToCart(item.id, 1);
            // Store product details if absent
            if (!PRODUCTS.find(p => p.id === item.id)) {
                PRODUCTS.push({ id: item.id, name: item.name, price: item.price, img: '', desc: '' });
            }
            renderProducts();
            updateCartUI();
        });
    });
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
    setupCartFunctionality(); // New cart functionality
    setupCartButton();
    setupSearch();
    setupMembershipForm();
    setupAnimatedBackground();
    setupKeyboardShortcuts();
    setupLanguageSwitcher();
    
    // Apply initial translations
    applyTranslations(savedLanguage);
    
    // Update cart UI
    updateCartUI();
    
    // Render products if on shop page
    renderProducts();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);