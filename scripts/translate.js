document.addEventListener('DOMContentLoaded', function () {
    const getBody = document.querySelector("body");

    const htmlcontent = localStorage.getItem("html-content");
    getBody.innerHTML = htmlcontent + getBody.innerHTML;
})