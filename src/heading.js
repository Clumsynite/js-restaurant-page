export const Heading = () => {
    const content = document.querySelector('#content')
    const heading = document.createElement('div')
    heading.id = 'heading'
    heading.textContent = "Clumsy's Restaurant"
    content.appendChild(heading)
  }  