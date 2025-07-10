    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    function toggleMenu() {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('active');
    }

    function closeMenu() {
      hamburger.classList.remove('open');
      navLinks.classList.remove('active');
    }
