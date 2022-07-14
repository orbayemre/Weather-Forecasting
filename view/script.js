$(document).ready(function(){

    var svg = $(".searchBtn svg").drawsvg();
    setTimeout(() => {
        svg.drawsvg('animate');   
    },200);
    setInterval(() => {
        svg.drawsvg('animate');
    }, 5000);
    
    $(".days .carousel .zero").hover(()=>{ $(".days .carousel .zero .body").slideToggle(500);});
    $(".days .carousel .one").hover(()=>{ $(".days .carousel .one .body").slideToggle(500);});
    $(".days .carousel .two").hover(()=>{ $(".days .carousel .two .body").slideToggle(500);});
    $(".days .carousel .three").hover(()=>{ $(".days .carousel .three .body").slideToggle(500);});
    $(".days .carousel .four").hover(()=>{ $(".days .carousel .four .body").slideToggle(500);});
    $(".days .carousel .five").hover(()=>{ $(".days .carousel .five .body").slideToggle(500);});
    $(".days .carousel .six").hover(()=>{ $(".days .carousel .six .body").slideToggle(500);});


    
});

var cities= ["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"];
function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i,j, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    b.addEventListener("click", function(e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) { 
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            } 
        }
    });
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
        }
    }
  }
  document.addEventListener("click", function (e) {
        closeAllLists(e.target);
  });
}
autocomplete(document.getElementById("srch"), cities);

var loaded = false;
loadEffect = () =>{
    wow = new WOW({
          animateClass: 'animated',
          offset:       100,
          callback:     function(box){console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")}
    });
    wow.init();
}

const loading = document.querySelector(".loading");
const weather = document.querySelector(".weather");
const days = document.querySelector(".days");
weather.style.display="none";
days.style.display="none";

setInterval(() => {
    if(loaded == true){
        loading.style.display="none";
        weather.style.display="inline-block";
        days.style.display="inline-block";
        loadEffect();
        loaded=false;
    }
});

sendCityParam = () =>{
    const srchBtn = document.querySelector(".searchBtn");
    const srchInp = document.querySelector(".searchComp input");
    
    srchBtn.addEventListener("click",()=>{
        location.href = ".../search.html?city="+srchInp.value;
    });
    
    srchInp.addEventListener("keydown", function(e) {
    
        if(e.keyCode == 13){
            location.href = ".../search.html?city="+srchInp.value;
        }
    });
}
sendCityParam();

getCityParam = () =>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const city = urlParams.get('city')
    return city;
}

homeHref = () =>{
    location.href = ".../index.html";
}
