let searchbtn = document.getElementById('id-search');
let removebtn = document.getElementById('id-remove');
let modalbox = document.getElementById('id-modalbox');

searchbtn.addEventListener('click', function() {
  modalbox.classList.add('show');
});

removebtn.addEventListener('click', function() {
  modalbox.classList.remove('show');
});
document.getElementById('modeBtn') .addEventListener('click' ,function () {
    document.body.classList.toggle('dark'); 
})  

