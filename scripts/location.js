function ReverseGeocoding(location, callback) {
    const req_obj = new XMLHttpRequest();
    req_obj.open(
        "GET",
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location[0]}&longitude=${location[1]}`,
    );

    req_obj.onreadystatechange = function () {
        if (req_obj.readyState === XMLHttpRequest.DONE) {
            if (req_obj.status === 200) {
                // Invoke the callback with the response text
                callback(null, req_obj.responseText);
            } else {
                console.log("Request was unsuccessful!!!");
                // Invoke the callback with an error
                callback(new Error("Request was unsuccessful!!!"), null);
            }
        }
    };

    req_obj.send();
    const buttonDisplay = document.querySelector('.former-btn');
    const buttonTwoDisplay = document.querySelector('#next-location');
    buttonDisplay.classList.add('not-allow');
    buttonTwoDisplay.classList.remove('not-allow')
    const divAfterText = document.querySelector("#below-text");
    const htmlContent = `
        <p></p>
    `;
    divAfterText.innerHTML = htmlContent;
}

function geoFindMe() {
    function success(position) {
        const location = [position.coords.latitude, position.coords.longitude];
        console.log(location[0], location[1]);

        // Call ReverseGeocoding with a callback
        ReverseGeocoding(location, function (error, response) {
            if (error) {
                console.error(error);
            } else {
                localStorage.setItem("response", response);
            }
        });
    }

    function error() {
        console.log("Unable to retrieve your location");
    }

    if (!navigator.geolocation) {
        console.log("Geolocation is not supported by your browser");
    } else {
        console.log("Locating…");
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

const loc_button = document.querySelector("#share-location");
loc_button.addEventListener("click", geoFindMe);
