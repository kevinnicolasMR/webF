console.log("El pages.js esta conectado")

const searchHeader = document.querySelector('.searchHeader');
const ficedSearchHeaderOver = document.querySelector('.ficedSearchHeaderOver');

searchHeader.addEventListener('click', ()=>{
    ficedSearchHeaderOver.classList.toggle('show');
})



const proyectos = [
    {
        nombre: 'Desarrollo kevin Medina',
        categoria: 'Desarrollo web',
        url: 'https://kevinnicolasmr.vercel.app/',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Plantilla Base',
        categoria: 'Plantilla',
        url: '/pages/plantilla.html',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Maldonado',
        categoria: 'Arquitectura',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Florencia',
        categoria: 'Arquitectura',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Pedro',
        categoria: 'Trabajadores',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },  {
        nombre: 'Montevideo',
        categoria: 'Arquitectura',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Maldonado',
        categoria: 'Premios',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Maldonado',
        categoria: 'Arquitectura',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Florencia',
        categoria: 'Arquitectura',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Pedro',
        categoria: 'Trabajadores',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    }
];


  
const inputProyecto = document.getElementById('inputProyecto');
const opcionesProyecto = document.getElementById('opcionesProyecto');

inputProyecto.addEventListener('input', () => {
  const filtro = inputProyecto.value.toLowerCase();
  const opcionesFiltradas = proyectos.filter(proyecto => proyecto.nombre.toLowerCase().includes(filtro));

  opcionesProyecto.innerHTML = '';

  opcionesFiltradas.forEach(opcion => {
    const botonProyecto = document.createElement('button');
    botonProyecto.textContent = opcion.nombre;
    botonProyecto.classList.add('boton-proyecto');
    botonProyecto.addEventListener('click', () => {
      window.location.href = opcion.url;
    });

    opcionesProyecto.appendChild(botonProyecto);

    const saltoLinea = document.createElement('br');
    opcionesProyecto.appendChild(saltoLinea);
  });
});





// Obtén referencias a los elementos del DOM
const bigImgElement = document.querySelector('.imagenGrande');
const imgSmallElements = document.getElementsByClassName('imgSmall');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeButton = document.getElementsByClassName('close')[0];




// Agrega evento de clic a la imagen grande
bigImgElement.addEventListener('click', function() {
    // Actualiza la imagen del modal con la imagen grande
    const imageUrl = this.src;
    modalImage.src = imageUrl;
  
    // Muestra el modal
    modal.style.display = 'block';
  });


// Agrega eventos de clic a las imágenes pequeñas
for (let i = 0; i < imgSmallElements.length; i++) {
  imgSmallElements[i].addEventListener('click', function() {
    // Actualiza la imagen del modal con la imagen clicada
    const imageUrl = this.src;
    modalImage.src = imageUrl;

    // Muestra el modal
    modal.style.display = 'block';
  });
}

// Cierra el modal al hacer clic en el botón de cerrar
closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Cierra el modal al hacer clic fuera de la imagen
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
