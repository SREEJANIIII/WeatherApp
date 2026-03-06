let city=document.getElementById("city");
let submit=document.getElementById("bttn");
let key=`d5b6737f4b50bbb539fe5c0b78946941`;
let temp=document.createElement("h1");
let wind=document.createElement("h1");
let humidity=document.createElement("h1");
let desc=document.createElement("h1");
let icon=document.createElement("img");
let container=document.getElementsByClassName("container")[0];
let link;
let data;
let jsondata;

submit.addEventListener("click",async ()=>{ 
    try{
    link=`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}&units=metric`;
    data=await fetch(link);
    jsondata=await data.json();
    console.log(jsondata);
    temp.textContent=`${jsondata.main.temp} °C`;
    temp.style.fontSize="4em";
    wind.textContent=`WIND:${jsondata.wind.speed} m/s`;
    wind.style.fontWeight="150";
    humidity.textContent=`HUMIDITY:${jsondata.main.humidity}%`;
    humidity.style.fontWeight="150";
    desc.textContent=`${jsondata.weather[0].description}`;
    desc.style.fontWeight="400";
   icon.src = `https://openweathermap.org/img/wn/${jsondata.weather[0].icon}@2x.png`;
    icon.style.width="100px";
    icon.style.height="100px";
    temp.textContent=temp.textContent.toUpperCase();
    wind.textContent=wind.textContent.toUpperCase();
    humidity.textContent=humidity.textContent.toUpperCase();
    desc.textContent=desc.textContent.toUpperCase();
   container.appendChild(temp);
    container.appendChild(wind);
    container.appendChild(humidity);
    container.appendChild(desc);
    container.appendChild(icon);
    bg();
    }
    catch(error){
        alert("City not found. Please enter a valid city name.");
    }

});

function bg(){
    let id=jsondata.weather[0].id;
    if(id>=200 && id<300){
        document.body.style.backgroundImage="url('bg1.jpg')";
    }
    else if(id>=300 && id<400){
        document.body.style.backgroundImage="url('bg2.jpg')";
    }
    else if(id>=500 && id<600){
        document.body.style.backgroundImage="url('bg3.jpg')";
    }   
    else if(id>=600 && id<700){
        document.body.style.backgroundImage="url('bg4.jpg')";
    }
    else if(id>=700 && id<800){
        document.body.style.backgroundImage="url('bg5.jpg')";
    }
    else if(id===800){
        document.body.style.backgroundImage="url('bg6.jpg')";
    }
    else if(id>800 && id<900){
        document.body.style.backgroundImage="url('bg7.jpg')";
    }
    document.body.style.backgroundSize="cover";
}
