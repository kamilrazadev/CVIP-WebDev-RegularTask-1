function NavBar(){
    const NavBarContainer = document.getElementById('navbar')
    NavBarContainer.innerHTML = `
    <nav>
    <h3 class="nav-brand">
        <a href="#">DIGISTORE</a>
    </h3>
    <!-- Large Screen Nav Bar -->
    <ul class="nav-links">
        <a href="#">
            <li class="nav-link">
                Home
                <img src="./assets/icons/homepageIcon.png" class="nav-icon icon-small"/>
            </li>
        </a>
        <a href="#about-section">
            <li class="nav-link">
                About
                <img src="./assets/icons/aboutIcon.png" class="nav-icon icon-small"/>
            </li>
        </a>
        <a href="#products-section">
            <li class="nav-link">
                Products
                <img src="./assets/icons/productsIcon.png" class="nav-icon icon-large"/>
            </li>    
        </a>
    <!-- <li class="nav-link">
            Categories
            <img src="./assets/icons/categoryIcon.png" class="nav-icon icon-medium"/>
        </li>    -->
        <a href="#contact-section">
            <li class="nav-link">
                Contact
                <img src="./assets/icons/cartIcon.png" class="nav-icon icon-small"/>
            </li>
        </a>
    </ul>
    <!-- Responsive Nav Bar -->
    <ul class="nav-links-responsive" id="nav-links">
        <a href="#">
            <li class="nav-link" onclick="goToSection()">
                Home
                <img src="./assets/icons/homepageIcon.png" class="nav-icon icon-small"/>
            </li>
        </a>
        <a href="#about-section">
            <li class="nav-link" onclick="goToSection()">
                About
                <img src="./assets/icons/aboutIcon.png" class="nav-icon icon-small"/>
            </li>
        </a>
        <a href="#products-section">
            <li class="nav-link" onclick="goToSection()">
                Products
                <img src="./assets/icons/productsIcon.png" class="nav-icon icon-large"/>
            </li>
        </a>
        <!-- <li class="nav-link">
            Categories
            <img src="./assets/icons/categoryIcon.png" class="nav-icon icon-medium"/>
        </li> -->
        <a href="#contact-section">
            <li class="nav-link" onclick="goToSection()">
                Contact
                <img src="./assets/icons/cartIcon.png" class="nav-icon icon-small"/>
            </li>
        </a>
        <!-- <li class="nav-link">
            Login
            <img src="./assets/icons/loginIconWhite.png" class="login-icon"/>
        </li> -->
        <li class="nav-search">
            <input type="text" class="search-input" id="search-input">
            <img src="./assets/icons/cancelIcon.png" alt="Cancel" class="cancel-icon" id="cancel-icon" onclick="hideSearchInput()">
            <img src="./assets/icons/searchIcon.png" alt="Search" class="search-icon" onclick="showSearchInput()" >
        </li>
    </ul>
    <!-- Nav Side Bar -->
    <ul class="nav-side">
        <!-- <li class="nav-link" onclick="showLoginModal()">
            Login
            <img src="./assets/icons/loginIcon.png" class="login-icon">
        </li> -->
        <li class="nav-search">
            <input type="text" class="search-input" id="search-input">
            <img src="./assets/icons/cancelIcon.png" alt="Cancel" class="cancel-icon" id="cancel-icon" onclick="hideSearchInput()">
            <img src="./assets/icons/searchIcon.png" alt="Search" class="search-icon" onclick="showSearchInput()" >
        </li>
    </ul>
    <!-- NavBar Toggle Button -->
    <input type="checkbox" id="checkbox">
    <label for="checkbox" class="toggle" onclick="showNavLinks()">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
    </label>
</nav>
    `
}

NavBar();

// let checkClick = true;

function showSearchInput() {
    const searchInputElem = document.getElementById('search-input');
    const cancelIcon = document.getElementById('cancel-icon')

    // if(checkClick)
        searchInputElem.style.width = '150px';
        searchInputElem.style.borderBottom = '1px solid #E2007C'
        searchInputElem.style.transform = 'scale(1)'  
        searchInputElem.focus();
        
        cancelIcon.style.opacity = '1'
        
        // checkClick = !checkClick

    // } 
}

function hideSearchInput(){

        const searchInputElem = document.getElementById('search-input');
        const cancelIcon = document.getElementById('cancel-icon')

        searchInputElem.style.width = '0';
        searchInputElem.style.border = 'none'
        searchInputElem.style.transform = 'scale(0)'   

        cancelIcon.style.opacity = '0'
        
        searchInputElem.value = '';

        // checkClick = !checkClick
}

    let navShow = false;

function showNavLinks(){
    const navBar = document.getElementById('nav-links')

    if(!navShow){
        navBar.style.left = '0'
        navBar.style.transform = 'scaleX(1)'

        navShow = !navShow
    } else {
        navBar.style.left = '-100%'
        navBar.style.transform = 'scaleX(0)'

        navShow = !navShow
        }
}

function showLoginModal(){
    
}

function goToSection(){
    const navToggleCheckbox = document.getElementById('checkbox');
    
    navToggleCheckbox.checked = false;
    showNavLinks();

}