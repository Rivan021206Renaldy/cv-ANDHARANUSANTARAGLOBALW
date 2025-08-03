// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.getElementById('navbar-menu');
    
    // Periksa apakah elemen ada sebelum menambahkan event listener
    if (mobileMenu && navbarMenu) {
        mobileMenu.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
            // Tambahkan animasi untuk hamburger menu
            this.classList.toggle('active');
        });
        
        // Tutup menu saat mengklik link
        const navLinks = document.querySelectorAll('.navbar-menu ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
        
        // Tutup menu saat mengklik di luar menu
        document.addEventListener('click', function(event) {
            const isClickInsideNavbar = navbarMenu.contains(event.target) || mobileMenu.contains(event.target);
            if (!isClickInsideNavbar && navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    }
});
