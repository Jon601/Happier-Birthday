chrome.action.setBadgeBackgroundColor({
    color: [100, 100, 100, 255]
});
chrome.action.setBadgeText({
    text: 'Off'
});

chrome.runtime.onInstalled.addListener((reason) => {
    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
      chrome.tabs.create({
        url: "https://youtu.be/7vQsBI6C8Qk"
      });
    }
  });
