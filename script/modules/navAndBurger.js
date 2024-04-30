export const navAndBurger = () => {

  const linkList = document.querySelector('.header_nav-list');
  const openBurger  = document.querySelector('.burger-trigger')
  const closeBurger = document.querySelector('.burger-exit')
  
  if (window.innerWidth <= 768) {
      linkList.classList.add('burger-menu');
    } 
  else {
      linkList.classList.remove('burger-menu');
  }

  openBurger.addEventListener('click', () => {
    linkList.classList.add('burger-menu-active')
  })
  closeBurger.addEventListener('click', () => {
    linkList.classList.remove('burger-menu-active')
  })

}  


export default navAndBurger;