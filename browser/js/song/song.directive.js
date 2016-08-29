'use strict';

juke.directive('songList', function(PlayerFactory) {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: '/js/song/templates/song-list.html',
        link: function(scope) {

            scope.album = scope.data;

            scope.toggle = function(song) {
                if (song !== PlayerFactory.getCurrentSong()) {
                    PlayerFactory.start(song, scope.album.songs);
                } else if (PlayerFactory.isPlaying()) {
                    PlayerFactory.pause();
                } else {
                    PlayerFactory.resume();
                }
            };

            scope.getCurrentSong = function() {
                return PlayerFactory.getCurrentSong();
            };

            scope.isPlaying = function(song) {
                return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
            };
        }
       
    };

});

juke.directive('doubleClick', function() {
    return {
        restrict: 'A',
        scope: {
            doubleClick: '&'
        },
        link: function(scope, element) {
            element.on('dblclick', function() {
                scope.doubleClick();
            })
        }
    };
});