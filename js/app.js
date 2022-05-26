// Stop youtube video
var stopVideos = function () {
	var videos = document.querySelectorAll('iframe, video');
	Array.prototype.forEach.call(videos, function (video) {
		if (video.tagName.toLowerCase() === 'video') {
			video.pause();
		} else {
			var src = video.src;
			video.src = src;
		}
	});
};

const videoPopup = document.querySelector('.video-popup');

if (videoPopup) {
  videoPopup.addEventListener('click', (e) => {
    stopVideos();
  });
}
