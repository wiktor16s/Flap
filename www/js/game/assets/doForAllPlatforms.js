var doForAllPlatforms = function () {

    Phaser.Actions.Call(platform.getChildren(), function (go) {
        go.setVelocityX(PlatVelo);
        go.setVelocityY(-5);
        go.body.immovable = platImmovable;
        ///////////////////
        if (go.x > 900) {

            //go.x = -100;
            // platform1.y = (Phaser.Math.Between(-130, 130) + DIFFERENCE);
        }

        ///////////////////
        if (platform1.x > 900) {
            platform1.destroy();
            plat1.x = -100;
            plat1.y = Phaser.Math.Between(47, 376);
            drawPlat1(plat1);
            //scores();
        }

        if (platform2.x > 900) {
            PlatVelo = PlatVelo + 2;
            PlayerVelo = PlayerVelo + playerReachSpeed;
            platform2.destroy();
            plat2.x = -100;
            plat2.y = Phaser.Math.Between(47, 376);
            drawPlat2(plat2);
            //scores();
        }

        if (platform3.x > 900) {
            platform3.destroy();
            plat3.x = -100;
            plat3.y = Phaser.Math.Between(47, 376);
            drawPlat3(plat3);
            //scores();

        }

        if (platform4.x > 900) {
            PlatVelo = PlatVelo + 2;
            PlayerVelo = PlayerVelo + playerReachSpeed;
            platform4.destroy();
            plat4.x = -100;
            plat4.y = Phaser.Math.Between(47, 376);
            drawPlat4(plat4);
            //scores();
        }

    });
    
}