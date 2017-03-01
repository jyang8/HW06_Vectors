var svg = document.getElementById("vector");
var clearBtn = document.getElementById("clear_btn");
var x;
var y;
var dots = 0;


var addDots = function(e) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", "25");
    c.setAttribute("fill", "green");
    svg.appendChild(c);
    x = e.offsetX;
    y = e.offsetY;
    dots++;
}

var connectDots = function(e) {
    if (dots < 1) {
	addDots(e);
    } else {
	var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
	l.setAttribute("x1", x);
	l.setAttribute("y1", y);
	l.setAttribute("x2", e.offsetX);
	l.setAttribute("y2", e.offsetY);
	l.setAttribute("style", "stroke:rgb(0,0,0);stroke-width:2");
	svg.appendChild(l);
	addDots(e);
    }
}

svg.addEventListener("click", connectDots);

var clear = function(e) {
    while (svg.lastChild){
	svg.removeChild(svg.lastChild);
    }
}

clearBtn.addEventListener("click", clear);
