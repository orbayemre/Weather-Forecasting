const city = getCityParam();

createLocElement = (response)=>{

    const temp = document.querySelector(".basic .deg .apiValue");
    const desc = document.querySelector(".basic .description span");
    const feels = document.querySelector(".basic .rows:nth-child(3) .apiValue");
    const hum = document.querySelector(".details .cell1 .col1 .hum .apiValue");
    const uv = document.querySelector(".details .cell1 .col1 .uv .apiValue");
    const direc = document.querySelector(".details .cell2 .body .direction .apiValue");
    const speed = document.querySelector(".details .cell2 .body .speed .apiValue");
    const cloud = document.querySelector(".details .cell3 .col1 .cloud .apiValue");
    const rain = document.querySelector(".details .cell3 .col1 .rain .apiValue");
    const sunrise = document.querySelector(".details .cell4 .col1 .sunrise .apiValue");
    const sunset = document.querySelector(".details .cell4 .col1 .sunset .apiValue");
    const mon = document.querySelector(".dett .morn .apiValue");
    const aft = document.querySelector(".dett .afn .apiValue");
    const eve = document.querySelector(".dett .eve .apiValue");
    const night = document.querySelector(".dett .night .apiValue");

    temp.innerHTML = Math.round(response.temp);
    desc.innerHTML = response.description.charAt(0).toUpperCase() + response.description.slice(1);
    feels.innerHTML = Math.round(response.feels_like);
    hum.innerHTML = response.humidity+"%";
    uv.innerHTML = response.uvi;
    direc.innerHTML = response.wind_deg;
    speed.innerHTML = response.wind_speed;
    cloud.innerHTML = response.clouds;
    rain.innerHTML = response.pop*100;
    
    descDesg(response.description);

    var suns = new Date(response.sunset * 1000);
    var hours = suns.getHours();
    var minutes = "0" + suns.getMinutes();
    var sunsetTime = hours + ':' + minutes.substr(-2);
    var sunr = new Date(response.sunrise * 1000);
    var hours = sunr.getHours();
    var minutes = "0" + sunr.getMinutes();
    var sunriseTime = hours + ':' + minutes.substr(-2);
    sunrise.innerHTML = sunriseTime;
    sunset.innerHTML = sunsetTime;
    

    mon.innerHTML = Math.round(response.mornTemp);
    aft.innerHTML = Math.round(response.dayTemp);
    eve.innerHTML = Math.round(response.eveTemp);
    night.innerHTML = Math.round(response.nigTemp);
    
}
createParElement = (response)=>{

    daysDesg(document.querySelector(".days .zero .weat .ic"),response.days[0].description);
    daysDesg(document.querySelector(".days .one .weat .ic"),response.days[1].description);
    daysDesg(document.querySelector(".days .two .weat .ic"),response.days[2].description);
    daysDesg(document.querySelector(".days .three .weat .ic"),response.days[3].description);
    daysDesg(document.querySelector(".days .four .weat .ic"),response.days[4].description);
    daysDesg(document.querySelector(".days .five .weat .ic"),response.days[5].description);
    daysDesg(document.querySelector(".days .six .weat .ic"),response.days[6].description);

    document.querySelector(".days .zero .weat .morn").innerHTML = Math.round(response.days[0].dayTemp);
    document.querySelector(".days .zero .weat .night").innerHTML = Math.round(response.days[0].nigTemp);
    document.querySelector(".days .zero .body .morn .apiValue").innerHTML = Math.round(response.days[0].mornTemp);
    document.querySelector(".days .zero .body .afn .apiValue").innerHTML = Math.round(response.days[0].dayTemp);
    document.querySelector(".days .zero .body .eve .apiValue").innerHTML = Math.round(response.days[0].eveTemp);
    document.querySelector(".days .zero .body .night .apiValue").innerHTML = Math.round(response.days[0].nigTemp);

    document.querySelector(".days .one .weat .morn").innerHTML = Math.round(response.days[1].dayTemp);
    document.querySelector(".days .one .weat .night").innerHTML = Math.round(response.days[1].nigTemp);
    document.querySelector(".days .one .body .morn .apiValue").innerHTML = Math.round(response.days[1].mornTemp);
    document.querySelector(".days .one .body .afn .apiValue").innerHTML = Math.round(response.days[1].dayTemp);
    document.querySelector(".days .one .body .eve .apiValue").innerHTML = Math.round(response.days[1].eveTemp);
    document.querySelector(".days .one .body .night .apiValue").innerHTML = Math.round(response.days[1].nigTemp);

    document.querySelector(".days .two .weat .morn").innerHTML = Math.round(response.days[2].dayTemp);
    document.querySelector(".days .two .weat .night").innerHTML = Math.round(response.days[2].nigTemp);
    document.querySelector(".days .two .body .morn .apiValue").innerHTML = Math.round(response.days[2].mornTemp);
    document.querySelector(".days .two .body .afn .apiValue").innerHTML = Math.round(response.days[2].dayTemp);
    document.querySelector(".days .two .body .eve .apiValue").innerHTML = Math.round(response.days[2].eveTemp);
    document.querySelector(".days .two .body .night .apiValue").innerHTML = Math.round(response.days[2].nigTemp);

    document.querySelector(".days .three .weat .morn").innerHTML = Math.round(response.days[3].dayTemp);
    document.querySelector(".days .three .weat .night").innerHTML = Math.round(response.days[3].nigTemp);
    document.querySelector(".days .three .body .morn .apiValue").innerHTML = Math.round(response.days[3].mornTemp);
    document.querySelector(".days .three .body .afn .apiValue").innerHTML = Math.round(response.days[3].dayTemp);
    document.querySelector(".days .three .body .eve .apiValue").innerHTML = Math.round(response.days[3].eveTemp);
    document.querySelector(".days .three .body .night .apiValue").innerHTML = Math.round(response.days[3].nigTemp);

    document.querySelector(".days .four .weat .morn").innerHTML = Math.round(response.days[4].dayTemp);
    document.querySelector(".days .four .weat .night").innerHTML = Math.round(response.days[4].nigTemp);
    document.querySelector(".days .four .body .morn .apiValue").innerHTML = Math.round(response.days[4].mornTemp);
    document.querySelector(".days .four .body .afn .apiValue").innerHTML = Math.round(response.days[4].dayTemp);
    document.querySelector(".days .four .body .eve .apiValue").innerHTML = Math.round(response.days[4].eveTemp);
    document.querySelector(".days .four .body .night .apiValue").innerHTML = Math.round(response.days[4].nigTemp);

    document.querySelector(".days .five .weat .morn").innerHTML = Math.round(response.days[5].dayTemp);
    document.querySelector(".days .five .weat .night").innerHTML = Math.round(response.days[5].nigTemp);
    document.querySelector(".days .five .body .morn .apiValue").innerHTML = Math.round(response.days[5].mornTemp);
    document.querySelector(".days .five .body .afn .apiValue").innerHTML = Math.round(response.days[5].dayTemp);
    document.querySelector(".days .five .body .eve .apiValue").innerHTML = Math.round(response.days[5].eveTemp);
    document.querySelector(".days .five .body .night .apiValue").innerHTML = Math.round(response.days[5].nigTemp);

    document.querySelector(".days .six .weat .morn").innerHTML = Math.round(response.days[6].dayTemp);
    document.querySelector(".days .six .weat .night").innerHTML = Math.round(response.days[6].nigTemp);
    document.querySelector(".days .six .body .morn .apiValue").innerHTML = Math.round(response.days[6].mornTemp);
    document.querySelector(".days .six .body .afn .apiValue").innerHTML = Math.round(response.days[6].dayTemp);
    document.querySelector(".days .six .body .eve .apiValue").innerHTML = Math.round(response.days[6].eveTemp);
    document.querySelector(".days .six .body .night .apiValue").innerHTML = Math.round(response.days[6].nigTemp);

 
    const temp = document.querySelector(".basic .deg .apiValue");
    const desc = document.querySelector(".basic .description span");
    const feels = document.querySelector(".basic .rows:nth-child(3) .apiValue");
    const hum = document.querySelector(".details .cell1 .col1 .hum .apiValue");
    const uv = document.querySelector(".details .cell1 .col1 .uv .apiValue");
    const direc = document.querySelector(".details .cell2 .body .direction .apiValue");
    const speed = document.querySelector(".details .cell2 .body .speed .apiValue");
    const cloud = document.querySelector(".details .cell3 .col1 .cloud .apiValue");
    const rain = document.querySelector(".details .cell3 .col1 .rain .apiValue");
    const sunrise = document.querySelector(".details .cell4 .col1 .sunrise .apiValue");
    const sunset = document.querySelector(".details .cell4 .col1 .sunset .apiValue");
    
    
    temp.innerHTML = Math.round(response.days[0].temp);
    desc.innerHTML = response.days[0].description.charAt(0).toUpperCase() + response.days[0].description.slice(1);
    feels.innerHTML = Math.round(response.days[0].feels_like);
    hum.innerHTML = response.days[0].humidity+"%";
    uv.innerHTML = response.days[0].uvi;
    direc.innerHTML = response.days[0].wind_deg;
    speed.innerHTML = response.days[0].wind_speed;
    cloud.innerHTML = response.days[0].clouds;
    rain.innerHTML = response.days[0].pop*100;

    descDesg(response.days[0].description);

    sunset.innerHTML = window.moment(response.days[0].sunset * 1000).tz(response.timeZone).format("HH:mm");
    sunrise.innerHTML = window.moment(response.days[0].sunrise * 1000).tz(response.timeZone).format("HH:mm");
    

    document.querySelector(".days .zero").addEventListener("click",()=>{
        temp.innerHTML = Math.round(response.days[0].temp);
        desc.innerHTML = response.days[0].description.charAt(0).toUpperCase() + response.days[0].description.slice(1);
        feels.innerHTML = Math.round(response.days[0].feels_like);
        hum.innerHTML = response.days[0].humidity+"%";
        uv.innerHTML = response.days[0].uvi;
        direc.innerHTML = response.days[0].wind_deg;
        speed.innerHTML = response.days[0].wind_speed;
        cloud.innerHTML = response.days[0].clouds;
        rain.innerHTML = response.days[0].pop*100;
        descDesg(response.days[0].description);

        sunset.innerHTML = window.moment(response.days[0].sunset * 1000).tz(response.timeZone).format("HH:mm");
        sunrise.innerHTML = window.moment(response.days[0].sunrise * 1000).tz(response.timeZone).format("HH:mm");

        
        document.querySelector(".days .zero").style.border="1px solid var(--10)";
        document.querySelector(".days .one").style.border="none";
        document.querySelector(".days .two").style.border="none";
        document.querySelector(".days .three").style.border="none";
        document.querySelector(".days .four").style.border="none";
        document.querySelector(".days .five").style.border="none";
        document.querySelector(".days .six").style.border="none";

    });
    document.querySelector(".days .one").addEventListener("click",()=>{
        temp.innerHTML = Math.round(response.days[1].temp);
        desc.innerHTML = response.days[1].description.charAt(0).toUpperCase() + response.days[1].description.slice(1);
        feels.innerHTML = Math.round(response.days[1].feels_like);
        hum.innerHTML = response.days[1].humidity+"%";
        uv.innerHTML = response.days[1].uvi;
        direc.innerHTML = response.days[1].wind_deg;
        speed.innerHTML = response.days[1].wind_speed;
        cloud.innerHTML = response.days[1].clouds;
        rain.innerHTML = response.days[1].pop*100;

        descDesg(response.days[1].description);

        sunset.innerHTML = window.moment(response.days[1].sunset * 1000).tz(response.timeZone).format("HH:mm");
        sunrise.innerHTML = window.moment(response.days[1].sunrise * 1000).tz(response.timeZone).format("HH:mm");

        document.querySelector(".days .zero").style.border="none";
        document.querySelector(".days .one").style.border="1px solid var(--10)";
        document.querySelector(".days .two").style.border="none";
        document.querySelector(".days .three").style.border="none";
        document.querySelector(".days .four").style.border="none";
        document.querySelector(".days .five").style.border="none";
        document.querySelector(".days .six").style.border="none";

    });
    document.querySelector(".days .two").addEventListener("click",()=>{
        temp.innerHTML = Math.round(response.days[2].temp);
        desc.innerHTML = response.days[2].description.charAt(0).toUpperCase() + response.days[2].description.slice(1);
        feels.innerHTML = Math.round(response.days[2].feels_like);
        hum.innerHTML = response.days[2].humidity+"%";
        uv.innerHTML = response.days[2].uvi;
        direc.innerHTML = response.days[2].wind_deg;
        speed.innerHTML = response.days[2].wind_speed;
        cloud.innerHTML = response.days[2].clouds;
        rain.innerHTML = response.days[2].pop*100;

        descDesg(response.days[2].description);

        sunset.innerHTML = window.moment(response.days[2].sunset * 1000).tz(response.timeZone).format("HH:mm");
        sunrise.innerHTML = window.moment(response.days[2].sunrise * 1000).tz(response.timeZone).format("HH:mm");

        document.querySelector(".days .zero").style.border="none";
        document.querySelector(".days .one").style.border="none";
        document.querySelector(".days .two").style.border="1px solid var(--10)";
        document.querySelector(".days .three").style.border="none";
        document.querySelector(".days .four").style.border="none";
        document.querySelector(".days .five").style.border="none";
        document.querySelector(".days .six").style.border="none";

    });
    document.querySelector(".days .three").addEventListener("click",()=>{
        temp.innerHTML = Math.round(response.days[3].temp);
        desc.innerHTML = response.days[3].description.charAt(0).toUpperCase() + response.days[3].description.slice(1);
        feels.innerHTML = Math.round(response.days[3].feels_like);
        hum.innerHTML = response.days[3].humidity+"%";
        uv.innerHTML = response.days[3].uvi;
        direc.innerHTML = response.days[3].wind_deg;
        speed.innerHTML = response.days[3].wind_speed;
        cloud.innerHTML = response.days[3].clouds;
        rain.innerHTML = response.days[3].pop*100;

        descDesg(response.days[3].description);

        sunset.innerHTML = window.moment(response.days[3].sunset * 1000).tz(response.timeZone).format("HH:mm");
        sunrise.innerHTML = window.moment(response.days[3].sunrise * 1000).tz(response.timeZone).format("HH:mm");

        document.querySelector(".days .zero").style.border="none";
        document.querySelector(".days .one").style.border="none";
        document.querySelector(".days .two").style.border="none";
        document.querySelector(".days .three").style.border="1px solid var(--10)";
        document.querySelector(".days .four").style.border="none";
        document.querySelector(".days .five").style.border="none";
        document.querySelector(".days .six").style.border="none";

    });
    document.querySelector(".days .four").addEventListener("click",()=>{
        temp.innerHTML = Math.round(response.days[4].temp);
        desc.innerHTML = response.days[4].description.charAt(0).toUpperCase() + response.days[4].description.slice(1);
        feels.innerHTML = Math.round(response.days[4].feels_like);
        hum.innerHTML = response.days[4].humidity+"%";
        uv.innerHTML = response.days[4].uvi;
        direc.innerHTML = response.days[4].wind_deg;
        speed.innerHTML = response.days[4].wind_speed;
        cloud.innerHTML = response.days[4].clouds;
        rain.innerHTML = response.days[4].pop*100;

        descDesg(response.days[4].description);

        sunset.innerHTML = window.moment(response.days[4].sunset * 1000).tz(response.timeZone).format("HH:mm");
        sunrise.innerHTML = window.moment(response.days[4].sunrise * 1000).tz(response.timeZone).format("HH:mm");

        document.querySelector(".days .zero").style.border="none";
        document.querySelector(".days .one").style.border="none";
        document.querySelector(".days .two").style.border="none";
        document.querySelector(".days .three").style.border="none";
        document.querySelector(".days .four").style.border="1px solid var(--10)";
        document.querySelector(".days .five").style.border="none";
        document.querySelector(".days .six").style.border="none";

    });
    document.querySelector(".days .five").addEventListener("click",()=>{
        temp.innerHTML = Math.round(response.days[5].temp);
        desc.innerHTML = response.days[5].description.charAt(0).toUpperCase() + response.days[5].description.slice(1);
        feels.innerHTML = Math.round(response.days[5].feels_like);
        hum.innerHTML = response.days[5].humidity+"%";
        uv.innerHTML = response.days[5].uvi;
        direc.innerHTML = response.days[5].wind_deg;
        speed.innerHTML = response.days[5].wind_speed;
        cloud.innerHTML = response.days[5].clouds;
        rain.innerHTML = response.days[5].pop*100;

        descDesg(response.days[5].description);

        sunset.innerHTML = window.moment(response.days[5].sunset * 1000).tz(response.timeZone).format("HH:mm");
        sunrise.innerHTML = window.moment(response.days[5].sunrise * 1000).tz(response.timeZone).format("HH:mm");

        document.querySelector(".days .zero").style.border="none";
        document.querySelector(".days .one").style.border="none";
        document.querySelector(".days .two").style.border="none";
        document.querySelector(".days .three").style.border="none";
        document.querySelector(".days .four").style.border="none";
        document.querySelector(".days .five").style.border="1px solid var(--10)";
        document.querySelector(".days .six").style.border="none";

    });
    document.querySelector(".days .six").addEventListener("click",()=>{
        temp.innerHTML = Math.round(response.days[6].temp);
        desc.innerHTML = response.days[6].description.charAt(0).toUpperCase() + response.days[6].description.slice(1);
        feels.innerHTML = Math.round(response.days[6].feels_like);
        hum.innerHTML = response.days[6].humidity+"%";
        uv.innerHTML = response.days[6].uvi;
        direc.innerHTML = response.days[6].wind_deg;
        speed.innerHTML = response.days[6].wind_speed;
        cloud.innerHTML = response.days[6].clouds;
        rain.innerHTML = response.days[6].pop*100;

        descDesg(response.days[6].description);

        sunset.innerHTML = window.moment(response.days[6].sunset * 1000).tz(response.timeZone).format("HH:mm");
        sunrise.innerHTML = window.moment(response.days[6].sunrise * 1000).tz(response.timeZone).format("HH:mm");

        document.querySelector(".days .zero").style.border="none";
        document.querySelector(".days .one").style.border="none";
        document.querySelector(".days .two").style.border="none";
        document.querySelector(".days .three").style.border="none";
        document.querySelector(".days .four").style.border="none";
        document.querySelector(".days .five").style.border="none";
        document.querySelector(".days .six").style.border="1px solid var(--10)";

    });



    takeCity(response.cityName);
    setInterval(() => {
        var cityTime = moment.tz(response.timeZone);
        const hourElmnt = document.querySelector(".weather .basic .rows:nth-child(1) .time .hour");
        const minElmnt = document.querySelector(".weather .basic .rows:nth-child(1) .time .minute");
        const secElmnt = document.querySelector(".weather .basic .rows:nth-child(1) .time .second");
        const dayElmnt = document.querySelector(".weather .basic .rows:nth-child(1) .time .day");
        hourElmnt.innerHTML = cityTime.format("HH");
        minElmnt.innerHTML = cityTime.format("mm");
        secElmnt.innerHTML = cityTime.format("ss");
        var weekday=new Array(7);
        weekday['Sunday']="Pazar";
        weekday['Monday']="Pazartesi";
        weekday['Tuesday']="Salı";
        weekday['Wednesday']="Çarşamba";
        weekday['Thursday']="Perşembe";
        weekday['Friday']="Cuma";
        weekday['Saturday']="Cumartesi";
        day = weekday[cityTime.format("dddd")];
        dayElmnt.innerHTML = day;

    });

    var today= moment.tz(response.timeZone).format("dddd");
    var i;
    if(today == "Sunday" ){i=0}
    else if(today == "Monday"){i=1}
    else if(today == "Tuesday"){i=2}
    else if(today == "Wednesday"){i=3}
    else if(today == "Thursday"){i=4}
    else if(today == "Friday"){i=5}
    else if(today == "Saturday"){i=6}
    var dayAry = new Array(7);
    dayAry[0] = "Pazar";
    dayAry[1] = "Pazartesi";
    dayAry[2] = "Salı";
    dayAry[3] = "Çarşamba";
    dayAry[4] = "Perşembe";
    dayAry[5] = "Cuma";
    dayAry[6] = "Cumartesi";
    
    var tempAry  = new Array(7);
    tempAry  = dayAry.slice(i,7);
    tempAry.push(...dayAry.slice(0,i));

    document.querySelector(".days .zero .day").innerHTML = tempAry[0];
    document.querySelector(".days .one .day").innerHTML = tempAry[1];
    document.querySelector(".days .two .day").innerHTML = tempAry[2];
    document.querySelector(".days .three .day").innerHTML = tempAry[3];
    document.querySelector(".days .four .day").innerHTML = tempAry[4];
    document.querySelector(".days .five .day").innerHTML = tempAry[5];
    document.querySelector(".days .six .day").innerHTML = tempAry[6];
}

