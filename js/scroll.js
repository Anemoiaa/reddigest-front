document.addEventListener('DOMContentLoaded', () => {

    const afterHeader = document.querySelector('.after-header');
    const logo = document.querySelector('.logo img');
    const logoDiv = document.querySelector('.logo');
    const searchBar = document.querySelector('.search-bar');
    const burgerMenu = document.querySelector('.burger-menu .menu');
    const burgerMenuBtn = document.querySelector('.burger-menu');

    window.onscroll = function () {
        afterHeaderShrink()
    };
    afterHeaderShrink()

    function afterHeaderShrink() {
        if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
            afterHeader.style.top = '0';
            logo.style.width = '60%';
            logoDiv.style.marginLeft = '-5px';
            searchBar.style.padding = '2px 15px';
            burgerMenuBtn.style.display = 'block';

        } else {
            afterHeader.style.top = '56px';
            logo.style.width = '80%';
            logoDiv.style.marginLeft = '-9px';
            searchBar.style.padding = '5px 15px';
            burgerMenuBtn.style.display = 'none';
        }
    }

    burgerMenuBtn.addEventListener('click', () => {
        if(burgerMenu.style.display == 'block') {
            burgerMenu.style.display = 'none'
        } else {
            burgerMenu.style.display = 'block';
        }
    })
});

