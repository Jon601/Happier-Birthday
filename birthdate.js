function birthday() {
    month = parseInt(document.getElementById("month").value);
    if (isNaN(month)) month = 1;
    day = parseInt(document.getElementById("day").value);
    if (isNaN(day)) day = 1;
    chrome.storage.sync.set({
        'birthmonth': month,
        'birthdate' : day
    });
    chrome.action.setBadgeBackgroundColor({
        color: [0, 255, 0, 255]
    });
    chrome.action.setBadgeText({
        text: 'On'
    });
    document.getElementById("month").value = month;
    document.getElementById("day").value = day;
}

function stop() {
     started = 0;
     chrome.action.setBadgeBackgroundColor({
         color: [100, 100, 100, 255]
     });
     chrome.action.setBadgeText({
        text: 'Off'
     });
    
    chrome.storage.local.set({
        'birthmonth': 0,
        'birthdate': 0
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('set')
        .addEventListener('click', birthday);
    document.getElementById('cancel')
        .addEventListener('click', stop);
});
