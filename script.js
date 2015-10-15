var photoFiles = ['abba.jpg', 'kevinrowland.jpg', 'bajo.jpg', 'liebe.jpg', 
					'bangerz.jpg', 'manowar.jpg', 'bieber.jpg', 'massage.jpg', 
					'cugini.jpg', 'norberto.jpg', 'dance.jpg', 
					'devastatindave.jpg', 'fleetwoodmac.jpg', 
					'godschild.jpg', 'tino.jpg', 'gunther.jpg', 'waynecochranegoinbacktomiami.jpg', 
					'kenbyrequestonly.jpg'];

var albumArray = [];
var img1, img2;

if (localStorage.storage) {
	albumArray = JSON.parse(localStorage.getItem('storage'));
} else {
	var Album = function (album, score) {
		this.album = album;
		this.score = score;
	};

	for (var i = 0; i < photoFiles.length; i += 1) {
		var newAlbum = new Album(photoFiles[i], 0);
		albumArray.push(newAlbum);
	};
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
	console.log('Left: ' + albumArray[img1].score + ' Right: ' + albumArray[img2].score)
	updateGauges();
	var albumHolder1 = JSON.stringify(albumArray);
	localStorage.setItem('storage', albumHolder1);
});

var img2Button = document.getElementById('img2');
img2Button.addEventListener('click', function() {
	albumArray[img2].score += 1;
	console.log(albumArray[img2]);
	addImages();
	console.log('Left: ' + albumArray[img1].score + ' Right: ' + albumArray[img2].score)
	updateGauges();
	var albumHolder2 = JSON.stringify(albumArray);
	localStorage.setItem('storage', albumHolder2);
});

var gauges = [];
var scores = [img1, img2];

function createGauge(name, label, min, max)
{
	var config = 
	{
		size: 200,
		label: label,
		min: undefined != min ? min : 0,
		max: undefined != max ? max : 100,
		minorTicks: 5
	}
	
	var range = config.max - config.min;
	config.yellowZones = [{ from: config.min + range*0.75, to: config.min + range*0.9 }];
	config.redZones = [{ from: config.min + range*0.9, to: config.max }];
	
	gauges[name] = new Gauge(name + "GaugeContainer", config);
	gauges[name].render();
}

function createGauges()
{
	createGauge("left", "Awesomeness", 0, 10);
	createGauge("right", "Awesomeness", 0, 10);
}

function updateGauges()
{
	gauges.left.redraw(albumArray[img1].score);
	gauges.right.redraw(albumArray[img2].score);
}

createGauges();

