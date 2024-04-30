import navAndBurger from './modules/navAndBurger.js'
import navShadow from './modules/navShadow.js'
import filterCards from './modules/searchAndRender.js'
import formToEmail from './modules/form.js'

window.addEventListener('DOMContentLoaded', () => {
window.addEventListener('load', navAndBurger);
window.addEventListener('resize', navAndBurger);
navShadow()
filterCards()
formToEmail()
})
