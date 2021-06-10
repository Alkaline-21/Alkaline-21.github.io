var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

let mtnClick = false;
let treeClick = false;
var mtnArray = [];
let number = -1;

var specNum;
var specLandform;

mtnArray[0] = new Image();
mtnArray[0].src = 'Visuals/Mountains1.jpg';

mtnArray[1] = new Image();
mtnArray[1].src = 'Visuals/Mountains2.jpg';

mtnArray[2] = new Image();
mtnArray[2].src = 'Visuals/Mountains3.jpg';

mtnArray[3] = new Image();
mtnArray[3].src = 'Visuals/Mountains4.jpg';

var treeArray = [];

treeArray[0] = new Image();
treeArray[0].src = 'Visuals/Tree1.jpg';

treeArray[1] = new Image();
treeArray[1].src = 'Visuals/Tree2.jpg';

treeArray[2] = new Image();
treeArray[2].src = 'Visuals/Tree3.jpg';

treeArray[3] = new Image();
treeArray[3].src = 'Visuals/Tree4.jpg';

treeArray[4] = new Image();
treeArray[4].src = 'Visuals/Tree5.jpg';

treeArray[5] = new Image();
treeArray[5].src = 'Visuals/Tree6.jpg';

var clrMountain;
window.drawLand = false;
window.drawOcean = false;

function selector(category) {
	if (category === 'mountain') {
		mtnClick = true;
		treeClick = false;
		specLandform = 'none';
		specNum = -1;
	}
	else if (category === 'arrow') {
		mtnClick = false;
		treeClick = false;
		specLandform = 'none';
		specNum = -1;
	}
	else if (category === 'tree') {
		treeClick = true;
		mtnClick = false;
		specLandform = 'none';
		specNum = -1;
	}
	else if(category === 'ocean') {
		window.drawOcean = true;
		window.drawLand = false;
	}
	else if(category === 'land') {
		window.drawOcean = false;
		window.drawLand = true;
		
		console.log('in selector: ' + drawLand);
		console.log('in selector: ' + window.drawLand);

	}
}
/*		
const uno = document.querySelectorAll('mtn-button');
uno.addEventListener('click', selector('mountain'));

const dos = document.querySelectorAll('arr-button');
dos.addEventListener('click', selector('arrow'));

document.onclick = userClicked;
---

function userClicked(event) {
	var x = event.clientX;
	var y = event.clientY;

	while (mtnClick === true) {

		let which = Math.floor(Math.random()*mtnArray.length);

		if (which === 0) {
			clrMountain = document.getElementById("clrMountain1");
		}
		else if (which === 1) {
			clrMountain = document.getElementById("clrMountain2");
		}
		else if (which === 2) {
			clrMountain = document.getElementById("clrMountain3");
		}
		else if (which === 3) {
			clrMountain = document.getElementById("clrMountain4");
		}

		clrMountain.style.display = '';
		clrMountain.style.position = 'absolute';
		clrMountain.style.left = x + 'px';
		clrMountain.style.top = y + 'px';
    }
}
*/
function outsideClick(event, notelemA, notelemB, notelemC)	{
	notelemA = $(notelemA); 
	notelemB = $(notelemB); 
	notelemC = $(notelemC); 

	var clickedOut = true, i, lenA = notelemA.length;
	
	for (i = 0;i < lenA;i++)  {
		if (event.target == notelemA[i] || notelemA[i].contains(event.target)) {
			clickedOut = false;
		}
	}
	
	var lenB = notelemB.length;
	for (i = 0;i < lenA;i++)  {
		if (event.target == notelemB[i] || notelemB[i].contains(event.target)) {
			clickedOut = false;
		}
	}
	
	var lenC = notelemC.length;
	for (i = 0;i < lenA;i++)  {
		if (event.target == notelemC[i] || notelemC[i].contains(event.target)) {
			clickedOut = false;
		}
	}
	
	if (clickedOut) {
		return true;
	} else {
		return false;
	}
}

function getX(canvas, event) {
	let rect = canvas.getBoundingClientRect();
	let x = event.clientX - rect.left;
	return x;
}

function getY(canvas, event) {
	let rect = canvas.getBoundingClientRect();
	let y = event.clientY - rect.top;
	return y;
}

function verySpecific(landform, num) {
	specLandform = landform;
	specNum = num;
}

