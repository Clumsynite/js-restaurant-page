export const tabs = () => {
  const content = document.querySelector('#content')
  
  const tabDiv = document.createElement('div')
  tabDiv.id = 'tab-div'

  const home = document.createElement('div')
  home.id = 'home-tab'
  home.classList.add('tabs')
  home.textContent = 'Home'
  
  const menu = document.createElement('div')
  menu.id = 'menu-tab'
  menu.classList.add('tabs')
  menu.textContent = 'Menu'
  
  const contact = document.createElement('div')
  contact.id = 'contact-tab'
  contact.classList.add('tabs')
  contact.textContent = 'Contact'
  
  const about = document.createElement('div')
  about.id = 'about-tab'
  about.classList.add('tabs')
  about.textContent = 'About'
  
  tabDiv.appendChild(home)
  tabDiv.appendChild(menu)
  tabDiv.appendChild(contact)
  tabDiv.appendChild(about)
  content.appendChild(tabDiv)
}