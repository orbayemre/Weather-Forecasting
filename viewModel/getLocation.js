getLocation=()=>{
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } 
    else {
       if(confirm("Tarayıcınız konum bilgisini desteklemiyor. Önerilenler sayfasına yönlendiriliyorsunuz.")){deniedLoc();}
    }
    
    function showPosition(position){
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        localTime = () =>{
            setInterval(() => {
                
                var now = new Date();
                var hours = now.getHours();
                var minutes = now.getMinutes();
                var seconds = now.getSeconds();
                var day = now.getDay()
        
                var weekday=new Array(7);
                weekday[0]="Pazar";
                weekday[1]="Pazartesi";
                weekday[2]="Salı";
                weekday[3]="Çarşamba";
                weekday[4]="Perşembe";
                weekday[5]="Cuma";
                weekday[6]="Cumartesi";
                day = weekday[day];
        
                if(hours < 10){hours = "0"+hours}
                if(minutes < 10){minutes = "0"+minutes}
                if(seconds < 10){seconds = "0"+seconds}
        
                const hourElmnt = document.querySelector(".weather .basic .rows:nth-child(1) .time .hour");
                const minElmnt = document.querySelector(".weather .basic .rows:nth-child(1) .time .minute");
                const secElmnt = document.querySelector(".weather .basic .rows:nth-child(1) .time .second");
                const dayElmnt = document.querySelector(".weather .basic .rows:nth-child(1) .time .day");
                hourElmnt.innerHTML= hours;
                minElmnt.innerHTML= minutes;
                secElmnt.innerHTML= seconds;
                dayElmnt.innerHTML= day;
        
            });
        } 
        localTime();
        headerWeat(lat,lon);
    }
    function showError(error){
        deniedLoc();
    }
}