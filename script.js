


    const input = document.querySelector('.theme-switcher input');

    const panels = document.querySelectorAll('.panel');

    function changeColor(e) {
        if (e.target.checked) {
            document.body.setAttribute('data-theme', 'dark');

        } else {
            document.body.setAttribute('data-theme', 'light');
        }
    }

    input.addEventListener('change', changeColor);





    function toggleOpen() {

        this.classList.toggle('open');
    }


    function toggleActive(e) {
        if (e.propertyName.includes("flex")) {
            this.classList.toggle('open-active');
        }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));







    window.onload = changeColor;

