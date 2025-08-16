
// Scroll to top button
const fab = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 700) fab.classList.add('visible');
  else fab.classList.remove('visible');
});
fab.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

// Smooth anchor fix for header height
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const el = document.querySelector(id);
      if (el){
        e.preventDefault();
        const y = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({top:y, behavior:'smooth'});
      }
    }
  });
});
