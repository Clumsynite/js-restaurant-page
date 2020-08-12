import {home_tab as home} from './tabs/home-tab.js'
import {menu_tab as menu} from './tabs/menu-tab.js'
import {about_tab as about} from './tabs/about-tab.js'
import {contact_tab as contact} from './tabs/contact-tab.js'

export const content_handler = () => {
  const homeTab = document.querySelector('#home-tab')
  const menuTab = document.querySelector('#menu-tab')
  const aboutTab = document.querySelector('#about-tab')
  const contactTab = document.querySelector('#contact-tab')
  
  const tabs = document.querySelectorAll('.tabs')
  
  const main = document.querySelector('#main')

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const activeTabs = document.querySelectorAll(".active");
      activeTabs.forEach(active => {
        active.classList.remove('active')
      })
      clearMain()
    })
  })

  const clearMain = () => {
    if(main.hasChildNodes()){
      while(main.hasChildNodes()){
        main.removeChild(main.lastChild);
      }
    }
  }

  homeTab.addEventListener('click',home)
  menuTab.addEventListener('click',menu)
  aboutTab.addEventListener('click',about)
  contactTab.addEventListener('click',contact)
}