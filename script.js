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
        
        // Hero Section
        heroTitle: "Welcome to Sweat Box APG",
        heroSubtitle: "Addis Ababa's Premier Performance Gym",
        heroDescription: "Transform your fitness journey with state-of-the-art equipment, expert trainers, and a community that pushes you to be your best.",
        getStarted: "Get Started",
        
        // Common
        searchPlaceholder: "Search trainers, products…",
        viewMore: "View More",
        learnMore: "Learn More",
        
        // About Page
        aboutTitle: "About Sweat Box APG",
        aboutSubtitle: "Your Fitness Journey Starts Here",
        ourStory: "Our Story",
        ourStoryText: "Founded with a passion for fitness excellence, Sweat Box APG has become Addis Ababa's most trusted performance gym. We combine cutting-edge equipment with personalized training to help you achieve your fitness goals.",
        ourMission: "Our Mission",
        ourMissionText: "To empower individuals through fitness, providing world-class facilities, expert guidance, and a supportive community that inspires lasting health and wellness.",
        contact: "Contact",
        phone: "+251 11 639 2624",
        email: "contact@sweatboxapg.com",
        
        // Trainers Page
        trainersTitle: "Expert Trainers",
        trainersSubtitle: "Meet Our Certified Fitness Professionals",
        specialties: "Specialties",
        experience: "Experience",
        
        // Contact Page
        contactTitle: "Contact Us",
        contactSubtitle: "Get in Touch with Sweat Box APG",
        send: "Send Message",
        name: "Name",
        email: "Email",
        message: "Message",
        
        // Membership Page
        membershipTitle: "Membership Plans",
        membershipSubtitle: "Choose Your Fitness Journey",
        selectPlan: "Select Plan",
        
        // Shop Page
        shopTitle: "Fitness Shop",
        shopSubtitle: "Premium Fitness Equipment & Supplements",
        addToCart: "Add to Cart",
        price: "Price"
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
        
        // Hero Section
        heroTitle: "እንኳን ወደ ስዌት ቦክስ ኤፒጂ በደህና መጡ",
        heroSubtitle: "የአዲስ አበባ ቀዳሚ የፍትህ ጉዞ ማእበቻ",
        heroDescription: "የዘመናዊ መሳሪያዎች፣ የባለሙያ ስልጠና ሰጪዎች እና የሚያስተውልዎ ማህበረሰብ በመጠቀም የፍትህ ጉዞዎን ይለውጡ።",
        getStarted: "ይጀምሩ",
        
        // Common
        searchPlaceholder: "ስልጠና ሰጪዎች፣ ምርቶችን ይፈልጉ…",
        viewMore: "ተጨማሪ ይመልከቱ",
        learnMore: "ተጨማሪ ይወቁ",
        
        // About Page
        aboutTitle: "ስለ ስዌት ቦክስ ኤፒጂ",
        aboutSubtitle: "የፍትህ ጉዎዎ እዚህ ይጀምራል",
        ourStory: "ታሪካችን",
        ourStoryText: "በፍትህ የተሞላ ትልቅ ፍላጎት በመጀመር የተመሰረተው ስዌት ቦክስ ኤፒጂ ወደ አዲስ አበባ በጣም የሚታመን የፍትህ ጉዞ ማእበቻ ሆኗል። የዘመናዊ መሳሪያዎችን ከግል ስልጠና ጋር በማዋሃድ የፍትህ ዓላማዎችዎን ለማሳካት እንረዳዎታለን።",
        ourMission: "ተልዕኮችን",
        ourMissionText: "በፍትህ የተሞላ ሰዎችን በመቀላቀል፣ የዓለም ክፍል መመሪያዎች፣ የባለሙያ መመሪያዎች እና የሚያስተውል ማህበረሰብ በመስጠት የረዥም ጊዜ ጤናን እና ደህንነትን ለማሳያ ነው።",
        contact: "ያግኙን",
        phone: "+251 11 639 2624",
        email: "contact@sweatboxapg.com",
        
        // Trainers Page
        trainersTitle: "የባለሙያ ስልጠና ሰጪዎች",
        trainersSubtitle: "የተረጋገጡ የፍትህ ሙያተኞችን ይገኙባቸው",
        specialties: "ልምዶች",
        experience: "ልምድ",
        
        // Contact Page
        contactTitle: "ያግኙን",
        contactSubtitle: "ከስዌት ቦክስ ኤፒጂ ጋር ይገናኙ",
        send: "መልዕክት ይላኩ",
        name: "ስም",
        email: "ኢሜይል",
        message: "መልዕክት",
        
        // Membership Page
        membershipTitle: "የአባልነት እቅዶች",
        membershipSubtitle: "የፍትህ ጉዎዎን ይምረጡ",
        selectPlan: "እቅድ ይምረጡ",
        
        // Shop Page
        shopTitle: "የፍትህ ሱቅ",
        shopSubtitle: "የፍትህ መሳሪያዎች እና ተጨማሪ ምግቦች",
        addToCart: "ወደ ጋሪ ያክሉ",
        price: "ዋጋ"
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
    
    // Update header buttons
    const cartLabel = document.querySelector('#cartBtn .btn-label');
    const themeLabel = document.querySelector('#themeToggle .btn-label');
    if (cartLabel) cartLabel.textContent = t.myCart;
    if (themeLabel) themeLabel.textContent = t.theme;
    
    // Update search placeholder
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;
    
    // Update page titles based on current page
    updatePageContent(lang);
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
}

function updateTrainersPage(lang) {
    const t = translations[lang];
    const trainersTitle = document.querySelector('.trainers-hero h2');
    const trainersSubtitle = document.querySelector('.trainers-hero .muted');
    
    if (trainersTitle) trainersTitle.textContent = t.trainersTitle;
    if (trainersSubtitle) trainersSubtitle.textContent = t.trainersSubtitle;
}

function updateContactPage(lang) {
    const t = translations[lang];
    const contactTitle = document.querySelector('.contact-hero h2');
    const contactSubtitle = document.querySelector('.contact-hero .muted');
    
    if (contactTitle) contactTitle.textContent = t.contactTitle;
    if (contactSubtitle) contactSubtitle.textContent = t.contactSubtitle;
}

function updateMembershipPage(lang) {
    const t = translations[lang];
    const membershipTitle = document.querySelector('.membership-hero h2');
    const membershipSubtitle = document.querySelector('.membership-hero .muted');
    
    if (membershipTitle) membershipTitle.textContent = t.membershipTitle;
    if (membershipSubtitle) membershipSubtitle.textContent = t.membershipSubtitle;
}

function updateShopPage(lang) {
    const t = translations[lang];
    const shopTitle = document.querySelector('.shop-hero h2');
    const shopSubtitle = document.querySelector('.shop-hero .muted');
    
    if (shopTitle) shopTitle.textContent = t.shopTitle;
    if (shopSubtitle) shopSubtitle.textContent = t.shopSubtitle;
}

// =============================================
// MOBILE NAVIGATION FUNCTIONALITY
// =============================================
function setupMobileNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    // Open mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        mobileNavOverlay.classList.add('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Close mobile menu
    function closeMobileMenu() {
        mobileNavOverlay.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Close button click
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
    
    // Setup all functionality
    setupMobileNavigation();
    setupThemeToggle();
    setupCart();
    setupCartButton();
    setupSearch();
    setupMembershipForm();
    setupAnimatedBackground();
    setupKeyboardShortcuts();
    setupLanguageSwitcher();
    
    // Update cart UI
    updateCartUI();
    
    // Render products if on shop page
    renderProducts();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);