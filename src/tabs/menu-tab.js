export const menu_tab = () => {
  event.target.classList.add('active')
  const main = document.querySelector('#main')
  const menu = document.createElement('div')

  main.appendChild(menu)
}