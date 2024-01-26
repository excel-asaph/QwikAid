// wrapping code inside DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // switchdiv1.js
    const serviceBtnDiv = document.querySelectorAll('.serv-btn');
    const serviceBtnDiv1 = document.querySelectorAll('.serv-btn1');
    const serviceBtnDiv2 = document.querySelectorAll('.serv-btn2');
    const serviceBtnDiv3 = document.querySelectorAll('.serv-btn3');
    const backButton = document.querySelectorAll('.return');

    // Call-btn
    const callButton = document.querySelector('.call-btn');
    const callButton1 = document.querySelector('.call-btn1');
    const callButton2 = document.querySelector('.call-btn2');
    const callButton3 = document.querySelector('.call-btn3');
    
    callButton.addEventListener('click', function() {
        const phoneNumber = "112"; // Police Number
        const telUri = `tel:${phoneNumber}`;
        
        window.open(telUri);
    });

    callButton1.addEventListener('click', function() {
        const phoneNumber = "113"; // Ambulance
        const telUri = `tel:${phoneNumber}`;
        
        window.open(telUri);
    });

    callButton2.addEventListener('click', function() {
        const phoneNumber = "3512"; // GBV
        const telUri = `tel:${phoneNumber}`;
        
        window.open(telUri);
    });

    callButton3.addEventListener('click', function() {
        const phoneNumber = "170"; // Natural Disaster
        const telUri = `tel:${phoneNumber}`;
        
        window.open(telUri);
    });




    // thefts
    const theftIdCall = document.querySelectorAll('.theft-id-call');
    const theftIdText = document.querySelectorAll('.theft-id-text');
    const theftIdAudio = document.querySelectorAll('.theft-id-audio');
    const theftIdVideo = document.querySelectorAll('.theft-id-video');

    // healths
    const healthIdCall = document.querySelectorAll('.health-id-call');
    const healthIdText = document.querySelectorAll('.health-id-text');
    const healthIdAudio = document.querySelectorAll('.health-id-audio');
    const healthIdVideo = document.querySelectorAll('.health-id-video');

    // gbv
    const gbvIdCall = document.querySelectorAll('.gbv-id-call');
    const gbvIdText = document.querySelectorAll('.gbv-id-text');
    const gbvIdAudio = document.querySelectorAll('.gbv-id-audio');
    const gbvIdVideo = document.querySelectorAll('.gbv-id-video');

    // natural
    const naturalIdCall = document.querySelectorAll('.natural-id-call');
    const naturalIdText = document.querySelectorAll('.natural-id-text');
    const naturalIdAudio = document.querySelectorAll('.natural-id-audio');
    const naturalIdVideo = document.querySelectorAll('.natural-id-video');

    naturalIdCall.forEach(function(element) {
        element.addEventListener('click', naturalListener);
    });
    naturalIdText.forEach(function(element) {
        element.addEventListener('click', naturalListener1);
    });
    naturalIdAudio.forEach(function(element) {
        element.addEventListener('click', naturalListener2);
    });
    naturalIdVideo.forEach(function(element) {
        element.addEventListener('click', naturalListener3);
    });

    gbvIdCall.forEach(function(element) {
        element.addEventListener('click', gbvListener);
    });
    gbvIdText.forEach(function(element) {
        element.addEventListener('click', gbvListener1);
    });
    gbvIdAudio.forEach(function(element) {
        element.addEventListener('click', gbvListener2);
    });
    gbvIdVideo.forEach(function(element) {
        element.addEventListener('click', gbvListener3);
    });

    healthIdCall.forEach(function(element) {
        element.addEventListener('click', healthListener);
    });
    healthIdText.forEach(function(element) {
        element.addEventListener('click', healthListener1);
    });
    healthIdAudio.forEach(function(element) {
        element.addEventListener('click', healthListener2);
    });
    healthIdVideo.forEach(function(element) {
        element.addEventListener('click', healthListener3);
    });

    theftIdCall.forEach(function(element) {
        element.addEventListener('click', theftListener);
    });
    theftIdText.forEach(function(element) {
        element.addEventListener('click', theftListener1);
    });
    theftIdAudio.forEach(function(element) {
        element.addEventListener('click', theftListener2);
    });
    theftIdVideo.forEach(function(element) {
        element.addEventListener('click', theftListener3);
    });

    serviceBtnDiv.forEach(function(element) {
        element.addEventListener('click', checkListener);
    });
    serviceBtnDiv1.forEach(function(element) {
        element.addEventListener('click', checkListener1);
    });
    serviceBtnDiv2.forEach(function(element) {
        element.addEventListener('click', checkListener2);
    });
    serviceBtnDiv3.forEach(function(element) {
        element.addEventListener('click', checkListener3);
    });
    backButton.forEach(function(element) {
        element.addEventListener('click', goback);
    });

    // translatebutton.js
    function hideTranslator() {
        const getTranslator = document.querySelector('#translate');
        const getLanguageText = document.querySelector('#cleartext');
        const getLanguageText2 = document.querySelector('#cleartext2');
        const translateButton = document.querySelector('.button-services');
        const backButton = document.querySelector('.return');
        console.log(getTranslator);
        const firstDiv = document.querySelector('.service-tabs');
        console.log(firstDiv);
        firstDiv.classList.add('first');
        firstDiv.classList.remove('prev');
        firstDiv.classList.add('current');
        backButton.classList.remove('prev');
        backButton.classList.add('current');
        getTranslator.classList.add('hide-translator');
        getLanguageText.classList.add('hide-translator');
        getLanguageText2.classList.add('hide-translator');
        translateButton.classList.add('hide-translator');
    }

    const translateButton = document.querySelector('.button-services');
    translateButton.addEventListener('click', hideTranslator);
});

