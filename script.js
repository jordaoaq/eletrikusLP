/*_____________Variáveis Globais_____________*/
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const menuMobile = document.querySelector('.menu-mobile');
    const navLinks = document.querySelector('.nav-links');
    
    let currentIndex = 0;
    let firstClick = false;
    let touchStartX = 0;
    let touchEndX = 0;

    /*_____________Dados das Lojas_____________*/
    const storeData = {
        'santos': {
            phone: '(13) 99632-1122 <br> (13) 3307-8555',
            address: 'Rua Minas Gerais, 13 - Boqueirão',
            hours: 'Todos os dias das 9h às 21h',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.7713523261846!2d-46.32711882415692!3d-23.968524178522152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce0300a4666c9b%3A0xdaafd52847df5bd2!2sR.%20Minas%20Gerais%2C%2013%20-%20Boqueir%C3%A3o%2C%20Santos%20-%20SP%2C%2011055-100!5e0!3m2!1spt-BR!2sbr!4v1737507898174!5m2!1spt-BR!2sbr'
        },
        'praia-grande': {
            phone: '(13) 99615-4897',
            address: 'Av. Pres. Castelo Branco, 1580 - Boqueirão',
            hours: 'Todos os dias das 9h às 21h',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.508516917217!2d-46.41794002415574!3d-24.01312667849201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1db74abf4845%3A0xf06cc8ee640194d6!2sAv.%20Pres.%20Castelo%20Branco%2C%201580%20-%20Boqueir%C3%A3o%2C%20Praia%20Grande%20-%20SP%2C%2011700-015!5e0!3m2!1spt-BR!2sbr!4v1737508495880!5m2!1spt-BR!2sbr'
        },
        'sao-vicente': {
            locations: {
                'japui': {
                    address: 'Av. Tupiniquins, 1110 - Japuí',
                    phone: '(13) 99615-4897',
                    hours: 'Todos os dias das 9h às 19h',
                    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.320818700925!2d-46.3976351241566!3d-23.984445678511356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1cf13e6c009b%3A0x71d159893ce6e11d!2sAv.%20Tupiniquins%2C%201110%20-%20Japu%C3%AD%2C%20Praia%20Grande%20-%20SP%2C%2011325-000!5e0!3m2!1spt-BR!2sbr!4v1737509146468!5m2!1spt-BR!2sbr'
                },
                'brisamar': {
                    address: 'R. Frei Gaspar, 365 - Centro',
                    phone: '(13) 99632-1122',
                    hours: 'Segunda à Sábado das 10h às 22h <br> Domingo das 12h às 21h',
                    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.4476283795287!2d-46.39641562415661!3d-23.977514978516036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1c7ed4fb3399%3A0x308f7d8b6e4363ab!2sR.%20Frei%20Gaspar%2C%20365%20-%20Centro%2C%20S%C3%A3o%20Vicente%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1737509012345!5m2!1spt-BR!2sbr'
                }
            }
        },
        'itanhaem': {
            phone: '(13) 3426-7763',
            address: 'Rua Leopoldino Araújo, 199 - Centro',
            hours: 'Todos os dias das 9h às 21h',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.6733353337772!2d-46.78802402415114!3d-24.183186578377622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d1d59d4839a805%3A0x716f56655e8ae6f!2sR.%20Leopoldino%20Ara%C3%BAjo%2C%20199%20-%20Centro%2C%20Itanha%C3%A9m%20-%20SP%2C%2011740-000!5e0!3m2!1spt-BR!2sbr!4v1737508653774!5m2!1spt-BR!2sbr'
        }
    };

    /*_____________Funções de Navegação_____________*/
    function initializeEventListeners() {
        const produtosLink = document.querySelector('a[href="#produtos"]');
        produtosLink?.addEventListener('click', function(e) {
            e.preventDefault();
            const vehiclesSection = document.querySelector('.vehicles-section');
            vehiclesSection.scrollIntoView({ behavior: 'smooth' });
        });

        const inicioLink = document.querySelector('a[href="#inicio"]');
        inicioLink?.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        const sobreLink = document.querySelector('a[href="#sobre"]');
        sobreLink?.addEventListener('click', function(e) {
            e.preventDefault();
            const sobreSection = document.getElementById('sobre');
            sobreSection.scrollIntoView({ behavior: 'smooth' });
        });
        
        const avaliacoesLink = document.querySelector('a[href="#avaliacoes"]');
        avaliacoesLink?.addEventListener('click', function(e) {
            e.preventDefault();
            const avaliacoesSection = document.getElementById('avaliacoes');
            avaliacoesSection.scrollIntoView({ behavior: 'smooth' });
        });

        const nossasLojasBtn = document.querySelector('.nossas-lojas');
        nossasLojasBtn?.addEventListener('click', () => {
            const storesSection = document.querySelector('.stores-section');
            storesSection.scrollIntoView({ behavior: 'smooth' });
        });

        const scrollProgress = document.getElementById("progress");
        const progressValue = document.getElementById("progress-value");
        const scrollIndicator = document.querySelector('.scroll-indicator');

        function handleScroll() {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }

            let pos = document.documentElement.scrollTop;
            let calcHeight = 
                document.documentElement.scrollHeight - 
                document.documentElement.clientHeight;
            let scrollValue = Math.round((pos * 100) / calcHeight);

            if (pos > 100) {
                scrollProgress.style.display = "grid";
            } else {
                scrollProgress.style.display = "none";
            }

            scrollProgress.style.background = `conic-gradient(#00B517 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
        }

        scrollProgress?.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleScroll);

        const storeButtons = document.querySelectorAll('.store-btn');
        storeButtons.forEach(button => {
            button.addEventListener('click', () => {
                storeButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                updateStoreInfo(button.dataset.city);
            });
        });

        document.querySelectorAll('.location-btn').forEach(button => {
            button.addEventListener('click', () => {
                updateLocation(button.dataset.location);
            });
        });

        updateStoreInfo('santos');
    }

    /*_____________Funções do Carrossel_____________*/
    function rotateCarousel(newIndex) {
        if (newIndex === currentIndex && firstClick) return;
        
        const positions = items.length;
        const titleElement = document.getElementById('moto-title');
        
        // Remove active class first
        titleElement.classList.remove('active');
        
        // Use setTimeout to ensure the transition works
        setTimeout(() => {
            titleElement.textContent = items[newIndex].getAttribute('data-title');
            titleElement.classList.add('active');
        }, 50);
        
        if (!firstClick) {
            firstClick = true;
            document.querySelector('.specs-container').style.opacity = '1';
            document.querySelector('.vehicles-section').classList.add('has-specs');
        }

        items.forEach((item, index) => {
            let offset = index - newIndex;
            
            if (offset > positions / 2) {
                offset -= positions;
            } else if (offset < -positions / 2) {
                offset += positions;
            }

            const distance = Math.abs(offset);
            const opacity = 1 - (distance * 0.2);
            const zIndex = positions - distance;

            const spacing = window.innerWidth <= 480 ? 150 : 
                           window.innerWidth <= 768 ? 200 :
                           window.innerWidth <= 968 ? 250 : 
                           300;
            const xPos = offset * spacing;
            
            let yPos;
            if (distance === 0) {
                yPos = -30;
            } else if (distance === 1) {
                yPos = 0;
            } else {
                yPos = 30;
            }
            
            const zPos = -distance * 100;

            if (window.innerWidth <= 968 && distance > 1) {
                item.style.visibility = 'hidden';
                item.style.opacity = '0';
                item.style.pointerEvents = 'none';
            } else {
                item.style.visibility = 'visible';
                item.style.opacity = opacity;
                item.style.pointerEvents = 'auto';
            }

            item.style.transition = 'all 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)';
            item.style.transform = `translate3d(${xPos}px, ${yPos}px, ${zPos}px) rotateY(${offset * 5}deg)`;
            item.style.zIndex = zIndex;

            const isAdjacent = Math.abs(index - newIndex) === 1;
            const isLastToFirst = (newIndex === 0 && index === positions - 1) || 
                                (newIndex === positions - 1 && index === 0);
            
            if (isAdjacent || isLastToFirst) {
                item.classList.add('clickable');
            } else {
                item.classList.remove('clickable');
            }
        });

        const specs = items[newIndex].dataset;
        document.getElementById('spec-motor').textContent = specs.motor || '-';
        document.getElementById('spec-bateria').textContent = specs.bateria || '-';
        document.getElementById('spec-velocidade').textContent = specs.velocidade || '-';
        document.getElementById('spec-autonomia').textContent = specs.autonomia || '-';
        document.getElementById('spec-pneu').textContent = specs.pneu || '-';
        document.getElementById('spec-freios').textContent = specs.freios || '-';
        document.getElementById('spec-peso').textContent = specs.peso || '-';
        document.getElementById('spec-recarga').textContent = specs.recarga || '-';
        
        currentIndex = newIndex;
    }

    function initializeCarousel() {
        if (!carousel || !items.length) return;

        // Configurar posições iniciais
        items.forEach((item, index) => {
            const offset = index;
            const spacing = window.innerWidth <= 480 ? 150 : 
                           window.innerWidth <= 968 ? 180 : 
                           300;
            const xPos = offset * spacing;
            const scale = 1 - (Math.abs(offset) * 0.15);
            const zIndex = items.length - Math.abs(offset);

            item.style.transform = `translate3d(${xPos}px, 0, 0) scale(${scale})`;
            item.style.zIndex = zIndex;
            
            // Adicionar event listeners de touch para mobile
            item.addEventListener('touchstart', handleTouchStart);
            item.addEventListener('touchmove', handleTouchMove);
            item.addEventListener('touchend', handleTouchEnd);
        });

        // Mostrar o primeiro item
        rotateCarousel(0);
    }

    /*_____________Funções de Toque Mobile_____________*/
    function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX;
    }

    function handleTouchMove(e) {
        touchEndX = e.touches[0].clientX;
    }

    function handleTouchEnd() {
        const touchDelta = touchStartX - touchEndX;
        const positions = items.length;
        
        if (Math.abs(touchDelta) > 50) { // Mínimo de movimento para considerar um swipe
            let newIndex = currentIndex;
            
            if (touchDelta > 0) { // Swipe para esquerda
                newIndex = (currentIndex + 1) % positions;
            } else { // Swipe para direita
                newIndex = (currentIndex - 1 + positions) % positions;
            }
            
            rotateCarousel(newIndex);
        }
    }

    /*_____________Funções do Menu Mobile_____________*/
    function toggleMobileMenu() {
        navLinks.classList.toggle('active');
        menuMobile.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }

    function closeMobileMenu() {
        navLinks.classList.remove('active');
        menuMobile.classList.remove('active');
        document.body.classList.remove('menu-open');
    }

    // Adicionar event listeners para os links do menu
    document.querySelectorAll('.nav-links a, .nav-links .nossas-lojas').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 968) {
                closeMobileMenu();
            }
        });
    });

    /*_____________Funções das Lojas_____________*/
    function updateStoreInfo(city) {
        const data = storeData[city];
        const locationButtons = document.getElementById('location-buttons');
        
        document.getElementById('store-email').textContent = 'eletrikus.suporte@gmail.com';
        
        if (city === 'sao-vicente') {
            locationButtons.style.display = 'flex';
            updateLocation('japui');
        } else {
            locationButtons.style.display = 'none';
            document.getElementById('store-phone').innerHTML = data.phone;
            document.getElementById('store-hours').innerHTML = data.hours;
            document.getElementById('store-address').textContent = data.address;
            document.getElementById('store-map').innerHTML = `
                <iframe src="${data.map}" 
                        width="100%" 
                        height="100%" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy">
                </iframe>`;
        }
    }

    function updateLocation(location) {
        const data = storeData['sao-vicente'].locations[location];
        document.getElementById('store-address').textContent = data.address;
        document.getElementById('store-phone').innerHTML = data.phone;
        document.getElementById('store-hours').innerHTML = data.hours;
        document.getElementById('store-map').innerHTML = `
            <iframe src="${data.map}" 
                    width="100%" 
                    height="100%" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy">
            </iframe>`;
        
        document.querySelectorAll('.location-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.location === location);
        });
    }

    /*_____________Event Listeners_____________*/
    menuMobile.addEventListener('click', toggleMobileMenu);

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            const indexDiff = Math.abs(index - currentIndex);
            const isLastToFirst = currentIndex === items.length - 1 && index === 0;
            const isFirstToLast = currentIndex === 0 && index === items.length - 1;
            
            if (indexDiff === 1 || isLastToFirst || isFirstToLast) {
                rotateCarousel(index);
            }
        });
    });

    window.addEventListener('resize', () => {
        rotateCarousel(currentIndex);
    });

    /*_____________Inicialização_____________*/
    initializeCarousel();
    initializeEventListeners();
}); 