import { registerImg } from "./lazy";

const max = 123
const min = 1
const random = () => Math.floor(Math.random() * (max - min)) + min

const createImageNode = () => {

  const container = document.createElement('div')
  container.className = 'p-4'

  const img = document.createElement('img')
  img.className = 'mx-auto'
  img.width = '320'
  img.dataset.src = `https://randomfox.ca/images/${random()}.jpg`

  container.appendChild(img)

  console.log(container);
  
  return container
};

const mountNode = document.getElementById("images")
const addButton = document.querySelector('button')

const addImg = () => {
  const newImg = createImageNode()
  mountNode.append(newImg)
  registerImg(newImg)
}

addButton.addEventListener('click', addImg)