// function for switchdiv1.js
function checkListener() {
    const firstDiv = document.querySelector('.service-tabs');
    console.log(firstDiv);
    const secondDiv = document.querySelector('.theft-tabs');
    console.log(secondDiv);
    firstDiv.classList.remove('current');
    firstDiv.classList.add('prev');
    secondDiv.classList.remove('prev');
    secondDiv.classList.add('current');
    secondDiv.classList.add('second');
}

// CheckListener1
function checkListener1() {
    const firstDiv = document.querySelector('.service-tabs');
    console.log(firstDiv);
    const secondDiv = document.querySelector('.health-tabs');
    console.log(secondDiv);
    firstDiv.classList.remove('current');
    firstDiv.classList.add('prev');
    secondDiv.classList.remove('prev');
    secondDiv.classList.add('current');
    secondDiv.classList.add('second');
}

// CheckListener2
function checkListener2() {
    const firstDiv = document.querySelector('.service-tabs');
    console.log(firstDiv);
    const secondDiv = document.querySelector('.gbv-tabs');
    console.log(secondDiv);
    firstDiv.classList.remove('current');
    firstDiv.classList.add('prev');
    secondDiv.classList.remove('prev');
    secondDiv.classList.add('current');
    secondDiv.classList.add('second');
}

// CheckListener3
function checkListener3() {
    const firstDiv = document.querySelector('.service-tabs');
    console.log(firstDiv);
    const secondDiv = document.querySelector('.natural-tabs');
    console.log(secondDiv);
    firstDiv.classList.remove('current');
    firstDiv.classList.add('prev');
    secondDiv.classList.remove('prev');
    secondDiv.classList.add('current');
    secondDiv.classList.add('second');
}

