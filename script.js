document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById('preloader');
  const hero = document.getElementById('hero');
  
  // Disable scrolling immediately when page loads
  disableScroll();
  
  function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden'; // Also prevent scrolling on html element
  }
  
  function enableScroll() {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }

  setTimeout(() => {
    preloader.style.display = 'none';
    hero.classList.add('show');
    // Enable scrolling after preloader is gone
    enableScroll();
  }, 4000);
}); 