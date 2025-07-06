const mudar = document.getElementById('modo-noturno')
const elemento = document.querySelector('body')

mudar.addEventListener('click', () => {
   const modo = mudar.checked ? 'dark' : 'light'
 
   elemento.setAttribute('data-bs-theme', modo)
   console.log(mudar)
})


