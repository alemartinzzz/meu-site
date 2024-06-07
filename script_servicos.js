document.addEventListener("DOMContentLoaded", function() {
    const contents = document.querySelectorAll('.content');
    const servicoSelect = document.getElementById('servico');
    const orcamentoValor = document.getElementById('orcamento-valor');

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

    function toggleOrcamentoValor() {
        const selectedValue = servicoSelect.value;
        if (selectedValue === 'web' || selectedValue === 'mobile') {
            orcamentoValor.style.display = 'block';
        } else {
            orcamentoValor.style.display = 'none';
        }
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition(); // Check position on page load

    servicoSelect.addEventListener('change', toggleOrcamentoValor);

    const form = document.getElementById('orcamento-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Orçamento solicitado com sucesso! Entraremos em contato em breve.');
        form.reset();
        toggleOrcamentoValor(); // Hide the orcamento valor section after reset
    });

    toggleOrcamentoValor(); // Ensure the correct state on load
});
