


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
        location.replace('/forderungen.html')
    }else if(i == 2){
        location.replace('/erreicht.html')
    }else if(i == 3){
        location.replace('/kandidat-innen.html')
    }
}



function colorInvert(){
    
    var el = document.documentElement.classList;
    el.toggle("dark")
    isLight = !isLight;

}



function submit(){

    select = document.getElementById('months');
        showAns(true);
    

    sum = 30_000;
    duration = select.value;
    

    if(formAnswers[0] === true){
        sum = sum + (15_000*duration)
    }
    
    if (formAnswers[1]){
        sum = sum + (15_000*duration)
    }
    
    else if (formAnswers[2]){
        sum = sum + (20_000*duration)
    }
    
    else if (formAnswers[3]){
        sum = sum + 50_000
    }

    document.getElementById('priceTag').innerHTML =  sum + " €";


}

function showAns(a){
    if (a){
        ans.style.display = "flex";
    }else{
        ans.style.display = "none";
    }

}