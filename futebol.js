function mostrarSecao(id) {
    var secoes = document.querySelectorAll('section');
    secoes.forEach(function(secao) {
      secao.style.display = 'none';
    });

    var secao = document.getElementById(id);
    if (secao) {
      secao.style.display = 'block';
    }
  }

  window.addEventListener('scroll', function() {
        var botaoLogin = document.getElementById('botoes-login');
        var alturaDaPagina = window.pageYOffset || document.documentElement.scrollTop;
        if (alturaDaPagina > 100) {
            botaoLogin.classList.add('fixado');
        } else {
            botaoLogin.classList.remove('fixado');
        }
    });
  window.addEventListener('DOMContentLoaded', function() {
    mostrarSecao('Inicio');
  });
  const carouselContainer = document.querySelector('.carousel-container');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  
  let currentIndex = 0;
  let timer;
  
  function goToSlide(index) {
      currentIndex = index;
      carouselContainer.style.transform = `translateX(-${index * 100}%)`;
  }
  
  function nextSlide() {
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      goToSlide(currentIndex);
  }
  
  function prevSlide() {
      currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
      goToSlide(currentIndex);
  }
  
  nextButton.addEventListener('click', () => {
      clearInterval(timer);
      nextSlide();
  });
  
  prevButton.addEventListener('click', () => {
      clearInterval(timer);
      prevSlide();
  });
  
  function startCarousel() {
      timer = setInterval(nextSlide, 3000); // Avança para o próximo slide a cada 3 segundos
  }
  
  startCarousel();
  
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  
  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
  });
  function mostrarSecao(secao, link) {
    // Adicione a classe 'active' ao link clicado
    link.classList.add('active');
    
    // Adicione aqui sua lógica para mostrar a seção correspondente
  }
  document.addEventListener('DOMContentLoaded', function() {
    // Função para adicionar animação ao ir para a seção correspondente
    function addAnimationToSection(sectionId) {
      // Encontra a seção correspondente pelo ID
      const section = document.getElementById(sectionId);
      
      // Verifica se a seção foi encontrada e está visível
      if (section && isElementInViewport(section)) {
        // Adicione uma classe de animação à seção
        section.classList.add('animate-section');
        
        // Remova a classe de animação após um curto período de tempo
        setTimeout(function() {
          section.classList.remove('animate-section');
        }, 1000); // Ajuste o tempo conforme necessário
      }
    }
    
    // Função para verificar se um elemento está visível na viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    // Detecta mudanças na âncora (hash) da URL
    window.addEventListener('hashchange', function() {
      // Obtém a âncora atual da URL
      const currentHash = window.location.hash.substring(1);
      
      // Adiciona animação à seção correspondente
      addAnimationToSection(currentHash);
    });
  });
  
  

