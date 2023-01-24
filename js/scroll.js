document.addEventListener('DOMContentLoaded', () => {

    const afterHeader = document.querySelector('.after-header');
    const logo = document.querySelector('.logo img');
    const logoDiv = document.querySelector('.logo');
    const searchBar = document.querySelector('.search-bar');

    window.onscroll = function () {
        afterHeaderShrink()
    };
    afterHeaderShrink()

    function afterHeaderShrink() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            afterHeader.style.top = '0';
            logo.style.width = '60%';
            logoDiv.style.marginLeft = '-5px';
            searchBar.style.padding = '2px 15px'

        } else {
            afterHeader.style.top = '56px';
            logo.style.width = '80%';
            logoDiv.style.marginLeft = '-9px';
            searchBar.style.padding = '5px 15px'
        }
    }
});

