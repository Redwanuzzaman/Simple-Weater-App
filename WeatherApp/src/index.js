const btn = document.querySelector('.action');
const result = document.querySelector('.result');

// API INFO

const BASE = "http://api.weatherstack.com/";
const KEY = "your_access_key";

btn.addEventListener('click', f=>{
    fetch(`${BASE}/current?access_key=${KEY}&query=dhaka`)
    .then(response=>response.json())
    .then(forecast=>{
        console.log(forecast);
        result.innerHTML = `
        The Temparature of ${forecast.location.name} is 
        ${forecast.current.temperature} Degree Celcius.\n
        Last Update Time: ${forecast.current.observation_time}`
    });
})