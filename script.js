const apikey="7eb31bf4f75d88140c347491f0b7f7fd";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input ");
const searchBtn = document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkWeather(city){
    const response=await fetch(apiurl + city +`&APPID=${apikey}`);

    
     var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".WindSpeed").innerHTML=data.wind.speed+"Km/hr";

    document.querySelector(".weather").style.display="block";
    


}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
checkWeather();

