
const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);


player.on('eventName', function(data) {
    // data is an object containing properties specific to that event
});

var callback = function() {};

player.off('eventName', callback);