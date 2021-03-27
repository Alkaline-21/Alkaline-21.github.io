public class code {

let mtnClick = false;
var mtnArray = new Array();

mtnArray[0] = new Image();
mtnArray[0].src = 'Visuals/Mountains1.jpg';

mtnArray[1] = new Image();
mtnArray[1].src = 'Visuals/Mountains2.jpg';

mtnArray[2] = new Image();
mtnArray[2].src = 'Visuals/Mountains3.jpg';

mtnArray[3] = new Image();
mtnArray[3].src = 'Visuals/Mountains4.jpg';

function selector(category) {
	if (category === 'mountain') {
		mtnClick = true;
	}
	else if (category === 'arrow') {
		mtnClick = false;
	}
}
		
const para = document.querySelectorAll('mtn-button');
para.addEventListener('click', selector('mountain'));

const para = document.querySelectorAll('arr-button');
para.addEventListener('click', selector('arrow'));

function makeLandforms() {
	if (mtnClick === true) {
		document.onclick = userClicked;
		
		function userClicked(event) {
			var x = event.clientX;
			var y = event.clientY;

			let which = Math.floor(Math.random()*mtnArray.length);

			if (which = 0) {
				var clrMountain = document.getElementById("clrMountain1");
			}
			else if (which = 1) {
				var clrMountain = document.getElementById("clrMountain2");
			}
			else if (which = 2) {
				var clrMountain = document.getElementById("clrMountain3");
			}
			else if (which = 3) {
				var clrMountain = document.getElementById("clrMountain4");
			}
			
			clrMountain.style.display = '';
			clrMountain.style.position = 'absolute';
			clrMountain.style.left = x + 'px';
			clrMountain.style.top = y + 'px';
		}
	}
}


function () {}

}
