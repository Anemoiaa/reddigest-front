
document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.header');
    const headerDate = document.querySelector('.header__date');
    const headerIcons = document.querySelectorAll('.header__icon');

    window.onscroll = function() {
        headerShrink()
    };

    function headerShrink() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.style.height = '30px';
            headerDate.style.padding = '4px 45px';
            headerDate.style.fontSize = '18px';
            headerIcons.forEach(icon => {
                icon.style.width = '24px';
                icon.style.height = '24px';
            })

        } else {
            header.style.height = '60px';
            headerDate.style.padding = '18px 33px';
            headerDate.style.fontSize = '20px';
            headerIcons.forEach(icon => {
                icon.style.width = '25px';
                icon.style.height = '25px';
            })
        }
    }
});
