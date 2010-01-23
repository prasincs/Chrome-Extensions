function remove(element) {
	if (element != null) 
		element.parentNode.removeChild(element);
}

var suggestionBox = document.getElementById('pagelet_pymkbox');
var homeAdBox =document.getElementById('pagelet_adbox');
var connectBox = document.getElementById('pagelet_connectbox');
var sidebarAds = document.getElementById('sidebar_ads');

remove(suggestionBox);
remove(homeAdBox);
remove(connectBox);
if (sidebarAds)
	sidebarAds.style.visibility = 'hidden';

