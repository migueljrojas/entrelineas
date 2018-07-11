'use strict';

var Home = function() {
    var context = $('.home');

    if (context) {
        var videoPlaceholder = $('.home__video__item');
        var videoTitle = $('.home__video__title');
        var videoSummary = $('.home__video__summary');
        var videos = $('.home__video__list__item');

        function videoReplacer(video, title, summary) {
            var newSrc = 'https://www.youtube.com/embed/'+ video +'?autoplay=1';
            console.log(newSrc);
            videoPlaceholder.attr('src', newSrc);
            videoTitle.html(title);
            videoSummary.html(summary);
        }

        videos.each(function() {
            var $this = $(this);

            $this.on('click', function(){
                var src = $this.data('video');
                var title = $this.find('.home__video__list__item__title').html();
                var summary = $this.find('.home__video__list__item__summary').html();

                console.log(src);
                videoReplacer(src, title, summary);
            });
        });
    }
}

module.exports = Home;
