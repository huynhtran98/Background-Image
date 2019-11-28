var backgroundImg = document.createElement('img');
var wallpaper = document.getElementById('wallpaper')

backgroundImg.addEventListener('load', function() {
	 wallpaper.style.backgroundImage = "url('./img/bg.jpg')";
	 wallpaper.style.opacity = 1;	
});

backgroundImg.src = './img/bg.jpg';

 