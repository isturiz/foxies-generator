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

  const imgWrapper = document.createElement("div");
  imgWrapper.className = "bg-gray-300";
  imgWrapper.style.minHeight = "100px";
  imgWrapper.style.display = "inline-block";

  imgWrapper.appendChild(img)
  // container.appendChild(imgWrapper);
  container.appendChild(imgWrapper);

  return container
};

const mountNode = document.getElementById("images")
const addButton = document.getElementById('addImg')
const deleteButton = document.getElementById('deleteImg')

const addImg = () => {
  const newImg = createImageNode()
  mountNode.append(newImg)
  registerImg(newImg)
}

const deleteImg = () => {
  mountNode.innerHTML = ''
}

addButton.addEventListener('click', addImg)
deleteButton.addEventListener('click', deleteImg)



