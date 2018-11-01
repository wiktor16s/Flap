var setPlayer = function () {
    player.setBounce(0.5);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(300);
}

var setPlayerVelo = function(velo){
    this.velo = velo;
    player.setVelocityY(velo);
}