// Goback
function goback() {
    const theftDiv = document.querySelector('#theft-id');
    const healthDiv = document.querySelector('#health-id');
    const gbvDiv = document.querySelector('#gbv-id');
    const naturalDiv = document.querySelector('#natural-id');
    const serviceDiv = document.querySelector('.service-tabs');


    //thefts
    const theftCall = document.querySelector('#theft-call');
    const theftText = document.querySelector('#theft-text');
    const theftAudio = document.querySelector('#theft-audio');
    const theftVideo = document.querySelector('#theft-video');

    //healths
    const healthCall = document.querySelector('#health-call');
    const healthText = document.querySelector('#health-text');
    const healthAudio = document.querySelector('#health-audio');
    const healthVideo = document.querySelector('#health-video');

    //gbv
    const gbvCall = document.querySelector('#gbv-call');
    const gbvText = document.querySelector('#gbv-text');
    const gbvAudio = document.querySelector('#gbv-audio');
    const gbvVideo = document.querySelector('#gbv-video');

    //natural
    const naturalCall = document.querySelector('#natural-call');
    const naturalText = document.querySelector('#natural-text');
    const naturalAudio = document.querySelector('#natural-audio');
    const naturalVideo = document.querySelector('#natural-video');


    if (theftDiv.classList.contains('second') && theftDiv.classList.contains('current')) {
        const firstDiv = document.querySelector('.service-tabs');
        theftDiv.classList.remove('current');
        theftDiv.classList.add('prev');
        firstDiv.classList.remove('prev');
        firstDiv.classList.add('current');
    } else if (healthDiv.classList.contains('second') && healthDiv.classList.contains('current')) {
        const firstDiv = document.querySelector('.service-tabs');
        healthDiv.classList.remove('current');
        healthDiv.classList.add('prev');
        firstDiv.classList.remove('prev');
        firstDiv.classList.add('current');
    } else if (gbvDiv.classList.contains('second') && gbvDiv.classList.contains('current')) {
        const firstDiv = document.querySelector('.service-tabs');
        gbvDiv.classList.remove('current');
        gbvDiv.classList.add('prev');
        firstDiv.classList.remove('prev');
        firstDiv.classList.add('current');
    } else if (naturalDiv.classList.contains('second') && naturalDiv.classList.contains('current')) {
        const firstDiv = document.querySelector('.service-tabs');
        naturalDiv.classList.remove('current');
        naturalDiv.classList.add('prev');
        firstDiv.classList.remove('prev');
        firstDiv.classList.add('current');
    } else if (theftCall.classList.contains('current') && theftCall.classList.contains('third')) {
        const theftId = document.querySelector('#theft-id');
        theftCall.classList.remove('current');
        theftCall.classList.add('prev');
        theftId.classList.remove('prev');
        theftId.classList.add('current');
    } else if (theftText.classList.contains('current') && theftText.classList.contains('third')) {
        const theftId = document.querySelector('#theft-id');
        theftText.classList.remove('current');
        theftText.classList.add('prev');
        theftId.classList.remove('prev');
        theftId.classList.add('current');
    } else if (theftAudio.classList.contains('current') && theftAudio.classList.contains('third')) {
        const theftId = document.querySelector('#theft-id');
        theftAudio.classList.remove('current');
        theftAudio.classList.add('prev');
        theftId.classList.remove('prev');
        theftId.classList.add('current');
    } else if (theftVideo.classList.contains('current') && theftVideo.classList.contains('third')) {
        const theftId = document.querySelector('#theft-id');
        theftVideo.classList.remove('current');
        theftVideo.classList.add('prev');
        theftId.classList.remove('prev');
        theftId.classList.add('current');
    } else if (healthCall.classList.contains('current') && healthCall.classList.contains('third')) {
        const healthId = document.querySelector('#health-id');
        healthCall.classList.remove('current');
        healthCall.classList.add('prev');
        healthId.classList.remove('prev');
        healthId.classList.add('current');
    } else if (healthText.classList.contains('current') && healthText.classList.contains('third')) {
        const healthId = document.querySelector('#health-id');
        healthText.classList.remove('current');
        healthText.classList.add('prev');
        healthId.classList.remove('prev');
        healthId.classList.add('current');
    } else if (healthAudio.classList.contains('current') && healthAudio.classList.contains('third')) {
        const healthId = document.querySelector('#health-id');
        healthAudio.classList.remove('current');
        healthAudio.classList.add('prev');
        healthId.classList.remove('prev');
        healthId.classList.add('current');
    } else if (healthVideo.classList.contains('current') && healthVideo.classList.contains('third')) {
        const healthId = document.querySelector('#health-id');
        healthVideo.classList.remove('current');
        healthVideo.classList.add('prev');
        healthId.classList.remove('prev');
        healthId.classList.add('current');
    } else if (gbvCall.classList.contains('current') && gbvCall.classList.contains('third')) {
        const gbvId = document.querySelector('#gbv-id');
        gbvCall.classList.remove('current');
        gbvCall.classList.add('prev');
        gbvId.classList.remove('prev');
        gbvId.classList.add('current');
    } else if (gbvText.classList.contains('current') && gbvText.classList.contains('third')) {
        const gbvId = document.querySelector('#gbv-id');
        gbvText.classList.remove('current');
        gbvText.classList.add('prev');
        gbvId.classList.remove('prev');
        gbvId.classList.add('current');
    } else if (gbvAudio.classList.contains('current') && gbvAudio.classList.contains('third')) {
        const gbvId = document.querySelector('#gbv-id');
        gbvAudio.classList.remove('current');
        gbvAudio.classList.add('prev');
        gbvId.classList.remove('prev');
        gbvId.classList.add('current');
    } else if (gbvVideo.classList.contains('current') && gbvVideo.classList.contains('third')) {
        const gbvId = document.querySelector('#gbv-id');
        gbvVideo.classList.remove('current');
        gbvVideo.classList.add('prev');
        gbvId.classList.remove('prev');
        gbvId.classList.add('current');
    } else if (naturalCall.classList.contains('current') && naturalCall.classList.contains('third')) {
        const naturalId = document.querySelector('#natural-id');
        naturalCall.classList.remove('current');
        naturalCall.classList.add('prev');
        naturalId.classList.remove('prev');
        naturalId.classList.add('current');
    } else if (naturalText.classList.contains('current') && naturalText.classList.contains('third')) {
        const naturalId = document.querySelector('#natural-id');
        naturalText.classList.remove('current');
        naturalText.classList.add('prev');
        naturalId.classList.remove('prev');
        naturalId.classList.add('current');
    } else if (naturalAudio.classList.contains('current') && naturalAudio.classList.contains('third')) {
        const naturalId = document.querySelector('#natural-id');
        naturalAudio.classList.remove('current');
        naturalAudio.classList.add('prev');
        naturalId.classList.remove('prev');
        naturalId.classList.add('current');
    } else if (naturalVideo.classList.contains('current') && naturalVideo.classList.contains('third')) {
        const naturalId = document.querySelector('#natural-id');
        naturalVideo.classList.remove('current');
        naturalVideo.classList.add('prev');
        naturalId.classList.remove('prev');
        naturalId.classList.add('current');
    } else if (serviceDiv.classList.contains('first') && serviceDiv.classList.contains('current')) {
        const getTranslator = document.querySelector('#translate');
        const getLanguageText = document.querySelector('#cleartext');
        const getLanguageText2 = document.querySelector('#cleartext2');
        const translateButton = document.querySelector('.button-services');
        const returnButton = document.querySelector('.return');
        serviceDiv.classList.remove('current');
        serviceDiv.classList.add('prev');
        getTranslator.classList.remove('hide-translator');
        getLanguageText.classList.remove('hide-translator');
        getLanguageText2.classList.remove('hide-translator');
        translateButton.classList.remove('hide-translator');
        returnButton.classList.remove('current');
        returnButton.classList.add('prev');
    }
}

