document.addEventListener('DOMContentLoaded', function () {
    const getDiv = document.querySelector('#translate-main');
    const objectData = JSON.parse(localStorage.getItem("response"));
    const district = objectData.locality;
    const city = objectData.city;
    const country = objectData.countryName;
    html_content = `
        <div>
            <p class='para'>You are in ${district} district, ${city} city, ${country}</p>
        </div>
        <div id='cleartext'>
            <p class='para'>Select your langauge below:</p>        
        </div>
    `;
    getDiv.innerHTML = html_content + getDiv.innerHTML;
})