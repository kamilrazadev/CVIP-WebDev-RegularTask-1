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

        navShow = !navShow
    } else {
        navBar.style.left = '-100%'
        navShow = !navShow
        }
}