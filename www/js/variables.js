var group1;
var scoreSwitch1 = false;
var scoreSwitch2 = false;
var scoreSwitch3 = false;
var scoreSwitch4 = false;

var game;
var platform;
var hitPlatform;
var player;
var cursors;
var one;
var blinkTime;
var background;
var anims;
var PlatVelo = 120;
var PlayerVelo = 0;
var playerReachSpeed = 0.25;
var playerIsJumping = false;
var platImmovable = true;
var inMenu = false;

var isEnded = false;

var plat1, platform1;
var plat2;
var plat3;
var plat4;


var platObject = function (x, y, key) {
  this.x = x;
  this.y = y;
  this.key = key;
};

var playerStart = {
  x: 400,
  y: 300,
  spriteKey: 'player'
};

var DIFFERENCE = 505; //496;
var y1 = 0; //max 130  
var y2 = 130;
var y3 = 20;
var y4 = -140;

var score = 0;
var scoreText;