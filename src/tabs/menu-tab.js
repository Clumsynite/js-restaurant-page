export const menu_tab = () => {
  event.target.classList.add('active')
  const main = document.querySelector('#main')
  const menu = document.createElement('div')
  menu.id = 'menu-div'
  
  const items = [
    {
      name: 'Malai Kofta',
      src: 'https://www.thespruceeats.com/thmb/DKBhs8eItHdebuYmyaglkhCKtMY=/1720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Malai-Kofta-GettyImages-640045270-58d0064d5f9b581d72be95b6.jpg',
      desc: 'Malai Kofta is a very popular Indian vegetarian dish where balls (kofta) made of potato and paneer are deep fried and served with a creamy and spiced tomato based curry.',
      price: 'Rs.ABC'
    },
    {
      name: 'Mutter Paneer',
      src: 'https://www.thespruceeats.com/thmb/Vux6Ye7xKJ3jLUz04loqHhen1uU=/856x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Mutter-Paneer-GettyImages-670907161-58d00a633df78c3c4f3b9bb2.jpg',
      desc: 'Mutter means peas, and paneer is a solid cottage cheese, so this mutter paneer dish combines the two in a rich tomato-based gravy with a touch of cream. ',
      price: 'Rs.DEF'
    },
    {
      name: 'Chana Masala',
      src: 'https://www.seriouseats.com/recipes/images/2016/03/20160328-channa-masala-recipe-6-750x563.jpg',
      desc: 'This Punjabi Chana Masala or Chole Masala is an authentic North Indian style Chickpea Curry made with white chickpeas, freshly powdered spices, onions, tomatoes and herbs.',
      price: 'Rs.GHI'
    },
    {
      name: 'Dum Aloo',
      src: 'https://i2.wp.com/pipingpotcurry.com/wp-content/uploads/2018/05/Dum-Aloo-@minsterypippingpotcurry.jpg',
      desc: 'A North Indian favorite curry made with baby potatoes sautéed in onion and tomato sauce. Dum Aloo goes well with hot butter naan, roti or paratha. It can be easily made in a pressure cooker',
      price: 'Rs.JKL'
    },
    {
      name: 'Pav Bhaji',
      src: 'https://www.awesomecuisine.com/wp-content/uploads/2007/11/pav_bhaji_recipe.jpg',
      desc: 'A favourite Indian street food, Pav Bhaji is made with potatoes and vegetables cooked in a tomato base, and enjoyed with pav or dinner rolls. This one-pot version of Pav Bhaji made in the Instant Pot has made it a popular weeknight dinner for many.',
      price: 'Rs.MNO'
    },
    {
      name: 'Paneer Biriyani',
      src: 'https://i2.wp.com/pipingpotcurry.com/wp-content/uploads/2018/06/Ministry-of-Curry-Paneer-Biryani-in-Instant-Pot-.jpg',
      desc: 'A classic Indian dish made with flavourful and aromatic basmati rice, along with whole spices and garam masala. Lots of veggies and paneer make this a complete meal, which pairs well with yogurt or raita.',
      price: 'Rs.PQR'
    },
    {
      name: 'Lemon Rice',
      src: 'https://www.cookwithmanali.com/wp-content/uploads/2016/01/South-Indian-Lemon-Rice-Recipe-500x500.jpg',
      desc: 'a flavorful, tangy and crunchy Lemon Rice from South India. Aromatic Basmati Rice flavored with lemon juice, mustard seeds, ginger and topped with roasted peanuts. It takes less than 30 minutes to make this delicious rice in your instant pot.',
      price: 'Rs.STU'
    },
    {
      name: 'Misal Pav',
      src: 'https://i2.wp.com/pipingpotcurry.com/wp-content/uploads/2019/04/Misal-Pav-Instant-Pot-1.jpg',
      desc: 'A delicious Maharashtrain breakfast, Misal Pav is a spicy sprouts curry made in the instant pot. Misal Pav is a wholesome meal, that can be enjoyed as a nutritious breakfast or brunch.',
      price: 'Rs.VWX'
    },
    {
      name: 'Rajma Masala',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pah-nrffYz8onHDkzR0OtU0cYuWeM8dlB4Cw4CKaKNZtc5w&s',
      desc: 'Rajma Masala or Vegan Red Kidney Beans Curry is one of the most loved Punjabi dishes.  It is a great comfort food enjoyed with rice or roti.  Here you will find how to make Rajma in Instant Pot along with pot-in-pot Brown Rice for a complete meal.',
      price: 'YZ'
    }
  ]

  items.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('card')
    
    const img = document.createElement('img')
    img.src = item.src
    img.classList.add('card-img')

    const details = document.createElement('div')
    details.classList.add('card-detail')

    const name = document.createElement('div')
    name.classList.add('card-title')
    name.textContent = item.name
  
    const price = document.createElement('div')
    price.classList.add('card-price')
    price.textContent = item.price

    const description = document.createElement('div')
    description.classList.add('card-desc')
    description.textContent = item.desc

    details.appendChild(name)
    details.appendChild(price)
    details.appendChild(description)

    card.appendChild(img)
    card.appendChild(details)
    menu.appendChild(card)
  })

  main.appendChild(menu)
}