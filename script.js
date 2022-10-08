


var formAnswers = [false, false, false, false];


window.onload=function(){

    const dropdown = document.querySelector('.dropdown');
    const dropNav = document.getElementById('dropNav');;

    
    dropdown.addEventListener('click', function (){
        this.classList.toggle('isActive');
        dropNav.classList.toggle('isActive');
    });

    

}


function redirect(i){
     
    if(i == 1){
        location.replace('/ziele.html')
    }else if(i == 2){
        location.replace('/rückblick.html')
    }else if(i == 3){
        location.replace('/kandidat-innen.html')
    }
}

function detailedPersona(str){
    if(str === 'dagmar-brunnhuber'){
        location.replace('/kandidat-innen/'+ str + '.html')
        console.log('/kandidat-innen/'+ str + '.html')
    }else if(str == 2){
        location.replace('/kandidat-innen/'+ str + '.html')
    }else if(str == 3){
        location.replace('/kandidat-innen/'+ str + '.html')
    }
}



function colorInvert(){
    
    var el = document.documentElement.classList;
    el.toggle("dark")
}



