var photoFiles = ['abba.jpg', 'kevinrowland.jpg', 'bajo.jpg', 'liebe.jpg', 
					'bangerz.jpg', 'manowar.jpg', 'bieber.jpg', 'massage.jpg', 
					'cugini.jpg', 'norberto.jpg', 'dance.jpg', 
					'devastatindave.jpg', 'fleetwoodmac.jpg', 
					'godschild.jpg', 'tino.jpg', 'gunther.jpg', 'waynecochranegoinbacktomiami.jpg', 
					'kenbyrequestonly.jpg'];

var albumArray = [];

var img1;

var img2;

var Album = function (album, score) {
	this.album = album;
	this.score = score;
};

for (var i = 0; i < photoFiles.length; i += 1) {
	var newAlbum = new Album(photoFiles[i], 0);
	albumArray.push(newAlbum);
};

var randImg = function () {
		return Math.floor(Math.random() * albumArray.length);
	};

var addImages = function () {
	var img1Loc = document.getElementById('img1');
	var img2Loc = document.getElementById('img2');
	if (img1Loc.firstChild) {
		img1Loc.removeChild(img1Loc.firstChild);
	};
	if (img2Loc.firstChild) {
		img2Loc.removeChild(img2Loc.firstChild);
	};
	var img1El = document.createElement('img');
	img1 = randImg();
	img1El.src = 'img/' + albumArray[img1].album;
	img1Loc.appendChild(img1El);
	var img2El = document.createElement('img');
	do {
	img2 = randImg();
	img2El.src = 'img/' + albumArray[img2].album;
	} while (img2El.src === img1El.src);
	img2Loc.appendChild(img2El);
};

addImages();

var img1Button = document.getElementById('img1');
img1Button.addEventListener('click', function() {
	albumArray[img1].score += 1;
	console.log(albumArray[img1]);
	addImages();
});

var img2Button = document.getElementById('img2');
img2Button.addEventListener('click', function() {
	albumArray[img2].score += 1;
	console.log(albumArray[img2]);
	addImages();
});