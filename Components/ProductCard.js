const Laptops = [
    {
        productImage:  "./assets/product-images/laptops/1.png", 
        productTitle: "Dell Latitute E7440",
        productPrice: "$99"
    },
    {
        productImage:  "./assets/product-images/laptops/2.png", 
        productTitle: "HP Probook i5 10th Gen",
        productPrice: "$109"
    },
    {
        productImage:  "./assets/product-images/laptops/3.png", 
        productTitle: "HP Probook i7 5th Gen",
        productPrice: "$178"
    },
    {
        productImage:  "./assets/product-images/laptops/4.webp", 
        productTitle: "HP Probook i5 10th Gen",
        productPrice: "$119"
    },
    {
        productImage:  "./assets/product-images/laptops/5.png", 
        productTitle: "Acer Laptop",
        productPrice: "$219"
    }
]

const Mobiles = [
    {
        productImage:  "./assets/product-images/mobiles/1.webp", 
        productTitle: "iPhone 14 Pro Max",
        productPrice: "$199"
    },
    {
        productImage:  "./assets/product-images/mobiles/2.webp", 
        productTitle: "Redmi Note 9S",
        productPrice: "$109"
    },
    {
        productImage:  "./assets/product-images/mobiles/3.png", 
        productTitle: "iPhone 11",
        productPrice: "$119"
    },
    {
        productImage:  "./assets/product-images/mobiles/4.webp", 
        productTitle: "iPhone XS Max",
        productPrice: "$78"
    },
    {
        productImage:  "./assets/product-images/mobiles/5.jpg", 
        productTitle: "One Plus Nord 200 5G",
        productPrice: "$89"
    }
]

const Tablets = [
    {
        productImage:  "./assets/product-images/tablets/1.png", 
        productTitle: "iPad",
        productPrice: "$109"
    },
    {
        productImage:  "./assets/product-images/tablets/2.webp", 
        productTitle: "Samsung Galaxy Tab S9 Ultra",
        productPrice: "$159"
    },
    {
        productImage:  "./assets/product-images/tablets/3.avif", 
        productTitle: "Lenove Tab P12",
        productPrice: "$65"
    },
    {
        productImage:  "./assets/product-images/tablets/4.webp", 
        productTitle: "Realme Pad 2",
        productPrice: "$78"
    }
]

function ProductCard(product) {
    return `
    <div class="product-card">
        <div class="over"></div>
        <img src=${product.productImage} alt="Product Image" class="product-img">
        <div class="product-discription">
            <h4 class="product-title">${product.productTitle}</h4>
            <h4 class="product-price">${product.productPrice}</h4>
        </div>
        <button class="buy-btn">
            BUY NOW
        </button>
    </div>
    `;
}

function displayProducts() {
    const laptopContainer = document.getElementById('laptops-container');
    const mobileContainer = document.getElementById('mobiles-container');
    const tabletsContainer = document.getElementById('tablets-container');


    const laptopHTMLArray = Laptops.map(laptop => ProductCard(laptop));
    const mobileHTMLArray = Mobiles.map(mobile => ProductCard(mobile));
    const tabletsHTMLArray = Tablets.map(tablet => ProductCard(tablet));


    laptopContainer.innerHTML = laptopHTMLArray.join('');
    mobileContainer.innerHTML = mobileHTMLArray.join('');
    tabletsContainer.innerHTML = tabletsHTMLArray.join('');


}

// Call the displayProducts function to generate and display the product cards
displayProducts();
