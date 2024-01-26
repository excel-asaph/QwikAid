const serviceBtnDiv = document.querySelector('.serv-btn1');
serviceBtnDiv.addEventListener('click', checkListener);
function checkListener() {
    const firstDiv = document.querySelector('.service-tabs');
    console.log(firstDiv);
    const secondDiv = document.querySelector('.action-tabs');
    console.log(secondDiv);
    firstDiv.classList.remove('current');
    firstDiv.classList.add('prev');
    secondDiv.classList.remove('prev');
    secondDiv.classList.add('current');
    secondDiv.classList.add('second');
}




