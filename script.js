// 1. Change the text content of the h1 element to "Updated welcome text".
document.querySelector('h1').textContent = "Updated welcome text";

// 2. Change the background color of the header element to any color of your choice.
document.querySelector("header").style.backgroundColor = "rebeccapurple";

// 3. Add a new li element to the nav with a link to "#blog".
var li = document.createElement('li');
var a = document.createElement('a');
a.innerHTML = "Blogs";
a.setAttribute("href", "#blog");
a.setAttribute("class", "nav-link");
li.appendChild(a);
document.querySelector("nav ul").appendChild(li);

// 4. Change the text content of the first p element in the "Contact" section to "Updated Contact Section".
document.querySelector('#contact p').textContent = "Updated Contact Section";

// 5. Console log all the nav-link elements.
var nle = document.querySelectorAll(".nav-link")
nle.forEach(element => console.log(element.outerHTML));
