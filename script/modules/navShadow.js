export const navShadow = () => {
  const nav = document.querySelector('.header_nav'); 
  const navHeight = nav.offsetHeight; 
  
window.addEventListener('scroll', () => {
  if (window.scrollY > navHeight) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }
});
}

export default navShadow; 