const theme = document.querySelector("#bell")
const body = document.querySelector('body')

let darkon = false; 

theme.addEventListener('click', () => {
  if (darkon === false) {
    body.classList.toggle('dark');
    darkon = true;
  } else {
    body.classList.toggle('dark');
    darkon = false;
  }
})

