searchWeather = (city) =>{
    var query=url+"weather?q="+city+"&appid="+key+"&units=metric"+"&lang=tr";
    fetch(query)
    .then(weather => {return weather.json()})
    .then(result => {ress(result);})
    .catch(error => {
        alert(error);
        window.location="file:///E:/Dosyalarim/Web%20Projelerim/Weather%20Forecasting%20Web%20Site/view/home.html";
    })

    
    ress = (result) =>{
        console.log(result);
        var subQuery =url+"onecall?lat="+result.coord.lat+"&lon="+result.coord.lon+"&exclude=minutely&units=metric&lang=tr&appid="+key;   
        fetch(subQuery)
        .then(weather => {return weather.json()})
        .then(result => {subress(result);})

        
        subress = (subResult) =>{
            var weatherValues = {
                days:[
                    {},{},{},{},{},{},{}
                ]
            }
            weatherValues.cityName = result.name;//ŞEHİR ADI
            weatherValues.timeZone = subResult.timezone;//ZAMAN DİLİMİ 

            for (let i = 0; i < 7; i++) {
                if(i == 0){
                    weatherValues.days[0].temp = subResult.current.temp;//SICAKLIK
                    weatherValues.days[0].feels_like = subResult.current.feels_like//HİSSEDİLEN
                    weatherValues.days[0].description = subResult.current.weather[0].description//AÇIKLAMA
                    weatherValues.days[0].humidity = subResult.current.humidity//NEM
                    weatherValues.days[0].uvi = subResult.current.uvi//UV
                    weatherValues.days[0].clouds = subResult.current.clouds//BULUTLUK ORANI
                    weatherValues.days[0].sunrise = subResult.current.sunrise//GÜNDOĞUMU
                    weatherValues.days[0].sunset = subResult.current.sunset//GÜNBATIMI
                    weatherValues.days[0].wind_deg = subResult.current.wind_deg//RÜZGAR YÖNÜ
                    weatherValues.days[0].wind_speed = subResult.current.wind_speed//RÜZGAR HIZI
                    weatherValues.days[0].pop = subResult.daily[0].pop//YAĞIŞ İHTİMALİ
                    weatherValues.days[0].mornTemp = subResult.daily[0].temp.morn//SABAH SICAKLIK
                    weatherValues.days[0].dayTemp = subResult.daily[0].temp.day//ÖĞLEDEN SONRA SICAKLIK
                    weatherValues.days[0].eveTemp = subResult.daily[0].temp.eve//AKŞAM SICAKLIK
                    weatherValues.days[0].nigTemp = subResult.daily[0].temp.night//GECE SICAKLIK
                }
                else{
                    weatherValues.days[i].temp = subResult.daily[i].temp.day;//SICAKLIK
                    weatherValues.days[i].feels_like =  subResult.daily[i].feels_like.day;//HİSSEDİLEN
                    weatherValues.days[i].description = subResult.daily[i].weather[0].description;//AÇIKLAMA
                    weatherValues.days[i].humidity = subResult.daily[i].humidity;//NEM
                    weatherValues.days[i].uvi = subResult.daily[i].uvi;//UV
                    weatherValues.days[i].clouds = subResult.daily[i].clouds;//BULUTLULUK ORANI
                    weatherValues.days[i].sunrise = subResult.daily[i].sunrise;//GÜNDOĞUMU
                    weatherValues.days[i].sunset = subResult.daily[i].sunset;//GÜNBATIMI
                    weatherValues.days[i].wind_deg = subResult.daily[i].wind_deg;//RÜZGAR YÖNÜ
                    weatherValues.days[i].wind_speed = subResult.daily[i].wind_speed;//RÜZGAR HIZI
                    weatherValues.days[i].pop = subResult.daily[i].pop;//yağış ihtimali
                    weatherValues.days[i].mornTemp = subResult.daily[i].temp.morn;//SABAH SICAKLIK
                    weatherValues.days[i].dayTemp = subResult.daily[i].temp.day;//ÖĞLEDEN SONRA SICAKLIK
                    weatherValues.days[i].eveTemp = subResult.daily[i].temp.eve;//AKŞAM SICAKLIK 
                    weatherValues.days[i].nigTemp = subResult.daily[i].temp.night;//GECE SICAKLIK
                }
                
                
            }
            loaded=true;
            createParElement(weatherValues);
        }
    }
}