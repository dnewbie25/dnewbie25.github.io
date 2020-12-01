const button = document.querySelector('button');

/* button.addEventListener('click', () => {
  console.log('You clicked me!!');
}); */

const items = document.querySelectorAll('li');

Array.from(items).forEach(item => {
  item.addEventListener('click', e => {
    console.log('Item clicked');
    console.log(e.target);
    console.log(item);
  })
})

