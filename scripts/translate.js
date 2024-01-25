document.addEventListener('DOMContentLoaded', function () {
    const getBody = document.querySelector("body");
    const objectData = JSON.parse(localStorage.getItem("response"));
    const district = objectData.locality;
    const city = objectData.city;
    const country = objectData.countryName;
    html_content = `
        <p class='para'>You are in ${district} district, ${city} city, ${country}</p>
        <p class='para'>Click here to select preferred langauge</p>
    `
    html_content_2 = `
        <button class='button-services' type='submit'>Services</button>
    `
    getBody.innerHTML = html_content + getBody.innerHTML + html_content_2;
})