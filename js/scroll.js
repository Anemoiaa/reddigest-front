document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.header');
    const headerDate = document.querySelector('.header__date');
    const headerIcons = document.querySelectorAll('.header__icon');
    const afterHeader = document.querySelector('.after-header');
    const logo = document.querySelector('.logo img');
    const logoDiv = document.querySelector('.logo');
    const socMedia = document.querySelector('.header__soc-media');

    window.onscroll = function () {
        headerShrink()
    };
    headerShrink()

    function headerShrink() {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            header.style.height = '17px';
            headerDate.style.padding = '4px 45px';
            headerDate.style.fontSize = '16px';
            headerIcons.forEach(icon => {
                icon.style.width = '15px';
                icon.style.height = '15px';
            });
            afterHeader.style.marginTop = '0px';
            logo.style.width = '50%';
            logoDiv.style.marginLeft = '-5px';
            socMedia.style.gap = '12px';

        } else {
            header.style.height = '37px';
            headerDate.style.padding = '18px 33px';
            headerDate.style.fontSize = '20px';
            headerIcons.forEach(icon => {
                icon.style.width = '25px';
                icon.style.height = '25px';
            })
            afterHeader.style.marginTop = '12px';
            logo.style.width = '80%';
            logoDiv.style.marginLeft = '-9px';
            socMedia.style.gap = '22px';
        }
    }
});

