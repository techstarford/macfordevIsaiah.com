// Simple script to handle sidebar links
        document.querySelectorAll('.sidebar-links a').forEach(link => {
            link.addEventListener('click', function(e) {
                // Remove active class from all links
                document.querySelectorAll('.sidebar-links a').forEach(l => {
                    l.classList.remove('active');
                });
                
                // Add active class to clicked link
                this.classList.add('active');
            });
        });