const  form = document.querySelector("form");
const city = document.getElementById("cityEntered");
const displayData=document.getElementById("displayData");
const dayData = document.getElementById("dayData"); 


form.addEventListener("submit", function (btn) {
    btn.preventDefault();
    
    const cityName = city.value.trim();
    console.log(cityName);

    if (cityName === "") {
        alert("Which City weather you want? ");
        return;
    }

    weatherData(cityName);
    futureData(cityName);

});


async function weatherData(cityName) {
    const apiKey = "1eb2a89d353047cba90171320253112";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;

    const response = await fetch(url);
    const data = await response.json();

    displayData.innerHTML = `

        <li class="mb-1">${data.location.name} </li>
        <li class="mb-1">${data.current.temp_c}°C/${data.current.temp_f}°F</li>
        <li class="mb-1">${data.current.humidity}%</li>
        <li class="mb-1">${data.current.wind_kph}km/h</li>
        <li class="mb-1">${data.current.condition.text}</li>
`;   
}

async function futureData(cityName) {

    const futureapiKey = "1eb2a89d353047cba90171320253112";
    const futureurl = `https://api.weatherapi.com/v1/forecast.json?key=${futureapiKey}&q=${cityName}&days=4&aqi=no`;

    const response = await fetch(futureurl);
    const data = await response.json();

    dayData.innerHTML = ""; 

    data.forecast.forecastday.forEach(day => {
        dayData.innerHTML += `
            <div class="blueDatabox ">
                <h6>${new Date(day.date).toLocaleDateString("en-US", {
                    weekday: "short"
                })}</h6>
                <span>${day.day.avgtemp_c}°C</span>
            </div>
        `;
    });
    
}






