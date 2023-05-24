const li = document.querySelector('li');
const caixatxt = document.querySelector('.caixatxt');

li.addEventListener('mousemove', (event) => {
    const posicao = li.getBoundingClientRect();
    const relX = event.clientX - posicao.left;
    const relY = event.clientY - posicao.top;

    caixatxt.style.transform = 'translate(${relX}px, ${relY}px)';
});

//////li.addEventListener('mouseenter', () => {
caixatxt.style.display = 'block';
////});

///////////////li.addEventListener('mouseleave', () => {
   /// caixatxt.style.display = 'none';///
///////});