// TheftListener
function theftListener() {
    const theftId = document.querySelector('#theft-id');
    const theftCall = document.querySelector('#theft-call');
    theftId.classList.remove('current');
    theftId.classList.add('prev');
    theftCall.classList.remove('prev');
    theftCall.classList.add('current');
    theftCall.classList.add('third');
}

function theftListener1() {
    const theftId = document.querySelector('#theft-id');
    const theftText = document.querySelector('#theft-text');
    theftId.classList.remove('current');
    theftId.classList.add('prev');
    theftText.classList.remove('prev');
    theftText.classList.add('current');
    theftText.classList.add('third');
}

function theftListener2() {
    const theftId = document.querySelector('#theft-id');
    const theftAudio = document.querySelector('#theft-audio');
    theftId.classList.remove('current');
    theftId.classList.add('prev');
    theftAudio.classList.remove('prev');
    theftAudio.classList.add('current');
    theftAudio.classList.add('third');
}

function theftListener3() {
    const theftId = document.querySelector('#theft-id');
    const theftVideo = document.querySelector('#theft-video');
    theftId.classList.remove('current');
    theftId.classList.add('prev');
    theftVideo.classList.remove('prev');
    theftVideo.classList.add('current');
    theftVideo.classList.add('third');
}

// HealthListener
function healthListener() {
    const healthId = document.querySelector('#health-id');
    const healthCall = document.querySelector('#health-call');
    healthId.classList.remove('current');
    healthId.classList.add('prev');
    healthCall.classList.remove('prev');
    healthCall.classList.add('current');
    healthCall.classList.add('third');
}

