
        // Mobile Navigation
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking a nav link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Sticky Header
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            header.classList.toggle('scrolled', window.scrollY > 0);
        });

        // Back to Top Button
        const backToTopBtn = document.querySelector('.back-to-top');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Portfolio Filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Portfolio Modal
        const viewBtns = document.querySelectorAll('.view-btn');
        const modals = document.querySelectorAll('.modal');
        const closeModalBtns = document.querySelectorAll('.close-modal');

        viewBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const modalId = btn.getAttribute('data-id');
                document.getElementById(`modal-${modalId}`).style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.closest('.modal').style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            modals.forEach(modal => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        });

        // Like Button Functionality
        const likeBtns = document.querySelectorAll('.like-btn');

        likeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const likeCount = btn.querySelector('.like-count');
                let count = parseInt(likeCount.textContent);
                
                if (btn.classList.contains('liked')) {
                    count--;
                    btn.classList.remove('liked');
                } else {
                    count++;
                    btn.classList.add('liked');
                }
                
                likeCount.textContent = count;
            });
        });

        // Favorite Button Functionality
        const favoriteBtns = document.querySelectorAll('.favorite-btn');

        favoriteBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('favorited');
                const icon = btn.querySelector('i');
                if (btn.classList.contains('favorited')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                }
            });
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Initialize Swiper for Blog Slider
        const blogSwiper = new Swiper('.blog-slider', {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.blog-slider .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                }
            }
        });

        // Initialize Swiper for Testimonial Slider
        const testimonialSwiper = new Swiper('.testimonial-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.testimonial-slider .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                }
            }
        });

        // Contact Form Submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            // For this example, we'll just log it and show an alert
            console.log({ name, email, subject, message });
            
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });

        // Newsletter Form Submission
        const newsletterForm = document.querySelector('.newsletter-form');
        
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            // Here you would typically send the email to a server
            console.log('Subscribed email:', email);
            
            alert('Thank you for subscribing to my newsletter!');
            newsletterForm.reset();
        });

        // Animate Skill Bars on Scroll
        const skillBars = document.querySelectorAll('.skill-progress');

        function animateSkillBars() {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }

        // Intersection Observer for skill bars
        const aboutSection = document.querySelector('.about');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(aboutSection);

        // Search Functionality
        const searchBar = document.querySelector('.search-bar');
        const searchBtn = document.querySelector('.search-btn');
        
        function performSearch() {
            const searchTerm = searchBar.value.toLowerCase();
            
            if (searchTerm.trim() === '') {
                portfolioItems.forEach(item => {
                    item.style.display = 'block';
                });
                return;
            }
            
            portfolioItems.forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const description = item.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
        
        searchBtn.addEventListener('click', performSearch);
        searchBar.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        // Lazy Loading Images
        const lazyImages = document.querySelectorAll('.lazy');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('src');
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });


        // Enhanced Modal Functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize all modals
            const modals = document.querySelectorAll('.modal');
            
            // Show modal function
            function showModal(modalId) {
                const modal = document.getElementById(`modal-${modalId}`);
                if (modal) {
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    modal.querySelector('.modal-content').style.animation = 'modalFadeIn 0.3s ease';
                }
            }
            
            // Hide modal function
            function hideModal(modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            
            // View button click handler
            document.querySelectorAll('.view-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const modalId = this.getAttribute('data-id');
                    showModal(modalId);
                });
            });
            
            // Close button click handler
            document.querySelectorAll('.close-modal').forEach(btn => {
                btn.addEventListener('click', function() {
                    hideModal(this.closest('.modal'));
                });
            });
            
            // Close modal when clicking outside
            window.addEventListener('click', function(e) {
                if (e.target.classList.contains('modal')) {
                    hideModal(e.target);
                }
            });
            
            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    document.querySelectorAll('.modal').forEach(modal => {
                        if (modal.style.display === 'block') {
                            hideModal(modal);
                        }
                    });
                }
            });
            
            // Ensure all modals are hidden on page load
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        });