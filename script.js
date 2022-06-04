
window.onload=function(){
const dropdown = document.querySelector('.dropdown');
const dropNav = document.getElementById('dropNav');



dropdown.addEventListener('click', function (){
    this.classList.toggle('isActive');
    dropNav.classList.toggle('isActive');
});


}


function colorInvert(){
    
    var el = document.documentElement.classList;
    el.toggle("dark")

}







