'use strict';

(function () {
  var body = document.getElementsByTagName('BODY')[0];
  document.addEventListener("message", function(message) {
    var color = message.data;
    body.style.backgroundColor = color;
  });
})();
