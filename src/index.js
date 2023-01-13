/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')
  // < div class="p-4" >
  //   <img
  //     class="mx-auto"
  //     width="320px"
  //     src="https://randomfox.ca/images/91.jpg"
  //     alt="">
  //   </>

const max = 123
const min = 1
const random = () => Math.floor(Math.random() * (max - min)) + min

const createImageNode = () => {

  const container = document.createElement('div')
  container.className = 'p-4'

  const img = document.createElement('img')
  img.className = 'mx-auto'
  img.width = '320'
  img.src = `https://randomfox.ca/images/${random()}.jpg`

  container.appendChild(img)

  console.log(container);
  
  return container
};

const mountNode = document.getElementById("images")
const addButton = document.querySelector('button')

const addImg = () => {
  const newImg = createImageNode()
  mountNode.append(newImg)
}

addButton.addEventListener('click', addImg)



