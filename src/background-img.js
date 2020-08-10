const Background = {
  addBackground: () => {
    const background = document.createElement('div')
    background.id = 'bg'
    document.querySelector('body').appendChild(background)
  }  
}

export {Background}