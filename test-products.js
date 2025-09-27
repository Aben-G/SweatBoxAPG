// Test script to add sample products to the database
const { addProduct } = require('./database');

const sampleProducts = [
    {
        name: "SweatBox APG T-Shirt",
        description: "Premium cotton t-shirt with SweatBox APG logo. Comfortable and stylish for workouts.",
        price: 299.99,
        category: "apparel",
        image: "/images/image.png", // Using existing logo as placeholder
        stockQuantity: 50
    },
    {
        name: "Protein Powder - Vanilla",
        description: "High-quality whey protein powder for muscle building and recovery. 2kg container.",
        price: 1299.99,
        category: "supplements",
        image: "/images/image.png",
        stockQuantity: 25
    },
    {
        name: "Resistance Bands Set",
        description: "Complete set of resistance bands for strength training and rehabilitation.",
        price: 599.99,
        category: "equipment",
        image: "/images/image.png",
        stockQuantity: 30
    },
    {
        name: "Gym Water Bottle",
        description: "1L stainless steel water bottle with SweatBox APG branding.",
        price: 149.99,
        category: "accessories",
        image: "/images/image.png",
        stockQuantity: 100
    },
    {
        name: "Monthly Membership",
        description: "Full access to all gym facilities and group classes for one month.",
        price: 899.99,
        category: "memberships",
        image: "/images/image.png",
        stockQuantity: 999
    }
];

async function addSampleProducts() {
    console.log('Adding sample products...');
    
    for (const product of sampleProducts) {
        try {
            const result = await addProduct(product);
            console.log(`✅ Added: ${product.name} (ID: ${result.id})`);
        } catch (error) {
            console.error(`❌ Failed to add ${product.name}:`, error.message);
        }
    }
    
    console.log('Sample products added successfully!');
    process.exit(0);
}

addSampleProducts();