function healthListener1() {
    const healthId = document.querySelector('#health-id');
    const healthText = document.querySelector('#health-text');
    healthId.classList.remove('current');
    healthId.classList.add('prev');
    healthText.classList.remove('prev');
    healthText.classList.add('current');
    healthText.classList.add('third');
}

function healthListener2() {
    const healthId = document.querySelector('#health-id');
    const healthAudio = document.querySelector('#health-audio');
    healthId.classList.remove('current');
    healthId.classList.add('prev');
    healthAudio.classList.remove('prev');
    healthAudio.classList.add('current');
    healthAudio.classList.add('third');
}

function healthListener3() {
    const healthId = document.querySelector('#health-id');
    const healthVideo = document.querySelector('#health-video');
    healthId.classList.remove('current');
    healthId.classList.add('prev');
    healthVideo.classList.remove('prev');
    healthVideo.classList.add('current');
    healthVideo.classList.add('third');
}

// GBVListener
function gbvListener() {
    const gbvId = document.querySelector('#gbv-id');
    const gbvCall = document.querySelector('#gbv-call');
    gbvId.classList.remove('current');
    gbvId.classList.add('prev');
    gbvCall.classList.remove('prev');
    gbvCall.classList.add('current');
    gbvCall.classList.add('third');
}

function gbvListener1() {
    const gbvId = document.querySelector('#gbv-id');
    const gbvText = document.querySelector('#gbv-text');
    gbvId.classList.remove('current');
    gbvId.classList.add('prev');
    gbvText.classList.remove('prev');
    gbvText.classList.add('current');
    gbvText.classList.add('third');
}

function gbvListener2() {
    const gbvId = document.querySelector('#gbv-id');
    const gbvAudio = document.querySelector('#gbv-audio');
    gbvId.classList.remove('current');
    gbvId.classList.add('prev');
    gbvAudio.classList.remove('prev');
    gbvAudio.classList.add('current');
    gbvAudio.classList.add('third');
}

function gbvListener3() {
    const gbvId = document.querySelector('#gbv-id');
    const gbvVideo = document.querySelector('#gbv-video');
    gbvId.classList.remove('current');
    gbvId.classList.add('prev');
    gbvVideo.classList.remove('prev');
    gbvVideo.classList.add('current');
    gbvVideo.classList.add('third');
}

// NaturalListener
function naturalListener() {
    const naturalId = document.querySelector('#natural-id');
    const naturalCall = document.querySelector('#natural-call');
    naturalId.classList.remove('current');
    naturalId.classList.add('prev');
    naturalCall.classList.remove('prev');
    naturalCall.classList.add('current');
    naturalCall.classList.add('third');
}

function naturalListener1() {
    const naturalId = document.querySelector('#natural-id');
    const naturalText = document.querySelector('#natural-text');
    naturalId.classList.remove('current');
    naturalId.classList.add('prev');
    naturalText.classList.remove('prev');
    naturalText.classList.add('current');
    naturalText.classList.add('third');
}

function naturalListener2() {
    const naturalId = document.querySelector('#natural-id');
    const naturalAudio = document.querySelector('#natural-audio');
    naturalId.classList.remove('current');
    naturalId.classList.add('prev');
    naturalAudio.classList.remove('prev');
    naturalAudio.classList.add('current');
    naturalAudio.classList.add('third');
}

function naturalListener3() {
    const naturalId = document.querySelector('#natural-id');
    const naturalVideo = document.querySelector('#natural-video');
    naturalId.classList.remove('current');
    naturalId.classList.add('prev');
    naturalVideo.classList.remove('prev');
    naturalVideo.classList.add('current');
    naturalVideo.classList.add('third');
}