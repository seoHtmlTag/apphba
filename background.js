chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.update(tab.id, { url: 'https://seohtmltag.github.io/apphba' });
});
