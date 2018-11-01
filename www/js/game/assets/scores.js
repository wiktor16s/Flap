var checkScore = function () {

    if (platform1.x > player.x && scoreSwitch1 == false) {
        scoreSwitch1 = true;
        scores();
    }
    if (platform1.x < player.x && scoreSwitch1 == true) {
        scoreSwitch1 = false;
    }

    if (platform2.x > player.x && scoreSwitch2 == false) {
        scoreSwitch2 = true;
        scores();
    }
    if (platform2.x < player.x && scoreSwitch2 == true) {
        scoreSwitch2 = false;
    }

    if (platform3.x > player.x && scoreSwitch3 == false) {
        scoreSwitch3 = true;
        scores();
    }
    if (platform3.x < player.x && scoreSwitch3 == true) {
        scoreSwitch3 = false;
    }

    if (platform4.x > player.x && scoreSwitch4 == false) {
        scoreSwitch4 = true;
        scores();
    }
    if (platform4.x < player.x && scoreSwitch4 == true) {
        scoreSwitch4 = false;
    }
}

var scores = function () {
    score = score + 1;
    scoreText.setText('Score: ' + score);
    console.log("point");

}