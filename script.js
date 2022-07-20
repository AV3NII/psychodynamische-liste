
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
            option1.querySelector('img').src = './images/Event.jpg';
        }

    })



    option2.addEventListener('click', () =>{
        formAnswers[1] = !formAnswers[1];
        showAns(false);
        if (formAnswers[1] == true){
            option2.querySelector('img').src = './images/ticked.png';
        }else{
            option2.querySelector('img').src = './images/Venue.jpg';
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
    
    if (domain == 1){
        factorDomain = 1;
    }else if(domain == 2){
        factorDomain = 2;
    }else if(domain = 3){
        factorDomain = 1.5;
    }

    ernährungsP = 50; // € / tag pro person
    übernachtungsP = 80;
    labSpace = 200 * factorDomain * isEquipment;

    talentCostsPerDayPerPerson = ernährungsP + übernachtungsP + labSpace;


    teamgröße = 7;
    medianOfInterv = 0;
    locationFactor = 0;
    if (people == 1){
        medianOfInterv = 40;
        locationFactor = 2;
    }else if(people == 2){
        medianOfInterv = 65;
        locationFactor = 1.5;
    }else if(people == 3){
        medianOfInterv = 100;
        locationFactor = 1;
    }

    talentCostsPerDay = talentCostsPerDayPerPerson * medianOfInterv;
    
    gruppenCount = Math.floor(medianOfInterv / teamgröße);
    console.log("gruppencount:" + gruppenCount);
    supervisorPerDay = 1000 * gruppenCount; // pro Tag
    console.log("supervisorPerDay:" + supervisorPerDay);
    videoAnalystPerTeam = 200 * gruppenCount; 
    console.log("videoAnalystPerTeam:" + videoAnalystPerTeam);
    eventPlaner = 350;
    console.log("eventPlaner:" + eventPlaner);

    costPerHappening = 5000;
    locationPerDay = 30 * medianOfInterv * locationFactor * isVenue;
    console.log("locationPerDay:" + locationPerDay);

    
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
    entertainmentPerDay = (costPerHappening * happeningCount / days)* isEntertainment;
    console.log("entertainmentPerDay:" + entertainmentPerDay);

    eventCostsPerDay = locationPerDay + supervisorPerDay + videoAnalystPerTeam + eventPlaner + entertainmentPerDay;
    console.log("eventCostsPerDay" + eventCostsPerDay);
    console.log("talentCostsPerDay:" + talentCostsPerDay);
    
    bufferedSum = (talentCostsPerDay + eventCostsPerDay) * days ;
    sumWithRevenue = bufferedSum + (bufferedSum*0.4);
    finalSum = Math.floor(sumWithRevenue/100)*100;

    priceTag.innerHTML =  finalSum + " €";
    console.log("---------------------------------------------------");

}


function showAns(a){
    
    if (a){
        ans.style.display = "flex";
    }else{
        ans.style.display = "none";
    }

}