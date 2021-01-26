'use strict';

Connector.playerSelector = '#content';

Connector.pauseButtonSelector = '.live-playing';

Connector.getArtist = () => 'Юля Кошкина';

Connector.getAlbum = () => 'Кошкина ' + new Date().toISOString().slice(0, 10);

Connector.trackSelector = '.live-playing > .title';

Connector.getTrack = () => {
	const track = Util.getTextFromSelectors(Connector.trackSelector).split(' - ');
	if(track.length === 1) return track[0];
	else return `${track.slice(1)} (${track[0]})`;
};

Connector.isScrobblingAllowed = () => Connector.isPlaying();

Connector.onReady = () => Connector.onStateChanged;
