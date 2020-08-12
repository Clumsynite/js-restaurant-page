export const menu_tab = () => {
  event.target.classList.add('active')
  const main = document.querySelector('#main')
  const menu = document.createElement('div')
  menu.id = 'menu-div'
  
  const items = [
    {
      name: 'Malai Kofta',
      src: 'https://www.thespruceeats.com/thmb/DKBhs8eItHdebuYmyaglkhCKtMY=/1720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Malai-Kofta-GettyImages-640045270-58d0064d5f9b581d72be95b6.jpg',
      desc: 'Malai Kofta is a very popular Indian vegetarian dish where balls (kofta) made of potato and paneer are deep fried and served with a creamy and spiced tomato based curry. The literal translation of this dish is malai=creamy/buttery and kofta=spiced balls (in this case made of potatoes and paneer).',
      price: ''
    }
  ]

  items.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('card')
    
    const img = document.createElement('img')
    img.src = item.src
    img.classList.add('card-img')

    const details = document.createElement('div')
    details.classList.add('card-details')

    const name = document.createElement('div')
    name.class = 'card-title'

    details.appendChild(name)

    card.appendChild(img)
    card.appendChild(details)
    menu.appendChild(card)
  })

  main.appendChild(menu)
}