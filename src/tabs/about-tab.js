export const about_tab = () => {
  event.target.classList.add('active')
  const main = document.querySelector('#main')
  main.textContent = 'About'
}