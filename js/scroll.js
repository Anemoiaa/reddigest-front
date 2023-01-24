document.addEventListener('DOMContentLoaded', () => {

    const afterHeader = document.querySelector('.after-header');
    const logo = document.querySelector('.logo img');
    const logoDiv = document.querySelector('.logo');

    window.onscroll = function () {
        afterHeaderShrink()
    };
    afterHeaderShrink()

    function afterHeaderShrink() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            afterHeader.style.top = '0';
            logo.style.width = '60%';
            logoDiv.style.marginLeft = '-5px';

        } else {
            afterHeader.style.top = '56px';
            logo.style.width = '80%';
            logoDiv.style.marginLeft = '-9px';;
        }
    }
});

