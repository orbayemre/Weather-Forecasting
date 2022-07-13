# Weather Forecasting
Bu proje hem konum bilgisini kullanarak hem de arama ile istenilen şehrin hava durumunu öğrenebilmemizi sağlar. Konum bilgisine göre hava durumunu gösterebilmesi için kullanıcının konum bilgisine erişme isteğine izin vermesi gerekmektedir.

Bu proje **MVVM** mimarisini kullanılarak **html**,**css** ve **javascript** ile oluşturulmuştur. Css kısmındasayfanın geçişli yüklenebilmesi için **animate.css** kütüphanesi kullanılmıştır. Javascript tarafında ise **jQuery**, svg iconlarının hareketli yüklenmesi için **jquery drawsvg** ve şehirlerin zamanlarını kullanıcıya gösterebilmek için **moment.js** kütüphaneleri kullanılmıştır.Bunların yanında tüm hava durumu bilgilerini çekildiği **Openweathermap API** kullanılmıştır. Lokasyon bilgisinin kullanılmasında ise **OpenCage Geocoding API** kullanılmıştır.

Projede kullanılan API’lerin her biri API key ile kullanılmaktadır. Bu yüzden kodun entegrasyonunda geliştirici bu key’lerin bulunduğu kısımlara kendi kişisel key’lerini yazmalıdır. Bu key’ler [Openweathermap](https://openweathermap.org/) ile [OpenCage](https://opencagedata.com/) sitelerine kayıt olunarak alınabilmektedir
#
### [view/script.js](https://github.com/orbayemre/Weather-Forecasting/blob/main/view/script.js)
Sayfanın dinamikliğini sağlar.  
* **autocomplete(inp,arr)**   
  Arama yaparken otomatik tamamlama kısmını oluştur ve kontrol eder. Parametre olarak bir html input etiketi ve otomatik tamamlanacak verileri içerien bir dizi ister.
* **loadEffect()**  
  Sayfanın geçişli yüklenmesini sağlar.  
* **sendCityParam()**   
  URL’e parametre ekleyerek yönlendirmeyi sağlar.  
* **getCityParam()**  
  URL’deki parametreyi tutar ve ve değerini geri döndürür.  
* **homeHref()**  
  Anasayfaya yönlendirmeyi sağlar.  
#
### [model/homeAPI.js](https://github.com/orbayemre/Weather-Forecasting/blob/main/model/homeAPI.js)
home.html dosyasına eklenecek verileri API den çeker.
* **headerWeat(lat,lon)**  
  Aldığı eylem ve boylam parametrelerini kulanarak API’ye fetch ile istek atar.  
### [model/searchAPI.js ](https://github.com/orbayemre/Weather-Forecasting/blob/main/model/searchAPI.js)
search.html dosyasına eklenecek verileri API den çeker.  
* **searchWeather(city)**  
  Aldığı şehir parametresini kullanarak API’ye fetch ile istek atar.  
#
### [viewModel/createElement.js](https://github.com/orbayemre/Weather-Forecasting/blob/main/viewModel/createElement.js)
API’lerden gelen sonuçları göre elementler oluşturup sayfanın belirli yerlerine veri ekler.  
* **createLocElement(response)**  
  headerWeat fonksiyonundan parametre olarak aldığı sonuçları gerekli düzenleme ve dönüştürme işlemlerini yaptıkdan sonra sayfaya ekler.  
* **createParElement(response)** 
  searchWeater fonksiyonundan parametre olarak aldığı sonuçları gerekli düzenleme ve dönüştürme işlemlerini yaptıkdan sonra sayfaya ekler.  
* **takeCity(city)**  
  headerWeat fonksiyonundan konumun hangi şehir olduğunu parametre olarak alır ve sayfaya ekler.  
* **descDesg(desc)**  
  Aldığı desc parametresine göre home.html ve search.html’deki iconların ve arkaplanın belirlenmesini sağlar.  
* **daysDesg(element,desc)**  
  Aldığı desc parametresine göre element parametresinin içindeki iconların ve arkaplanın belirlenmesini sağlar.  
* **deniedLoc()**   
  Kullanıcı konum bilgisinin kullanılmasına izin vermediğinde çalışır ve sayfa önerilen şehirleri ekler.   
* **getResponse()**  
  URL’deki city parametresinin verisine göre hangi fonksiyonların çağırılacağını belirler.  
#
### [viewModel/getLocation.js](https://github.com/orbayemre/Weather-Forecasting/blob/main/viewModel/getLocation.js)
* **getLocation()**  
  Kullanıcının konum ve zaman bilgisini alan fonksiyondur  
