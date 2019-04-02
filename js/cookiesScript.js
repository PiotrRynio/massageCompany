var galTable = new Array();
var galx = 0;

function simplecookienotification_v01_create_cookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
  document.getElementById("simplecookienotification_v01").style.display = "none";
}

function simplecookienotification_v01_read_cookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
var simplecookienotification_v01_jest = simplecookienotification_v01_read_cookie("simplecookienotification_v01");
if (simplecookienotification_v01_jest == 1) {
  document.getElementById("simplecookienotification_v01").style.display = "none";
}