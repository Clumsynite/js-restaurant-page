export const home_tab = () => {
  event.target.classList.add('active')
  const main = document.querySelector('#main')
  const home = document.createElement('div')

  const tempText = `
    <strong>Dou you love Indian dishes?</strong><br/>
    Wanna eat some <strong>Delicious</strong> Indian food?<br/>
    Look at the <span id='menu-link' class='link'>Menu</span>
    <br/><br/>
    Wanna contact me for a huge order?<br/>
    Look <span id='contact-link' class='link'>here</span> my guy
    <br/><br/>
    Curious who made this awesome page?<br/>
    <span id='about-link' class='link'>Here I am</span>
  `

  home.innerHTML = tempText
  main.appendChild(home)
  
  document.querySelector('#menu-link').addEventListener('click', () => {
    document.querySelector('#menu-tab').click();
  })
  document.querySelector('#contact-link').addEventListener('click', () => {
    document.querySelector('#contact-tab').click();
  })
  document.querySelector('#about-link').addEventListener('click', () => {
    document.querySelector('#about-tab').click();
  })
}