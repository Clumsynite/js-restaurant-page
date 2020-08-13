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
    <strong>Location:</strong> Mumbai, Maharashtra, India 
    </div>
    <div>
    <strong>Contact:</strong> You know this isn't real, right? 
    </div>
  `
  
  contact.innerHTML = tempText
  main.appendChild(contact)
}