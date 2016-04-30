var $svg = $('svg');
var $body = $('body');
var $energy = $('.energy');

$energy.waypoint(function () {
  $energy.addClass('energy-animate');
}, {offset: '80%'});
