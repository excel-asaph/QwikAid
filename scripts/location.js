function displayGeolocation(country, city, district, countrycode)
{
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            localStorage.setItem("languages", this.responseText)
        }
    });

    xhr.open('GET', 'https://list-of-all-countries-and-languages-with-their-codes.p.rapidapi.com/languages');
    xhr.setRequestHeader('X-RapidAPI-Key', '11afcd18e2msh70d16f51cfb8189p1e4487jsnb40b06717259');
    xhr.setRequestHeader('X-RapidAPI-Host', 'list-of-all-countries-and-languages-with-their-codes.p.rapidapi.com');

    xhr.send(data);

    // pull language using the country code from an array of objects
    const stringData = localStorage.getItem("languages");
    const objectData= JSON.parse(stringData);
    let language = "";
    for (let i = 0; i < objectData.length; i++)
    {
        country_lang = objectData[i];
        if (countrycode.toLowerCase() != country_lang.code)
        {
            continue
        }
        language = country_lang.name
    }
    // now get translation for the html content you want to display
    let htmlcontent = `
        <div class='main-box'>
            <p class='pstyle'>You stay at ${district} district, ${city} city, ${country}.</p>
            <p>Your language detected  is ${language}.</p>
            <p class='small'>Choose other options below:</p> 
        </div>
    `;
    localStorage.setItem("html-content", htmlcontent);
    window.location.href = './translate.html'
}

function ReverseGeocoding(lat, long) {
    const req_obj = new XMLHttpRequest();
    req_obj.open(
      "GET",
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}`
    );
  
    req_obj.onreadystatechange = function () {
      if (req_obj.readyState === XMLHttpRequest.DONE) {
        if (req_obj.status === 200) {
            localStorage.setItem("locationdata", req_obj.responseText);
        } else {
            console.log("Request was unsuccessful!!!");
        }
      }
    };
  
    req_obj.send();
  }
  
function geoFindMe() {
    function success(position)
    {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        ReverseGeocoding(latitude, longitude);
        let stringData = localStorage.getItem("locationdata");
        let objectData = JSON.parse(stringData);
        const getCountry = objectData.localityInfo.administrative[0].name;
        const getCity = objectData.localityInfo.administrative[1].name;
        const getDistrict = objectData.localityInfo.administrative[3].name;
        const getCountryCode = objectData.localityInfo.administrative[0].isoCode;
        displayGeolocation(getCountry, getCity, getDistrict, getCountryCode);
    }

    function error()
    {
        console.log("Unable to retrieve location");
    }

    const options = {
        enableHighAccuracy: true,
      };
      
    if (!navigator.geolocation)
    {
        console.log("Geolocation is not supported by the browser");
    } else {
        navigator.geolocation.watchPosition(success, error, options)
    }
}
const locate = document.querySelector("#share-location");
locate.addEventListener("click", geoFindMe);