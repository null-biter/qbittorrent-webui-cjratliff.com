var currentURL = window.location.href;
var basePath = currentURL.substring(0, currentURL.lastIndexOf('/') + 1);
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
	var mobileURL = basePath + "mobile.html";
	window.location.href = mobileURL;
}