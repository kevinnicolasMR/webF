const buttonOfOver = document.querySelector('.buttonOfOver');
const buttonActionHeader = document.querySelector('.acctionHeader');
const fixedMenuHeaderOver = document.querySelector('.fixedMenuHeaderOver');
const ficedSearchHeaderOver = document.querySelector('.ficedSearchHeaderOver');
const searchHeader = document.querySelector('.searchHeader');

buttonActionHeader.addEventListener('click', () => {
  fixedMenuHeaderOver.classList.toggle('show');
  
  // Ocultar el menú de búsqueda si está visible
  if (ficedSearchHeaderOver.classList.contains('show')) {
    ficedSearchHeaderOver.classList.remove('show');
  }
});

buttonOfOver.addEventListener('click', () => {
  if (fixedMenuHeaderOver.classList.contains('show')) {
    fixedMenuHeaderOver.classList.remove('show');
  }
});

searchHeader.addEventListener('click', () => {
  ficedSearchHeaderOver.classList.toggle('show');
  
  // Ocultar el menú desplegable si está visible
  if (fixedMenuHeaderOver.classList.contains('show')) {
    fixedMenuHeaderOver.classList.remove('show');
  }
});
