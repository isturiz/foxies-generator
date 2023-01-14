const isIntersecting = (entry) => {
  return entry.isIntersecting 
}

const loadImg = (entry) => {
  const container = entry.target
  const imgWrapper = container.firstChild
  const img = imgWrapper.firstChild

  const url = img.dataset.src
  img.src = url


  observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
  entries
    .filter(isIntersecting)
    .forEach(loadImg)
})

export const registerImg = (img) => {
  observer.observe(img)
}