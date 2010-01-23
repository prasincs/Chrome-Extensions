function remove(element) {
	element.parentNode.removeChild(element);
}

var suggestionBox = document.getElementById('pagelet_pymkbox');
var adBox =document.getElementById('pagelet_adbox');
var connectBox = document.getElementById('pagelet_connectbox');

remove(suggestionBox);
remove(adBox);
remove(connectBox);

