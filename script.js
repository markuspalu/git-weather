const city = document.getElementById("city");
let active = false;
let information;

city.addEventListener("change", async function() {
    information = await getCity(city.value);
    console.log(active);
    if (!active) {
        printInfoF(information);
    } else {
        printInfoC(information);
    }
});


let toggle = document.querySelector('.toggle')
toggle.addEventListener("click", function() {
    let text = document.querySelector('.text')
    active = !active
    console.log(active);
    if (active) {
        toggle.classList.add('active')
        text.innerHTML = 'C'
        printInfoC(information);
    } else {
        toggle.classList.remove('active')
        text.innerHTML = 'F'
        printInfoF(information);
    }
});

async function getCity(city) {
    try {
        const response = await fetch ('https://api.weatherapi.com/v1/current.json?key=4a8ea14ddd5a42a49e5105629230308&q=' + city, {mode: "cors"});
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function printInfoF(info) {
    const conditionicon = document.querySelector(".conditionicon");
    const location = document.querySelector(".location");
    const currentcondition = document.querySelector(".currentcondition");
    const currenttemp = document.querySelector(".currenttemp");
    const feelslike = document.querySelector(".feelslike");
    const wind = document.querySelector(".wind");
    const humidity = document.querySelector(".humidity");

    conditionicon.src = info.current.condition.icon;
    location.innerText = info.location.name + ", " + info.location.country;
    currentcondition.innerText = info.current.condition.text;
    currenttemp.innerText = info.current.temp_f + "\xB0F";
    feelslike.innerText = "Feels like " + info.current.feelslike_f + "\xB0F";
    wind.innerText = "Wind: " + info.current.wind_mph + "mph";
    humidity.innerText = "Humidity: " + info.current.humidity + "%";
}

async function printInfoC(info) {
    const conditionicon = document.querySelector(".conditionicon");
    const location = document.querySelector(".location");
    const currentcondition = document.querySelector(".currentcondition");
    const currenttemp = document.querySelector(".currenttemp");
    const feelslike = document.querySelector(".feelslike");
    const wind = document.querySelector(".wind");
    const humidity = document.querySelector(".humidity");
    conditionicon.src = info.current.condition.icon;
    location.innerText = info.location.name + ", " + info.location.country;
    currentcondition.innerText = info.current.condition.text;
    currenttemp.innerText = info.current.temp_c + "\xB0C";
    feelslike.innerText = "Feels like " + info.current.feelslike_c + "\xB0C";
    wind.innerText = "Wind: " + info.current.wind_mph + "kph";
    humidity.innerText = "Humidity: " + info.current.humidity + "%";
}
