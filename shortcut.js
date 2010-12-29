var toshortcut = { 

  init: function() {
    var doc = document.body.attributes;
    try {
      if ("true" == doc.getNamedItem("isExecuteScrip").value) {
        return;
      }
    } catch(e) {
      var namedItem = document.createAttribute("isExecuteScrip");
      namedItem.value = "true";     
      doc.setNamedItem(namedItem);
    }
    document.body.addEventListener('keydown', toshortcut.doshortcut, false);
  },

  doshortcut: function (event) {
    if (event.ctrlKey && event.altKey) {
      if(window.event.keyCode == 86) {
        toshortcut.sendMessage({msg: 'capture_area'});
      } else if(window.event.keyCode == 67) {
        toshortcut.sendMessage({msg: 'capture_window'});       
      } else if(window.event.keyCode == 88) {
        toshortcut.sendMessage({msg: 'capture_webpage'});
      }     
    }
  },

  sendMessage: function(message) {
    chrome.extension.sendRequest(message);
  } 
};

toshortcut.init();
