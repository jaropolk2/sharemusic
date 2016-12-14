chrome.webNavigation.onDOMContentLoaded.addListener(
  function(e) {
    chrome.tabs.executeScript(
      e.tabId, {
        file: 'add_extension.js',
      }
    );
  }, 
  {
    url: [
      { hostContains: 'play.google.com'},
      { hostContains: 'play.google.ru'}
    ]
  }
);

chrome.tabs.onUpdated.addListener(function(tabId, props) {
  console.log('onCommand event received for message: ', tabId);
});

chrome.browserAction.onClicked.addListener(function() {
  var iframe = document.getElementById('theFrame');
  var message = {
    command: 'render',
    context: {thing: 'world'}
  };
  console.log('onClicked event received for message: ', message);
  iframe.contentWindow.postMessage(message, '*');
});


window.addEventListener('message', function(event) {
  if (event.data.html) {
    new Notification('Templated!', {
      icon: 'icon.png',
      body: 'HTML Received for "' + event.data.name + '": `' +
          event.data.html + '`'
    });
  }
});