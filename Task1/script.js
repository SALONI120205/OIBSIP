// smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});

// simple order form handling
function handleOrder(e){
  e.preventDefault();
  const name = document.getElementById('o_name').value || document.getElementById('o_name') && document.getElementById('o_name').value;
  const phone = document.getElementById('o_phone').value;
  if(!name || !phone){
    alert('Please enter name and phone');
    return false;
  }
  alert('Thanks ' + name + '! We received your order request — we will contact you soon.');
  document.getElementById('orderForm').reset();
  return false;
}
