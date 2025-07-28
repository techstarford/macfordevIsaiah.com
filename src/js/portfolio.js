/*// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a nav link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  header.classList.toggle("scrolled", window.scrollY > 0);
});

// Back to Top Button
const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add("active");
  } else {
    backToTopBtn.classList.remove("active");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

*/ 

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

        // Load More Button
        const loadMoreBtn = document.querySelector('.load-more .btn');
        let visibleItems = 12; // Initial number of visible items
        const allItems = document.querySelectorAll('.portfolio-item');
        
        // Hide items beyond initial visible count
        Array.from(allItems).slice(visibleItems).forEach(item => {
            item.style.display = 'none';
        });
        
        loadMoreBtn.addEventListener('click', () => {
            visibleItems += 6; // Load 6 more items
            
            // Show next batch of items
            Array.from(allItems).slice(visibleItems - 6, visibleItems).forEach(item => {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease';
            });
            
            // Hide button if all items are visible
            if (visibleItems >= allItems.length) {
                loadMoreBtn.style.display = 'none';
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
     