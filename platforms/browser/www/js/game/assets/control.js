var control = function () {

    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    } else {
        player.setVelocityX(PlayerVelo * (-1));
    }

    if (cursors.up.isDown || playerIsJumping == true) {
        player.body.velocity.y = (player.body.velocity.y -= 25);
    }
}

var playerJump = function (pointer) {
    if (pointer.leftButtonDown()) {
        playerIsJumping = true;
    }
}

var playerNoJump = function (pointer) {
    playerIsJumping = false;
}