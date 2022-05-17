// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
articlesDiv.children[0].style.fontSize = '50px';
headerDiv.style.color = 'white';

// Bonus:

// Gets	Selector Syntax	Method
// ID	#demo	getElementById()
// Class	.demo	getElementsByClassName()
// Tag	demo	getElementsByTagName()
// Selector (single)		querySelector()
// Selector (all)		querySelectorAll()