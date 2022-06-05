

var formAnswers = [false, false, false, false];


window.onload=function(){

    const dropdown = document.querySelector('.dropdown');
    const dropNav = document.getElementById('dropNav');
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    const option3 = document.getElementById('option3');
    const option4 = document.getElementById('option4');
    const select = document.getElementById('months');



    dropdown.addEventListener('click', function (){
        this.classList.toggle('isActive');
        dropNav.classList.toggle('isActive');
    });

    select.addEventListener('change', function (){
        showAns(false);
    });






    option1.addEventListener('click', () =>{
        formAnswers[0] = !formAnswers[0];
        showAns(false);
        if (formAnswers[0] == true){
            option1.querySelector('img').src = './images/ticked.png';
        }else{
            option1.querySelector('img').src = './images/appdev1.jpg';
        }

    })



    option2.addEventListener('click', () =>{
        formAnswers[1] = !formAnswers[1];
        showAns(false);
        if (formAnswers[1] == true){
            option2.querySelector('img').src = './images/ticked.png';
        }else{
            option2.querySelector('img').src = './images/webdev.jpg';
        }

    })

    option3.addEventListener('click', () =>{
        formAnswers[2] = !formAnswers[2];
        showAns(false);
        if (formAnswers[2] == true){
            option3.querySelector('img').src = './images/ticked.png';
        }else{
            option3.querySelector('img').src = './images/techsupport.jpg';
        }

    });

    option4.addEventListener('click', () =>{
        formAnswers[3] = !formAnswers[3];
        showAns(false);
        if (formAnswers[3] == true){
            option4.querySelector('img').src = './images/ticked.png';
        }else{
            option4.querySelector('img').src = './images/techsupport1.jpg';
            
        }

    });









}






function colorInvert(){
    
    var el = document.documentElement.classList;
    el.toggle("dark")

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