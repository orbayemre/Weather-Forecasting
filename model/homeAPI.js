const url="https://api.openweathermap.org/data/2.5/";
const key="8cdbcca2e5aa060267b345d7aa72f22d";

headerWeat = (lat,lon) =>{
    var query =url+"onecall?lat="+lat+"&lon="+lon+"&exclude=minutely&units=metric&lang=tr&appid="+key;   
    fetch(query)
    .then(weather => {return weather.json()})
    .then(result => {ress(result);})
    .catch(error => {
        alert(error);
        window.location="file:///E:/Dosyalarim/Web%20Projelerim/Weather%20Forecasting%20Web%20Site/view/home.html";
    })


    ress = (result) =>{
        geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(lat, lon);
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                var len = results.length-2;
                if (results[len]) {takeCity(results[len].formatted_address);}
            }
            else {alert("Geocoder failed due to: " + status);}
        });
     
        var weatherValues = {
            temp:result.current.temp,//SICAKLIK
            feels_like:result.current.feels_like,//HİSSEDİLEN
            description:result.current.weather[0].description,//AÇIKLAMA
            humidity:result.current.humidity,//NEM
            uvi:result.current.uvi,//UV
            clouds:result.current.clouds,//BULUTLULUK ORANI
            sunrise:result.current.sunrise,//GÜNDOĞUMU
            sunset:result.current.sunset,//GÜNBATIMI
            wind_deg:result.current.wind_deg,//RÜZGAR YÖNÜ
            wind_speed:result.current.wind_speed,//RÜZGAR HIZI
            pop:result.daily[0].pop,//YAĞIŞ İHTİMALİ
            maxTemp:result.daily[0].temp.max,//MAX SICAKLIK
            minTemp:result.daily[0].temp.min,//MİN SICAKLIK
            mornTemp:result.daily[0].temp.morn,//SABAH
            dayTemp:result.daily[0].temp.day,//ÖĞLEDEN SONRA
            eveTemp:result.daily[0].temp.eve,//AKŞAM
            nigTemp:result.daily[0].temp.night,//GECE
            timeZone:result.timezone//ZAMAN DİLİMİ 
        }
        
        loaded=true;
        createLocElement(weatherValues);
    }
}
