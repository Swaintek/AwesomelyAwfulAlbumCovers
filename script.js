var photoFiles = ['abba.jpg', 'kevinrowland.jpg', 'bajo.jpg', 'liebe.jpg', 
					'bangerz.jpg', 'manowar.jpg', 'bieber.jpg', 'massage.jpg', 
					'cugini.jpg', 'norberto.jpg', 'dance.jpg', 'orleans.jpeg', 
					'devastatindave.jpg', 'quim.png', 'fleetwoodmac.jpg', 'stevewarren.jpg', 
					'godschild.jpg', 'tino.jpg', 'gunther.jpg', 'waynecochranegoinbacktomiami.jpg', 
					'kenbyrequestonly.jpg'];

var randImg = function () {
		return Math.floor(Math.random() * photoFiles.length);
	};

var addImages = function () {
	var img1Loc = document.getElementById('img1');
	var img2Loc = document.getElementById('img2');
	if (img1Loc.firstChild) {
		img1Loc.removeChild(img1Loc.firstChild);
	}
	if (img2Loc.firstChild) {
		img2Loc.removeChild(img2Loc.firstChild);
	}
	var img1El = document.createElement('img');
	img1El.src = 'img/' + photoFiles[randImg()];
	img1Loc.appendChild(img1El);
	var img2El = document.createElement('img');
	do {
	img2El.src = 'img/' + photoFiles[randImg()];
	} while (img2El.src == img1El.src);
	img2Loc.appendChild(img2El);
}

addImages();
var picButton = document.getElementById('picButton');
picButton.addEventListener('click', addImages)