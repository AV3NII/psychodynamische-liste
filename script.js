
var formAnswers = [false, false, false];

window.onload=function(){

    const dropdown = document.querySelector('.dropdown');
    const dropNav = document.getElementById('dropNav');
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    const option3 = document.getElementById('option3');
    
    const domain = document.getElementById('domain');
    const people = document.getElementById('people');
    const duration = document.getElementById('duration');
    
    
    ans = document.getElementById('ans');
  
    dropdown.addEventListener('click', function (){
      this.classList.toggle('isActive');
      dropNav.classList.toggle('isActive');
    });
  
    domain.addEventListener('change', function (){
        showAns(false);
    });

    people.addEventListener('change', function (){
        showAns(false);
    });

    duration.addEventListener('change', function (){
        showAns(false);
    });

    

    option1.addEventListener('click', () =>{
        formAnswers[0] = !formAnswers[0];
        showAns(false);
        if (formAnswers[0] == true){
            option1.querySelector('img').src = './images/ticked.png';
        }else{
            option1.querySelector('img').src = './images/Venue.jpg';
        }

    })



    option2.addEventListener('click', () =>{
        formAnswers[1] = !formAnswers[1];
        showAns(false);
        if (formAnswers[1] == true){
            option2.querySelector('img').src = './images/ticked.png';
        }else{
            option2.querySelector('img').src = './images/Event.jpg';
        }

    })

    option3.addEventListener('click', () =>{
        formAnswers[2] = !formAnswers[2];
        showAns(false);
        if (formAnswers[2] == true){
            option3.querySelector('img').src = './images/ticked.png';
        }else{
            option3.querySelector('img').src = './images/Tools1.jpg';
        }

    });


    

    
}

function colorInvert(){
    
    var el = document.documentElement.classList;
    el.toggle("dark")

}


function submit(){
    showAns(true);
    domain = document.getElementById('domain').value;
    people = document.getElementById('people').value;
    duration = document.getElementById('duration').value;
    priceTag = document.getElementById('priceTag');

    isVenue = 1;
    isEntertainment = 1;
    isEquipment = 1;
    if(formAnswers[0] === true){
        isVenue = 0.5
    }
    
    if (formAnswers[1]){
        isEntertainment = 0.5;
    }
    
    if (formAnswers[2]){
        isEquipment = 0.5;
    }

    
    
    factorDomain = 1.0;
    console.log(domain)
    if (domain == 1){
        factorDomain = 0.75;
    }else if(domain == 2){
        factorDomain = 1.5;
    }else if(domain = 3){
        factorDomain = 1.2;
    }

    ernährungsP = 50; // € / tag pro person
    übernachtungsP = 80;
    labSpace = 200 * factorDomain * isEquipment;

    talentCostsPerDay = ernährungsP + übernachtungsP + labSpace;

    teamgröße = 7;
    medianOfInterv = 0;
    locationFactor = 0;
    if (people == 1){
        medianOfInterv = 40;
        locationFactor = 2;
    }else if(people == 2){
        medianOfInterv = 75;
        locationFactor = 1;
    }else if(people == 3){
        medianOfInterv = 100;
        locationFactor = 0.8;
    }

    gruppenCount = medianOfInterv % teamgröße;

    supervisorPerTeam = 1000 * gruppenCount; // pro Tag
    videoAnalystPerTeam = 200 * gruppenCount; 
    eventPlaner = 350;

    costPerHappening = 5000;
    locationPerDay = 30 * medianOfInterv * locationFactor;

    happeningCount = 0;
    days = 0;
    if (duration === '1'){
        days = 3;
        happeningCount = 1;
    }else if(duration === '2'){
        days = 5;
        happeningCount = 2;
    }else if(duration === '3'){
        days = 12;
        happeningCount = 4;
    }
    eventCostsPerDay = locationPerDay + supervisorPerTeam + videoAnalystPerTeam + eventPlaner + (costPerHappening * happeningCount / days) * isEntertainment;
   
    
    bufferedSum = (talentCostsPerDay + eventCostsPerDay)*locationFactor * days ;
    sumWithRevenue = bufferedSum + (bufferedSum*0.4);
    finalSum = Math.floor(sumWithRevenue);

    priceTag.innerHTML =  finalSum + " €";
    

}


function showAns(a){
    
    if (a){
        ans.style.display = "flex";
    }else{
        ans.style.display = "none";
    }

}