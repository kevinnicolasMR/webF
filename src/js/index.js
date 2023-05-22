console.log("JS index conectado")

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



// Función para mostrar los proyectos en la sección correspondiente
function mostrarProyectos() {
    const proyectosSection = document.getElementById('proyectos');
    proyectosSection.innerHTML = '';

    proyectos.forEach(proyecto => {
        const proyectoDiv = document.createElement('div');
        proyectoDiv.classList.add('proyecto');

        const imagen = document.createElement('img');
        imagen.src = proyecto.imagen;
        imagen.alt = proyecto.nombre;
        proyectoDiv.appendChild(imagen);

        const nombreProyecto = document.createElement('span');
        nombreProyecto.textContent = proyecto.nombre;
        nombreProyecto.classList.add('nombre-proyecto');
        proyectoDiv.appendChild(nombreProyecto);

        proyectosSection.appendChild(proyectoDiv);
    });
}



// Mostrar todos los proyectos inicialmente
mostrarProyectos();

// Función para filtrar los proyectos por categoría
function filtrarProyectos(categoria) {
    let proyectosFiltrados;
    if (categoria === 'todos') {
      proyectosFiltrados = proyectos;
    } else {
      proyectosFiltrados = proyectos.filter(proyecto => proyecto.categoria === categoria);
    }
  
    const proyectosSection = document.getElementById('proyectos');
    proyectosSection.innerHTML = '';
  
    proyectosFiltrados.forEach(proyecto => {
      const proyectoDiv = document.createElement('div');
      proyectoDiv.classList.add('proyecto');
  
      const imagen = document.createElement('img');
      imagen.src = proyecto.imagen;
      imagen.alt = proyecto.nombre;
      proyectoDiv.appendChild(imagen);
  
      const nombreProyecto = document.createElement('span');
      nombreProyecto.textContent = proyecto.nombre;
      nombreProyecto.classList.add('nombre-proyecto');
      proyectoDiv.appendChild(nombreProyecto);
  
      proyectosSection.appendChild(proyectoDiv);
    });
  }
  




/* funciones del menu over */ 

const categorias = [...new Set(proyectos.map(proyecto => proyecto.categoria))];
const menuOver = document.getElementById('menuOver');
const botonTodos = document.createElement('button');



botonTodos.textContent = 'Todos';
botonTodos.dataset.categoria = 'todos';
botonTodos.classList.add('all-button');
menuOver.appendChild(botonTodos);


// Agregar salto de línea
const saltoLinea = document.createElement('br');
menuOver.appendChild(saltoLinea);

botonTodos.addEventListener('click', () => {
    filtrarProyectos('todos');
  });
  

categorias.forEach(categoria => {
    const categoriaButton = document.createElement('button');
    categoriaButton.textContent = categoria;
    categoriaButton.dataset.categoria = categoria;
    categoriaButton.classList.add('category-button'); // Agregar la clase "category-button"
    categoriaButton.addEventListener('click', () => {
      filtrarProyectos(categoria);
    });
    menuOver.appendChild(categoriaButton);
  });



  /* Codigo del search */ 

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