takeCity = (city)=>{
    const cityName = document.querySelector(".basic .cityName");
    cityName.innerHTML=city;
}

descDesg = (desc)=>{
    const body = document.querySelector("body");
    const sun = document.querySelector(".basic .description .sun");
    const fewClouds = document.querySelector(".basic .description .fewClouds");
    const clouds = document.querySelector(".basic .description .clouds");
    const rain = document.querySelector(".basic .description .rain");
    const strom = document.querySelector(".basic .description .strom");
    const snow = document.querySelector(".basic .description .snow");
    const mist = document.querySelector(".basic .description .mist");
    if(desc == "açık"){
        sun.style.display="inline-block";
        fewClouds.style.display="none";
        clouds.style.display="none";
        rain.style.display="none";
        strom.style.display="none";
        snow.style.display="none";
        mist.style.display="none";
        body.style.background="url(https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
    }
    else if((desc ==  "az bulutlu") || (desc == "parçalı bulutlu") ){
        sun.style.display="none";
        fewClouds.style.display="inline-block";
        clouds.style.display="none";
        rain.style.display="none";
        strom.style.display="none";
        snow.style.display="none";
        mist.style.display="none";
        body.style.background="url(https://images.pexels.com/photos/1619569/pexels-photo-1619569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
    }
    else if(desc == "kapalı"){
        sun.style.display="none";
        fewClouds.style.display="none";
        clouds.style.display="inline-block";
        rain.style.display="none";
        strom.style.display="none";
        snow.style.display="none";
        mist.style.display="none";
        body.style.background="url(https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
    }
    else if((desc == "hafif yağmur") || (desc == "orta şiddetli yağmur") ){
        sun.style.display="none";
        fewClouds.style.display="none";
        clouds.style.display="none";
        rain.style.display="inline-block";
        strom.style.display="none";
        snow.style.display="none";
        mist.style.display="none";
        body.style.background="url(https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
    }
    else if(desc == "şiddetli yağmur"){
        sun.style.display="none";
        fewClouds.style.display="none";
        clouds.style.display="none";
        rain.style.display="none";
        strom.style.display="inline-block";
        snow.style.display="none";
        mist.style.display="none";
        body.style.background="url(https://images.pexels.com/photos/2684011/pexels-photo-2684011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
    }
    else if(desc == "karlı"){
        sun.style.display="none";
        fewClouds.style.display="none";
        clouds.style.display="none";
        rain.style.display="none";
        strom.style.display="none";
        snow.style.display="inline-block";
        mist.style.display="none";
        body.style.background="url(https://images.pexels.com/photos/3778040/pexels-photo-3778040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
    }
    else if(desc == "sisli"){
        sun.style.display="none";
        fewClouds.style.display="none";
        clouds.style.display="none";
        rain.style.display="none";
        strom.style.display="none";
        snow.style.display="none";
        mist.style.display="inline-block";
        body.style.background="url(https://images.pexels.com/photos/1287075/pexels-photo-1287075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
    }
    body.style.backgroundSize="cover";

}
daysDesg = (element,desc)=>{
 
    if(desc == "açık"){element.innerHTML =
        `<svg x="0px" y="0px" viewBox="0 0 438.2 438.2" style="enable-background:new 0 0 438.2 438.2;" xml:space="preserve">
            <circle style="fill:#F7CF52;" cx="219.097" cy="219.096" r="108.313"/>
            <rect x="211.6" y="348.358" style="fill:#F7CF52;" width="15" height="89.842"/>
            <rect x="211.6" style="fill:#F7CF52;" width="15" height="89.842"/>
            
                <rect x="88.442" y="297.342" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -78.2323 652.1193)" style="fill:#F7CF52;" width="15" height="89.841"/>
            
                <rect x="334.765" y="51.011" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 516.4483 405.7837)" style="fill:#F7CF52;" width="15" height="89.841"/>
            <rect y="211.6" style="fill:#F7CF52;" width="89.842" height="15"/>
            <rect x="348.358" y="211.6" style="fill:#F7CF52;" width="89.842" height="15"/>
            
                <rect x="51.017" y="88.436" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 95.9381 231.6103)" style="fill:#F7CF52;" width="89.841" height="15"/>
            
                <rect x="297.342" y="334.758" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 342.2663 826.288)" style="fill:#F7CF52;" width="89.841" height="15"/>
            <g>
                
                    <rect x="257.727" y="347.297" transform="matrix(-0.3826 -0.9239 0.9239 -0.3826 52.8494 744.91)" style="fill:#F4581B;" width="35.174" height="15"/>
                
                    <rect x="145.305" y="75.898" transform="matrix(-0.3826 -0.9239 0.9239 -0.3826 148.1631 265.8043)" style="fill:#F4581B;" width="35.174" height="15"/>
                
                    <rect x="155.389" y="337.208" transform="matrix(-0.9239 -0.3826 0.3826 -0.9239 177.6382 744.917)" style="fill:#F4581B;" width="15" height="35.174"/>
                
                    <rect x="267.805" y="65.81" transform="matrix(-0.9239 -0.3826 0.3826 -0.9239 497.7542 265.7812)" style="fill:#F4581B;" width="15" height="35.174"/>
                
                    <rect x="75.901" y="257.716" transform="matrix(-0.3826 -0.9239 0.9239 -0.3826 -139.0446 457.6895)" style="fill:#F4581B;" width="15" height="35.174"/>
                
                    <rect x="347.296" y="145.3" transform="matrix(-0.3826 -0.9239 0.9239 -0.3826 340.0494 553.0082)" style="fill:#F4581B;" width="15" height="35.174"/>
                
                    <rect x="65.814" y="155.39" transform="matrix(-0.9239 -0.3826 0.3826 -0.9239 98.1324 345.2949)" style="fill:#F4581B;" width="35.174" height="15"/>
                
                    <rect x="337.211" y="267.802" transform="matrix(-0.9239 -0.3826 0.3826 -0.9239 577.2684 665.4034)" style="fill:#F4581B;" width="35.174" height="15"/>
            </g>
        </svg>`
    }
    else if((desc ==  "az bulutlu") || (desc == "parçalı bulutlu") || (desc == "parçalı az bulutlu")){element.innerHTML = 
        `<svg x="0px" y="0px" viewBox="0 0 60.176 60.176" style="enable-background:new 0 0 60.176 60.176;" xml:space="preserve">
        <g>
            <path style="fill:#F0C419;" d="M6.139,23.807c0-0.552-0.447-1-1-1H1c-0.553,0-1,0.448-1,1s0.447,1,1,1h4.139   C5.691,24.807,6.139,24.359,6.139,23.807z"/>
            <path style="fill:#F0C419;" d="M21,2.807c-0.553,0-1,0.448-1,1v4.138c0,0.552,0.447,1,1,1s1-0.448,1-1V3.807   C22,3.255,21.553,2.807,21,2.807z"/>
            <path style="fill:#F0C419;" d="M6.535,7.927c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l3.956,3.956   c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L6.535,7.927z"/>
            <path style="fill:#F0C419;" d="M36.88,7.927c-0.391-0.391-1.023-0.391-1.414,0l-3.956,3.956c-0.391,0.391-0.391,1.023,0,1.414   c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l3.956-3.956C37.271,8.951,37.271,8.318,36.88,7.927z"/>
            <path style="fill:#F0C419;" d="M14.915,6.91c-0.217-0.509-0.808-0.745-1.312-0.53c-0.509,0.216-0.746,0.803-0.53,1.311l0.809,1.905   c0.162,0.381,0.532,0.61,0.921,0.61c0.131,0,0.264-0.026,0.391-0.08c0.509-0.216,0.746-0.803,0.53-1.311L14.915,6.91z"/>
            <path style="fill:#F0C419;" d="M28.093,6.254c-0.513-0.205-1.095,0.041-1.302,0.553l-0.775,1.918   c-0.207,0.512,0.04,1.095,0.552,1.302c0.123,0.049,0.25,0.073,0.375,0.073c0.396,0,0.77-0.236,0.927-0.626l0.775-1.918   C28.852,7.044,28.604,6.461,28.093,6.254z"/>
            <path style="fill:#F0C419;" d="M6.009,29.084l-1.904,0.809c-0.509,0.216-0.746,0.803-0.53,1.311c0.162,0.381,0.532,0.61,0.921,0.61   c0.131,0,0.264-0.026,0.391-0.08l1.904-0.809c0.509-0.216,0.746-0.803,0.53-1.311C7.104,29.105,6.512,28.869,6.009,29.084z"/>
            <path style="fill:#F0C419;" d="M4,18.017l1.918,0.775c0.123,0.049,0.25,0.073,0.375,0.073c0.396,0,0.77-0.236,0.927-0.625   c0.207-0.512-0.04-1.095-0.552-1.302L4.75,16.162c-0.512-0.205-1.095,0.041-1.302,0.552C3.241,17.227,3.488,17.81,4,18.017z"/>
        </g>
        <g>
            <path style="fill:#EDE21B;" d="M12.806,34.876c0.719,0.079,1.418,0.223,2.087,0.439c-0.446-2.027,0.004-4.231,1.426-5.958   c1.872-2.273,4.878-3.063,7.523-2.224l0.012,0.004c0.816-2.055,2.586-3.693,4.902-4.238c0.824-0.194,1.646-0.225,2.441-0.129   c-0.007-0.155-0.023-0.307-0.023-0.464c0-2.063,0.604-3.982,1.632-5.605C30.39,12.7,26.015,10.014,21,10.014   c-7.618,0-13.793,6.175-13.793,13.793C7.207,28.351,9.414,32.366,12.806,34.876z"/>
        </g>
        <path style="fill:#D0E8F9;" d="M60.152,29.369h-0.081c0.035,0.304,0.059,0.611,0.059,0.925c0,0.553-0.447,1-1,1s-1-0.447-1-1  c0-3.309-2.691-6-6-6s-6,2.691-6,6c0,0.553-0.447,1-1,1s-1-0.447-1-1c0-4.064,3.049-7.423,6.978-7.927  c-0.226-5.039-4.384-9.073-9.478-9.073c-5.111,0-9.281,4.06-9.481,9.123c0.829,0.196,1.632,0.52,2.378,0.981  c1.816,1.125,3.086,2.89,3.576,4.97c0.126,0.538-0.207,1.076-0.744,1.203c-0.538,0.121-1.076-0.207-1.203-0.744  c-0.758-3.222-3.999-5.226-7.214-4.467c-3.221,0.758-5.225,3.994-4.467,7.215c0.126,0.537-0.207,1.075-0.745,1.202  c-0.076,0.018-0.153,0.026-0.229,0.026c-0.453,0-0.864-0.311-0.973-0.771c-0.294-1.251-0.268-2.502,0.012-3.674  c-2.058-0.301-4.137,0.476-5.493,2.122c-1.258,1.529-1.625,3.498-1.175,5.285c0.001,0.012,0.007,0.022,0.008,0.034  c0.306,1.186,0.97,2.29,1.985,3.127c0.426,0.352,0.487,0.981,0.137,1.408c-0.198,0.24-0.484,0.364-0.773,0.364  c-0.224,0-0.448-0.074-0.635-0.228c-1.217-1.002-2.088-2.311-2.546-3.781c-4.043-1.054-8.294,0.647-10.49,4.262  c-1.317,2.168-1.712,4.72-1.11,7.185c0.602,2.466,2.127,4.549,4.296,5.867c0.472,0.287,0.622,0.901,0.335,1.374  c-0.188,0.31-0.518,0.48-0.855,0.48c-0.133,0-0.265-0.036-0.392-0.091c1.58,0.936,3.399,1.509,5.344,1.593l8.209,0.003  c5.307-0.085,9.853-3.36,11.791-7.992c1.963,4.693,6.603,8,12,8c9.374,0,17-7.626,17-17v-10L60.152,29.369z"/>
        <g>
            <path style="fill:#ABCADD;" d="M53.108,22.435c-0.231-6.139-5.284-11.066-11.478-11.066c-6.142,0-11.16,4.844-11.47,10.91   c-0.558,0.012-1.119,0.078-1.676,0.209c-2.336,0.55-4.185,2.082-5.229,4.052c-2.882-0.585-5.848,0.433-7.75,2.742   c-1.251,1.52-1.879,3.408-1.81,5.359c-4.63-0.834-9.34,1.224-11.844,5.344c-1.596,2.625-2.073,5.714-1.345,8.698   s2.575,5.506,5.2,7.102c0.162,0.099,0.342,0.146,0.519,0.146c0.338,0,0.667-0.171,0.855-0.48c0.287-0.473,0.137-1.087-0.335-1.374   c-2.169-1.318-3.694-3.401-4.296-5.867c-0.602-2.465-0.207-5.017,1.11-7.185c2.196-3.614,6.447-5.315,10.49-4.262   c0.458,1.471,1.33,2.779,2.546,3.781c0.187,0.153,0.411,0.228,0.635,0.228c0.289,0,0.575-0.124,0.773-0.364   c0.351-0.427,0.289-1.057-0.137-1.408c-1.016-0.836-1.679-1.941-1.985-3.127c-0.001-0.012-0.007-0.022-0.008-0.034   c-0.45-1.787-0.083-3.756,1.175-5.285c1.356-1.646,3.435-2.423,5.493-2.122c-0.28,1.173-0.307,2.423-0.012,3.674   c0.108,0.461,0.52,0.771,0.973,0.771c0.076,0,0.153-0.009,0.229-0.026c0.538-0.127,0.871-0.665,0.745-1.202   c-0.758-3.221,1.246-6.457,4.467-7.215c3.215-0.759,6.456,1.245,7.214,4.467c0.127,0.537,0.665,0.865,1.203,0.744   c0.537-0.127,0.87-0.665,0.744-1.203c-0.49-2.08-1.76-3.845-3.576-4.97c-0.746-0.462-1.549-0.785-2.378-0.981   c0.2-5.063,4.37-9.123,9.481-9.123c5.094,0,9.253,4.033,9.478,9.073c-3.929,0.504-6.978,3.863-6.978,7.927c0,0.553,0.447,1,1,1   s1-0.447,1-1c0-3.309,2.691-6,6-6s6.046,2.691,6.046,6c0,0.028,0,1.327,0,3c0,0.552,0.448,1,1,1s1-0.448,1-1v-3   C60.176,26.29,57.059,22.92,53.108,22.435z"/>
        </g>
        <g>
            <path style="fill:#ABCADD;" d="M43.176,57.369c-4.973,0-9.491-2.608-12-6.789c-2.509,4.181-7.027,6.789-12,6.789   c-0.552,0-1-0.447-1-1s0.448-1,1-1c4.853,0,9.201-2.899,11.078-7.386l0.922-2.206l0.922,2.206   c1.876,4.486,6.225,7.386,11.078,7.386c0.552,0,1,0.447,1,1S43.729,57.369,43.176,57.369z"/>
        </g>
        <path style="fill:#ABCADD;" d="M55.073,43.244c-0.458-3.979-3.843-7.082-7.943-7.082c-4.411,0-8,3.589-8,8c0,0.552,0.448,1,1,1  s1-0.448,1-1c0-3.309,2.691-6,6-6c3.003,0,5.49,2.219,5.925,5.102c-2.797,0.509-4.925,2.957-4.925,5.898c0,0.552,0.448,1,1,1  s1-0.448,1-1c0-2.206,1.794-4,4-4s4,1.794,4,4c0,0.552,0.448,1,1,1s1-0.448,1-1C60.13,46.175,57.934,43.699,55.073,43.244z"/>
        </svg>`
    }
    else if(desc == "kapalı"){element.innerHTML = 
        `<svg fill="white" x="0px" y="0px" viewBox="0 0 297.5 297.5" style="enable-background:new 0 0 297.5 297.5;" xml:space="preserve">
        <g id="XMLID_24_">
            <g>
                <path style="fill:#96B6C5;" d="M277.9,136.57c0,15.93-10.96,29.34-25.73,33.11c-5.74-28.09-30.64-49.28-60.39-49.28    c-1.35,0-2.7,0.05-4.05,0.13c-1.73-11.06-6.41-21.17-13.22-29.47c3.09-2.05,6.79-3.26,10.78-3.26c0.81,0,1.64,0.05,2.54,0.17    c3.9,0.5,7.72-1.41,9.65-4.83c3.47-6.14,10-9.95,17.03-9.95c10.78,0,19.55,8.76,19.55,19.54c0,5.35,4.33,9.68,9.68,9.68    C262.57,102.41,277.9,117.74,277.9,136.57z"/>
                <path style="fill:#06A3B6;" d="M191.78,139.76c23.31,0,42.28,18.96,42.28,42.27c0,23.32-18.97,42.28-42.28,42.28H48.9    c-16.15,0-29.29-13.13-29.29-29.29c0-16.15,13.14-29.29,29.29-29.29c5.34,0,9.68-4.33,9.68-9.67c0-12.84,8.21-24.06,20.44-27.93    c3.3-1.05,5.79-3.77,6.53-7.15c4.21-19.23,21.58-33.18,41.28-33.18c23.32,0,42.28,18.97,42.28,42.28c0,0.31-0.01,0.62-0.02,0.93    l-0.01,0.42c-0.1,3.04,1.25,5.95,3.63,7.86c2.38,1.9,5.51,2.57,8.46,1.81C184.61,140.21,188.18,139.76,191.78,139.76z"/>
                <path d="M297.25,136.57c0,26.36-19.16,48.31-44.28,52.7c-3.59,30.59-29.66,54.4-61.19,54.4H48.9c-26.82,0-48.65-21.82-48.65-48.65    c0-23.79,17.17-43.65,39.77-47.83c2.87-15.71,13.28-29.02,28.01-35.56c7.96-25.32,31.88-43.19,58.8-43.19    c12.11,0,23.41,3.53,32.95,9.58c6.56-5.71,15.04-9.28,24.34-9.56c7.32-9.15,18.49-14.63,30.39-14.63    c18.36,0,33.79,12.79,37.86,29.92C277.79,87.89,297.25,110,297.25,136.57z M252.17,169.68c14.77-3.77,25.73-17.18,25.73-33.11    c0-18.83-15.33-34.16-34.16-34.16c-5.35,0-9.68-4.33-9.68-9.68c0-10.78-8.77-19.54-19.55-19.54c-7.03,0-13.56,3.81-17.03,9.95    c-1.93,3.42-5.75,5.33-9.65,4.83c-0.9-0.12-1.73-0.17-2.54-0.17c-3.99,0-7.69,1.21-10.78,3.26c6.81,8.3,11.49,18.41,13.22,29.47    c1.35-0.08,2.7-0.13,4.05-0.13C221.53,120.4,246.43,141.59,252.17,169.68z M234.06,182.03c0-23.31-18.97-42.27-42.28-42.27    c-3.6,0-7.17,0.45-10.61,1.34c-2.95,0.76-6.08,0.09-8.46-1.81c-2.38-1.91-3.73-4.82-3.63-7.86l0.01-0.42    c0.01-0.31,0.02-0.62,0.02-0.93c0-23.31-18.96-42.28-42.28-42.28c-19.7,0-37.07,13.95-41.28,33.18c-0.74,3.38-3.23,6.1-6.53,7.15    c-12.23,3.87-20.44,15.09-20.44,27.93c0,5.34-4.34,9.67-9.68,9.67c-16.15,0-29.29,13.14-29.29,29.29    c0,16.16,13.14,29.29,29.29,29.29h142.88C215.09,224.31,234.06,205.35,234.06,182.03z"/>
            </g>
            <g>
            </g>
        </g>
        </svg>`
    }
    else if((desc == "hafif yağmur") || (desc == "orta şiddetli yağmur") ){element.innerHTML = 
        `<svg  viewBox="0 0 128 128" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet">
        <path d="M107.62 46.29s1.72-32.32-23.89-38.72C54.12.17 48.29 28.49 48.29 28.49s-11.55-2.19-18.74 5.62c-6.03 6.55-5.46 12.96-5.46 12.96s-7.96-1.72-14.21 3.75s-5.31 10.61-5.31 10.61l18.58 7.18s93.83.47 94.3.16c.47-.31 6.25-9.37 6.25-9.37s-.94-7.81-6.4-10.93c-5.47-3.12-9.68-2.18-9.68-2.18z" fill="#e2ebee"/><path d="M14.25 73.45c4.68.16 35.29.78 53.86.62s46.81.14 50.73-1.71c3.07-1.45 4.9-3.85 5.19-7.21c.28-3.21-.34-5.75-.34-5.75s-4.37 3.16-12.65 3.28c-5.15.07-15.61-.78-13.58-2.65c.57-.53 8.66-6.66 8.27-12.33c-.09-1.34-7.34 5.31-14.21 8.12c-6.87 2.81-13.39 4.98-22.47 4.4c-7.65-.5-10.97-3.61-10.97-3.61s-3.69 4.33-14.78 5.26c-11.09.94-13.48-3.23-13.48-3.23s-5.37 4.06-14.39 3.94c-9-.14-10.77-3.38-10.77-3.38s-.85 5.77 1.03 9.14c1.92 3.43 5.41 5.01 8.56 5.11z" fill="#b9ced2"/><path d="M69.99 81.57c-1.71-.6-7.81 4.23-10.56 9c-2.76 4.79-.96 8.29 1.99 9.73c3.32 1.62 8.1.62 9.46-4.1c1.34-4.67.95-13.98-.89-14.63z" fill="#4fc4f8"/><path d="M37.66 79.19c-1.55-.55-6.58 4.12-8.84 6.64c-3.03 3.39-5.37 9.71.38 12.27c5.79 2.57 9.55-1.64 9.84-7.46c.28-5.42-.1-10.99-1.38-11.45z" fill="#4fc4f8"/><path d="M49.87 101.65c-1.65-.89-8.58 5.26-10.79 8.93c-2.2 3.67-2.06 8.38 2.44 10.31s8.47-.54 9.3-6.97c.58-4.56.64-11.41-.95-12.27z" fill="#4fc4f8"/><path d="M83.38 102.18c-1.19-.67-9.43 5.69-11.28 10.32c-3.67 9.19 8.87 13.29 11.72 4.65c1.66-5.04 1.03-14.14-.44-14.97z" fill="#4fc4f8"/><path d="M103.87 82.37c-1.63-1-8.48 4.64-10.76 8.88c-2.88 5.36-.64 9.4 2.5 10.68c3.26 1.32 7.45.05 8.87-4.78c2.05-6.96.97-13.8-.61-14.78z" fill="#4fc4f8"/><path d="M96.4 91.09c-1.08.13-2.42 1.67-2.63 4.3s1.45 3.96 3.13 3.29c1.58-.63 1.84-2.88 1.84-4.3s-.67-3.5-2.34-3.29z" fill="#aee6fd"/><path d="M63 90.26c-1.14-.32-3.26 1.44-3.63 4.29c-.29 2.2.56 3.53 2.27 3.66c2.38.18 3.13-2.75 3.07-4.54c-.04-1.02-.22-2.99-1.71-3.41z" fill="#aee6fd"/><path d="M42.45 109.79c-1.06-.08-2.84 1.7-2.84 4.47s1.44 3.97 3.14 3.6c1.7-.38 2.04-3.63 1.93-4.92c-.11-1.29-.66-3.03-2.23-3.15z" fill="#aee6fd"/><path d="M30.91 88.44c-1.43-.41-3.26 1.4-3.48 3.44c-.23 2.04.72 3.52 2.23 3.75c1.51.23 2.8-1.59 2.95-3.71c.16-2.12-.37-3.11-1.7-3.48z" fill="#aee6fd"/><path d="M76.4 110.97c-1.32-.11-3.21 1.84-3.16 4.79s1.58 3.45 2.59 3.51c1.45.09 2.46-1.62 2.59-4.3c.11-2.25-.4-3.87-2.02-4z" fill="#aee6fd"/>
        </svg>`
    }
    else if(desc == "şiddetli yağmur"){element.innerHTML = 
        `<svg viewBox="0 0 128 128" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet"><path d="M79.83 71.24L57 75.21s-7.6 19.36-8.07 20.67c-.47 1.31-.45 3.38 1.62 3.38c2.63 0 15.98-.07 15.98-.07s-3.24 15.63-3.43 17.03s1.31 2.63 2.63 1.22c1.31-1.41 19.51-24.79 20.3-25.93c1.41-2.04.05-3.92-1.55-4.01c-1.6-.09-12.32.14-12.32.14l7.67-16.4z" fill="#feca18"/><path d="M73.71 75.04s-5.09 11.26-5.28 11.9c-.56 1.9 1.9 2.67 2.6 1.13c.7-1.55 6.76-14.08 6.76-14.08l-4.08 1.05z" fill="#fdb900"/>
        <path d="M50.83 96.3c1.34-.04 13.1-.07 14.08-.14c1.83-.14 2.11 2.39 0 2.39c-2.19 0-13.73.04-14.43.07c-1.62.08-1.83-2.25.35-2.32z" fill="#fdb900"/><path d="M59.98 75.96s-6 15.06-6.34 16.19c-1.41 4.72 3.66 4.58 5 1.9c.66-1.33 7.11-14.99 7.39-17.46c.29-2.46-6.05-.63-6.05-.63z" fill="#ffe36a"/><path d="M62.52 91.16c-.86-.59-1.9-.07-2.53.92c-.63.99-1.55 2.6-.14 3.45c1.27.76 2.39-.77 2.89-1.48c.48-.7 1.11-1.97-.22-2.89z" fill="#ffe36a"/><path d="M72.09 94.4c-2.29-.49-3.03 1.41-3.52 3.66c-.49 2.25-2.33 9.53-2.67 11.33c-.49 2.53 1.83 2.89 2.82.56c.74-1.74 3.95-9.59 4.36-10.84c.63-1.89 1.33-4.22-.99-4.71z" fill="#ffe36a"/><path d="M107.35 50.2s1.29-34.78-27.45-39C53.01 7.26 48.23 32.6 48.23 32.6s-11.68-2.67-18.02 4.79s-6.48 13.23-6.48 13.23s-17.6-1.69-19.15 12.67s11.54 8.45 11.54 8.45l107.13-4.72s2.95-8.03-4.65-13.73c-4.49-3.37-11.25-3.09-11.25-3.09z" fill="#e4eaee"/><radialGradient id="IconifyId17ecdb2904d178eab6089" cx="65.427" cy="79.054" r="29.294" fx="52.312" fy="79.18" gradientTransform="matrix(.0288 -.9996 1.4975 .0432 -54.843 141.038)" gradientUnits="userSpaceOnUse"><stop offset=".193" stop-color="#ffe366"/><stop offset=".331" stop-color="#eddd82"/><stop offset=".571" stop-color="#d0d4ad"/><stop offset=".759" stop-color="#bfcfc7"/><stop offset=".87" stop-color="#b8cdd1"/></radialGradient><path d="M58.78 55.69c.84-.28 6.05 4.22 19.85 3.8s26.61-7.32 26.61-7.32s-.7 4.93-2.25 7.32s-4.22 5.21-4.22 5.21s7.18 1.69 13.66.84c6.48-.84 11.26-3.94 11.26-3.94s.84 3.24.28 6.34c-.72 3.97-4.22 6.9-7.18 7.32s-29.56 1.76-39.98 2.11c-8.45.29-56.63.68-61.52.14c-5.07-.56-8.87-2.82-10.28-7.18c-1.07-3.31-.56-5.35-.56-5.35s6.36 2.73 11.54 1.83c6.48-1.13 10-6.19 10-6.19s6.34 3.24 15.49 2.11c9.14-1.13 17.3-7.04 17.3-7.04z" fill="url(#IconifyId17ecdb2904d178eab6089)"/>
        </svg>`
    }
    else if(desc == "karlı"){element.innerHTML = 
        `<svg  x="0px" y="0px" viewBox="0 0 511.984 511.984" style="enable-background:new 0 0 511.984 511.984;" xml:space="preserve">
        <path style="fill:#CCD1D9;" d="M351.989,53.327c-46.123,0-87.685,19.53-116.871,50.748C219.463,86.06,196.4,74.67,170.651,74.67  c-47.124,0-85.325,38.202-85.325,85.325c0,0.719,0.016,1.422,0.031,2.125C36.655,171.995,0,215.041,0,266.664  c0,58.903,47.749,106.652,106.653,106.652h245.336c88.356,0,159.995-71.622,159.995-159.994  C511.984,124.965,440.346,53.327,351.989,53.327z"/>
        <path style="fill:#AAB2BC;" d="M453.954,90.029c22.922,27.686,36.688,63.217,36.688,101.965  c0,88.356-71.622,159.995-159.995,159.995H85.326c-24.016,0-46.171-7.938-63.998-21.328c19.452,25.906,50.436,42.655,85.325,42.655  h245.336c88.356,0,159.995-71.622,159.995-159.994C511.984,163.714,489.391,119.371,453.954,90.029z"/>
        <g>
            <path style="fill:#4A89DC;" d="M319.304,415.987c-1.813,0-3.641-0.453-5.313-1.422l-147.809-85.342   c-5.094-2.938-6.843-9.468-3.906-14.562c2.953-5.109,9.469-6.859,14.578-3.906l147.792,85.325   c5.109,2.953,6.844,9.469,3.906,14.578C326.584,414.081,322.99,415.987,319.304,415.987z"/>
            <path style="fill:#4A89DC;" d="M199.228,346.661c-4.719,0-9.031-3.141-10.297-7.906l-7.813-29.14   c-1.53-5.702,1.844-11.546,7.547-13.062c5.688-1.531,11.531,1.844,13.063,7.531l7.797,29.139   c1.531,5.703-1.844,11.547-7.531,13.063C201.072,346.536,200.135,346.661,199.228,346.661z"/>
            <path style="fill:#4A89DC;" d="M170.089,354.473c-4.719,0-9.031-3.156-10.296-7.922c-1.531-5.688,1.843-11.531,7.53-13.063   l29.14-7.797c5.703-1.531,11.547,1.844,13.063,7.531c1.531,5.703-1.844,11.547-7.531,13.063l-29.14,7.813   C171.932,354.348,170.995,354.473,170.089,354.473z"/>
            <path style="fill:#4A89DC;" d="M299.397,429.128c-4.703,0-9.016-3.141-10.281-7.906l-7.813-29.141   c-1.531-5.688,1.844-11.53,7.531-13.062c5.703-1.531,11.547,1.859,13.078,7.546l7.797,29.141   c1.531,5.688-1.844,11.531-7.531,13.063C301.241,429.018,300.319,429.128,299.397,429.128z"/>
            <path style="fill:#4A89DC;" d="M291.6,399.987c-4.719,0-9.016-3.141-10.297-7.906c-1.531-5.688,1.844-11.53,7.531-13.062   l29.156-7.813c5.687-1.516,11.53,1.859,13.062,7.547c1.516,5.687-1.859,11.53-7.547,13.062l-29.14,7.813   C293.444,399.878,292.507,399.987,291.6,399.987z"/>
            <path style="fill:#4A89DC;" d="M171.526,415.987c-3.688,0-7.266-1.906-9.25-5.328c-2.937-5.109-1.188-11.625,3.906-14.578   l147.809-85.325c5.094-2.953,11.624-1.203,14.562,3.906c2.938,5.094,1.203,11.624-3.906,14.562l-147.792,85.342   C175.167,415.534,173.339,415.987,171.526,415.987z"/>
            <path style="fill:#4A89DC;" d="M199.244,399.987c-0.922,0-1.844-0.109-2.781-0.359l-29.14-7.813   c-5.688-1.531-9.062-7.375-7.53-13.062c1.515-5.688,7.358-9.063,13.062-7.547l29.14,7.813c5.688,1.531,9.063,7.374,7.531,13.062   C208.26,396.846,203.947,399.987,199.244,399.987z"/>
            <path style="fill:#4A89DC;" d="M191.431,429.128c-0.922,0-1.844-0.109-2.766-0.359c-5.703-1.531-9.077-7.375-7.547-13.063   l7.813-29.141c1.516-5.687,7.375-9.077,13.063-7.546s9.063,7.374,7.531,13.062l-7.797,29.141   C200.447,425.987,196.135,429.128,191.431,429.128z"/>
            <path style="fill:#4A89DC;" d="M320.757,354.473c-0.922,0-1.844-0.125-2.766-0.375l-29.156-7.813   c-5.688-1.516-9.063-7.359-7.531-13.063c1.516-5.688,7.375-9.063,13.063-7.531l29.14,7.797c5.688,1.531,9.063,7.375,7.547,13.063   C329.771,351.317,325.459,354.473,320.757,354.473z"/>
            <path style="fill:#4A89DC;" d="M291.616,346.661c-0.922,0-1.844-0.125-2.781-0.375c-5.688-1.516-9.063-7.359-7.531-13.063   l7.813-29.139c1.516-5.688,7.375-9.063,13.063-7.531c5.688,1.516,9.063,7.359,7.531,13.062l-7.797,29.14   C300.632,343.52,296.319,346.661,291.616,346.661z"/>
        </g>
        <g>
            <path style="fill:#5D9CEC;" d="M245.414,458.657c-5.89,0-10.671-4.781-10.671-10.671V277.319c0-5.89,4.781-10.655,10.671-10.655   c5.891,0,10.672,4.766,10.672,10.655v170.667C256.086,453.876,251.305,458.657,245.414,458.657z"/>
            <path style="fill:#5D9CEC;" d="M245.414,319.99c-2.734,0-5.453-1.047-7.546-3.125c-4.156-4.172-4.156-10.921,0-15.077   l21.344-21.344c4.155-4.155,10.921-4.155,15.077,0c4.172,4.172,4.172,10.922,0,15.094l-21.328,21.327   C250.883,318.943,248.148,319.99,245.414,319.99z"/>
            <path style="fill:#5D9CEC;" d="M245.414,319.99c-2.734,0-5.453-1.047-7.546-3.125l-21.327-21.327   c-4.172-4.172-4.172-10.922,0-15.094c4.171-4.155,10.921-4.155,15.077,0l21.343,21.344c4.157,4.156,4.157,10.905,0,15.077   C250.883,318.943,248.148,319.99,245.414,319.99z"/>
            <path style="fill:#5D9CEC;" d="M224.087,447.986c-2.734,0-5.468-1.047-7.546-3.125c-4.172-4.171-4.172-10.921,0-15.077   l21.327-21.344c4.171-4.156,10.921-4.156,15.093,0c4.157,4.172,4.157,10.922,0,15.094l-21.343,21.327   C229.54,446.939,226.805,447.986,224.087,447.986z"/>
            <path style="fill:#5D9CEC;" d="M266.742,447.986c-2.719,0-5.453-1.047-7.53-3.125l-21.344-21.327   c-4.156-4.172-4.156-10.922,0-15.094c4.171-4.156,10.921-4.156,15.093,0l21.328,21.344c4.172,4.156,4.172,10.906,0,15.077   C272.211,446.939,269.476,447.986,266.742,447.986z"/>
        </g>
        </svg>`
    }
    else if(desc == "sisli"){element.innerHTML = 
        `<svg  class="mist none" style="fill: white !important;" x="0px" y="0px" viewBox="0 0 217.43 217.43" style="enable-background:new 0 0 217.43 217.43;" xml:space="preserve">
        <g>
            <path d="M144.797,47.095c0-4.142-3.358-7.5-7.5-7.5H7.5c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h129.797   C141.439,54.595,144.797,51.237,144.797,47.095z"/>
            <path d="M209.93,70.405H58.632c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H209.93c4.142,0,7.5-3.358,7.5-7.5   S214.072,70.405,209.93,70.405z"/>
            <path d="M174.53,116.214c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H22.446c-4.142,0-7.5,3.358-7.5,7.5   c0,4.142,3.358,7.5,7.5,7.5H174.53z"/>
            <path d="M199.441,132.024H47.619c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h151.822c4.142,0,7.5-3.358,7.5-7.5   S203.583,132.024,199.441,132.024z"/>
            <path d="M125.759,162.835H25.068c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h100.69c4.142,0,7.5-3.358,7.5-7.5   C133.259,166.193,129.901,162.835,125.759,162.835z"/>
        </g>
        </svg>`
    }   
}

deniedLoc = () =>{
    
    document.querySelector(".loading").style.display="none";
    document.querySelector(".recommended").style.display="inline-block";
    loadEffect();
}

getResponse = () =>{

    if(city != null){
        searchWeather(city);
    }
    else if(city == "")
    {
        deniedLoc();
    }
    else{
        getLocation()
    }

}
getResponse();
