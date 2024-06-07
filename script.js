// script.js

// Preloader
window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

// Função para mostrar/esconder o botão "Voltar ao Topo"
window.onscroll = function() {
    var backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Função para rolar a página de volta ao topo
document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Função para alternar o modo escuro
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    var icon = this.querySelector("i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");

    // Adiciona a classe dark-mode aos itens do carrossel
    var carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach(function(item) {
        item.classList.toggle('dark-mode');
    });

    // Adiciona a classe dark-mode aos testemunhos
    var testemunhos = document.querySelectorAll('.testemunho');
    testemunhos.forEach(function(item) {
        item.classList.toggle('dark-mode');
    });
});

// Função para mostrar mensagem de feedback no formulário
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var formResponse = document.getElementById("form-response");
    formResponse.style.display = "block";
    formResponse.textContent = "Mensagem enviada com sucesso!";
    formResponse.style.backgroundColor = "#00b2ff";
    formResponse.style.color = "#fff";
    setTimeout(function() {
        formResponse.style.display = "none";
    }, 3000);
    // Mostrar um pop-up de confirmação
    alert("Sua mensagem foi enviada com sucesso!");
});

// Menu Responsivo
document.getElementById("menu-toggle").addEventListener("click", function() {
    var nav = document.getElementById("nav-bar");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Rolagem Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animações de Aparição
var sections = document.querySelectorAll('.section');
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});
