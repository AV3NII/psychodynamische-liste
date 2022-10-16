


var formAnswers = [false, false, false, false];


window.onload=function(){

    const dropdown = document.querySelector('.dropdown');
    const dropNav = document.getElementById('dropNav');;

    
    dropdown.addEventListener('click', function (){
        this.classList.toggle('isActive');
        dropNav.classList.toggle('isActive');
    });

    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));

    if (GetTheme === "LIGHT"){
        document.documentElement.classList.toggle('dark')
    }

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
    }else if(str == 'thomas-schneider'){
        location.replace('/kandidat-innen/'+ str + '.html')
    }else if(str == 'martina-scharrer'){
        location.replace('/kandidat-innen/'+ str + '.html')
    }else if(str == 'martin-czajka'){
        location.replace('/kandidat-innen/'+ str + '.html')
    }else if(str == 'anja-lorenz'){
        location.replace('/kandidat-innen/'+ str + '.html')
    }else if(str == 'dietrich-winzer'){
        location.replace('/kandidat-innen/'+ str + '.html')
    }else if(str == 'regina-pielmeier'){
        location.replace('/kandidat-innen/'+ str + '.html')
    }else if(str == 'regina-eisner'){
        location.replace('/kandidat-innen/'+ str + '.html')
    }
    
}



function darkmode(){
    
    var el = document.documentElement.classList;
    el.toggle("dark");
}

function colorInvert(){
    var SetTheme = document.documentElement;

    SetTheme.classList.toggle("dark");

    var theme;

    if(SetTheme.classList.contains('dark')){
        theme = "DARK";
    }else{
        theme = "LIGHT";
    }

    localStorage.setItem("PageTheme", JSON.stringify(theme));
}




