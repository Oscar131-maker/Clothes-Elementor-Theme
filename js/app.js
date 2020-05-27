// navegation menu
const menuContent = document.querySelector('#header');
const menu = document.querySelector('.list-container');
const btnMenu = document.querySelector('.btn-menu');
const btnMenuBar = document.querySelector('.btn-menu i');
let on_off = true;

// Activate Menu
btnMenu.addEventListener('click', () => {
    
    btnMenuBar.classList.toggle('fa-times');

    if (on_off) {
      menu.style.top = "60px";
      menu.style.transition = "900ms";
      on_off = false;
    }else{
        on_off = false;
        menu.style.top = "-100%";
        menu.style.transition = "900ms";
        on_off = true;
    }
});

// Box Shadow menu
window.onscroll = () => {
    let pixelscroll = window.pageYOffset;

    if(pixelscroll >= 657) {
      menuContent.classList.add('nav-box-shadow');
    }else{
      menuContent.classList.remove('nav-box-shadow');
    }

    // Go Top
    if(pixelscroll >= 1000){
      document.querySelector('.go-top').style.right = "0";
      document.querySelector('.go-top').style.transition = "250ms";
    }else{
      document.querySelector('.go-top').style.right = "-100%";
      document.querySelector('.go-top').style.transition = "250ms";
    }

}

// Search Form - Menu
const menusearch = document.querySelector('.menu-icons .fa-search');
const menusearchForm = document.querySelector('.searchform-menu-content');
const closeForm = document.querySelector('.searchform-menu-content .fa-times');

menusearch.addEventListener('click', () => {
   menusearchForm.style.top = "0";
   menusearchForm.style.transition = "500ms";
});

closeForm.addEventListener('click', () => {
    menusearchForm.style.top = "-100%";
   menusearchForm.style.transition = "700ms";
});





