export const contact_tab = () => {
  event.target.classList.add('active')
  const main = document.querySelector('#main')
  const contact = document.createElement('div')
  contact.id = 'contact-div'
  const tempText = `
    <div>
    <strong>Clumsyknight's Restaurant</strong>
    </div>
    <div>
    Location: Mumbai, Maharashtra, India 
    </div>
    <div>
    Contact: You it this isn't real, right? 
    </div>
  `

  contact.innerHTML = tempText
  main.appendChild(contact)
}