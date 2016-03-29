function playSomeSound(genre) {
	SC.get('/tracks',	{
		genres: genre,
		bpm: {
				from: 100
				
		}
	}, function(tracks) {
		var random = Math.floor(Math.random() *49);
		SC.oEmbed(tracks[random].uri, { auto_play: true }, dcoument.getElementById('target'));
	});
}

window.onload = function() {
		SC.initialize({
			client_id: 'fc76f6bcc79f9eb25436baca82059b87'
		});
		
		var menuLinks = document.getElementsByClassName('genre');
		for (var i = 0; i < menuLinks.length; i++) {
			var menuLink = menuLinks[i];
			menuLinks.onclick = function(e){
				e.preventDefault();
				playSomeSound(menuLink.innerHTML);
			};
		}
};