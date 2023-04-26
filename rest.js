async function dataFetch(){
    try{
    const data = await fetch ("https://restcountries.com/v3.1/all");
    const res = await data.json();
    //console.log(res)
    res.forEach(element => {
    document.body.innerHTML += `<div class='container card card-header card-body row col-lg-4 col-sm-12'>
    <h1 id="title" class="text-center">${element.name.common}</h1>
    <img src="${element.flags.png}" alt="${element.name.common}" class="flag"/>
    <div class="row col-lg-4 col-sm-12">
    <p><span>Capital : </span>${element.capital}</p>
    <p><span>Region : </span>${element.region}</p>
    <p><span>Countrycode : </span>${element.cca3}</p>
    
    <button class="btn btn-primary" type="button"  onclick="weather(${element.latlng})">Click for Weather</button>
    </div>
    </div>`
});
}catch(error){
    console.log(error)
}
}
dataFetch()

async function weather(lat,lng){
    var weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=36f111ecc80cf92cb33be3e67cf1e582`;
    try{
    var weather_data = await fetch(weatherURL);
    var res = await weather_data.json();
    //console.log(res);
    let temp = `
        Main : ${res.weather[0].main}
        Description : ${res.weather[0].description}`
    alert(temp)
}catch(err){
    console.log(err);
}
}