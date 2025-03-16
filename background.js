// chrome.action.onClicked.addListener((tab) => {
//   chrome.tabs.update(tab.id, { url: 'https://seohtmltag.github.io/apphba' });
// });

chrome.app.runtime.onLaunched.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      chrome.tabs.update(tabs[0].id, { url: 'https://seohtmltag.github.io/apphba' });
    }
  });
});
