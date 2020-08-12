export const about_tab = () => {
  event.target.classList.add('active')
  const main = document.querySelector('#main')
  const about = document.createElement('div')

  const tempText = `
    Hi, I am <strong>Clumsyknight</strong>, the guy who developed this page
    <br/><br/>
    You can view my github profile <a href='https://github.com/Clumsynite' target='_blank' class='jump-link'>here</a>
    <br/><br/>
    Or, you can look at code <a href='https://github.com/Clumsynite/js-restaurant-page' target='_blank' class='jump-link'>here</a>
  `

  about.innerHTML = tempText

  main.appendChild(about)
}