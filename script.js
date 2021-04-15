import $ from 'jquery'

let mtnClick = false;
var mtnArray = [];

mtnArray[0] = new Image();
mtnArray[0].src = 'Visuals/Mountains1.jpg';

mtnArray[1] = new Image();
mtnArray[1].src = 'Visuals/Mountains2.jpg';

mtnArray[2] = new Image();
mtnArray[2].src = 'Visuals/Mountains3.jpg';

mtnArray[3] = new Image();
mtnArray[3].src = 'Visuals/Mountains4.jpg';

var clrMountain;

function selector(category) {
	if (category === 'mountain') {
		mtnClick = true;
		//makeLandForms();
	}
	else if (category === 'arrow') {
		mtnClick = false;
	}
}
/*		
const uno = document.querySelectorAll('mtn-button');
uno.addEventListener('click', selector('mountain'));

const dos = document.querySelectorAll('arr-button');
dos.addEventListener('click', selector('arrow'));

document.onclick = userClicked;
*/

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

$(document).ready(function () {
    $('.mtn-button').on('click', function (event) {
        event.preventDefault();

        var x = document.createElement('clrMountain1');
        x.src = "mtnArray[0]";
        insertNodeOverSelection(x, document.getElementById('field'));
    });

    function insertNodeOverSelection(node, containerNode) {
        var sel, range, html, str;

        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                if (isOrContainsNode(containerNode, range.commonAncestorContainer)) {
                    range.deleteContents();
                    range.insertNode(node);
                } else {
                    containerNode.appendChild(node);
                }
            }
        } else if (document.selection && document.selection.createRange) {
            range = document.selection.createRange();
            if (isOrContainsNode(containerNode, range.parentElement())) {
                html = (node.nodeType == 3) ? node.data : node.outerHTML;
                range.pasteHTML(html);
            } else {
                containerNode.appendChild(node);
            }
        }
    }

    function isOrContainsNode(ancestor, descendant) {
        var node = descendant;
        while (node) {
            if (node === ancestor) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }

});

