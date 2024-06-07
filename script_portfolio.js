document.addEventListener("DOMContentLoaded", function() {
    const contents = document.querySelectorAll('.content');

    function checkPosition() {
        const windowHeight = window.innerHeight;

        contents.forEach(content => {
            const contentTop = content.getBoundingClientRect().top;

            if (contentTop < windowHeight - 100) {
                content.style.transform = 'translateY(0)';
                content.style.opacity = '1';
            } else {
                content.style.transform = 'translateY(50px)';
                content.style.opacity = '0';
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition(); // Check position on page load
});
