const Heading = {
  addHeading: () => {
    const content = document.querySelector('body')
    const heading = document.createElement('div')
    heading.id = 'bones'
    heading.textContent = "Clumsy's Restaurant"
    content.appendChild(heading)
  }  
}

export {Heading}