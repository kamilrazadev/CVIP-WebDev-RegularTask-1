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
        productImage:  "./assets/product-images/laptops/1.png", 
        productTitle: "HP Probook i5 10th Gen",
        productPrice: "$109"
    },
    {
        productImage:  "./assets/product-images/laptops/1.png", 
        productTitle: "HP Probook i5 10th Gen",
        productPrice: "$109"
    },
    {
        productImage:  "./assets/product-images/laptops/1.png", 
        productTitle: "HP Probook i5 10th Gen",
        productPrice: "$109"
    },
    {
        productImage:  "./assets/product-images/laptops/1.png", 
        productTitle: "Haroon Laptop",
        productPrice: "$219"
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
    const ProductContainer = document.getElementById('products-container');

    const productHTMLArray = Laptops.map(laptop => ProductCard(laptop));

    console.log(productHTMLArray)

    ProductContainer.innerHTML = productHTMLArray.join('');
}

// Call the displayProducts function to generate and display the product cards
displayProducts();