window.addEventListener('click', function(e) {
	console.log('entered listener for spec function');

	if(specLandform === 'tree') {
	var img = document.createElement("img");
	//img.src = 'Visuals/Mountains1.jpg';
	img.src = treeArray[parseInt(specNum)].src;
	img.width = 22.5;
	img.alt = 'a tree';

	var canvas = document.getElementById('myCanvas');
	var x = getX(canvas, event);
	var y = getY(canvas, event);
	img.style.marginLeft = x;
	img.style.marginTop = y;
	img.style.position = 'absolute';
	img.style.mixBlendMode = "multiply";

	dragElement(img);
	document.body.appendChild(img);
	console.log('a tree!');
	}
	else if(specLandform === 'mtn') {
	var img = document.createElement("img");
	//img.src = 'Visuals/Mountains1.jpg';
	img.src = mtnArray[parseInt(specNum)].src;
	img.width = 75;
	img.height = 50;
	img.alt = 'a mountain';

	var canvas = document.getElementById('myCanvas');
	var x = getX(canvas, event);
	var y = getY(canvas, event);
	img.style.marginLeft = x;
	img.style.marginTop = y;
	img.style.position = 'absolute';
	img.style.mixBlendMode = "multiply";

	dragElement(img);
	document.body.appendChild(img);
	console.log('a mountain!');
	}
});
	/*
	var img = document.createElement("img");
	if(landform === 'tree') {
		img.src = treeArray[1].src;
	}
	else {
		img.src = mtnArray[number].src;
	}
	img.width = 75;
	img.height = 50;
	img.alt = 'your selected image';

	var canvas = document.getElementById('myCanvas');
	var x = getX(canvas, event);
	var y = getY(canvas, event);
	img.style.marginLeft = 0;
	img.style.marginTop = 0;
	img.style.position = 'absolute';

	dragElement(img);
	document.getElementById('myCanvas').appendChild(img);
	*/


window.addEventListener('click', function(e) {

	var modalA = document.getElementById("title-box");
	var modalB = document.getElementById("cat-box");
	var modalC = document.getElementById("selections-box");
	
	if (outsideClick(e, modalA, modalB, modalC)) {

		if(mtnClick) {
			var img = document.createElement("img");
			//img.src = 'Visuals/Mountains1.jpg';
			img.src = mtnArray[Math.floor(Math.random()*4)].src;
			img.width = 75;
			img.height = 50;
			img.alt = 'a mountain';

			var canvas = document.getElementById('myCanvas');
			var x = getX(canvas, event);
			var y = getY(canvas, event);
			img.style.marginLeft = x;
			img.style.marginTop = y;
			img.style.position = 'absolute';
			img.style.mixBlendMode = "multiply";

			dragElement(img);
			document.body.appendChild(img);
		}
		else if (treeClick) {
			var img = document.createElement("img");
			//img.src = 'Visuals/Mountains1.jpg';
			img.src = treeArray[Math.floor(Math.random()*6)].src;
			img.width = 22.5;
			img.alt = 'a tree';

			var canvas = document.getElementById('myCanvas');
			var x = getX(canvas, event);
			var y = getY(canvas, event);
			img.style.marginLeft = x;
			img.style.marginTop = y;
			img.style.position = 'absolute';
			img.style.mixBlendMode = "multiply";

			dragElement(img);
			document.body.appendChild(img);
		}
   }
});

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

window.addEventListener('click', function(e) {
	var isDrawing = false;
	var rect = canvas.getBoundingClientRect();

	var offsetLeft = rect.left;
	var offsetTop = rect.top;

	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext('2d');
	canvas.addEventListener('mousedown', () => startDrawing());
	canvas.addEventListener('mousemove', (event) => draw(event));
	canvas.addEventListener('mouseup', () => stopDrawing());

	
	function startDrawing() {
	isDrawing = true;
	}
	function stopDrawing() {
	isDrawing = false;
	}
	function draw(event) {
		console.log('drawing ish...');
		if (isDrawing) {
			console.log('draw ' + window.drawOcean);
			console.log('draw ' + window.drawLand);
			console.log('draw2 ' + drawOcean);
			console.log('draw2 ' + drawOcean);
			if (window.drawOcean) {
				context.fillStyle = 'lightBlue';
				context.fillRect(event.pageX - offsetLeft, event.pageY - offsetTop, 10, 10);
				console.log('draw water!');
			}
			else if (window.drawLand) {
				context.fillStyle = 'tan';
				context.fillRect(event.pageX - offsetLeft, event.pageY - offsetTop, 10, 10);
				console.log('draw land!');
			}
		}
	}
});
