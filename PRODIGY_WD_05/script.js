
const apiKey = '3430d609c445478eb4061143240303';

const searchBox =document.querySelector('.inputBox');
const searchBtm =document.querySelector('.searchBtn');
const conditionImag =document.querySelector('.conditionImag');
const temparature =document.querySelector('.temparature');
const condition =document.querySelector('.condition');
const humidity =document.querySelector('.humidity');
const windSpeed =document.querySelector('.windSpeed');
const error =document.querySelector('.error');

searchBtm.addEventListener('click',()=>{
   let query = searchBox.value;
   if(!query){
    error.style.display = 'block';
   }else{
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`).then((response)=>{
        if(!response.ok){
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        return response.json()
    }).then(data =>{
        let weatherReport = data.current;
        console.log(weatherReport);
        conditionImag.src = `http:${weatherReport.condition.icon}`
        temparature.innerHTML = `${weatherReport.temp_c}°C`
        condition.innerHTML = weatherReport.condition.text;
        humidity.innerHTML = `Humidity : ${weatherReport.humidity}%`
        windSpeed.innerHTML = `Wind Speed : ${weatherReport.wind_kph} km/h`

    }).catch(err =>{
        error.style.display = 'block';
        error.innerHTML = 'location not matched';
    })
   }

})