var gameScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function SceneA() {
            Phaser.Scene.call(this, {
                key: 'gameScene'
            });
        },

    preload: function () {
        this.load.image('sky', './assets/sky.png');
        this.load.image('deadZone', './assets/deadZone.png');
        this.load.image('platform', './assets/platform.png');

        // this.load.image('player', './assets/dude.png');
        this.load.spritesheet('player',
            './assets/player.png', {
                frameWidth: 30,
                frameHeight: 30
            }
        );

        this.load.spritesheet('bg1',
        './assets/bg1.png', {
            frameWidth: 800,
            frameHeight: 376
        }
    );

    },

    create: function () {

        this.input.mouse.disableContextMenu();

        window.addEventListener('resize', resize);
        resize();


        cursors = this.input.keyboard.createCursorKeys();
        background = this.add.sprite(0, 0, 'bg1').setOrigin(0, 0);

        player = this.physics.add.sprite(playerStart.x, playerStart.y, playerStart.spriteKey).setOrigin(0, 0);
        platform = this.physics.add.group();
        deadZone = this.add.image(760, 0, 'deadZone').setOrigin(0, 0);
        scoreText = this.add.text(16, 16, 'score: 0', {
            fontSize: '20px',
            fill: '#1E90FF'
        });

        scoreText.setDepth(1);
        deadZone.setDepth(1);
        hitPlatform = this.physics.add.collider(player, platform);

        setPlayer();
        /* set Platform at:
        y min - 376
        y max -  46
        */

        plat1 = new platObject(100, 100, 'platform');
        plat2 = new platObject(-150, 200, 'platform');
        plat3 = new platObject(-400, 300, 'platform');
        plat4 = new platObject(-650, 46, 'platform');

        drawPlat1(plat1);
        drawPlat2(plat2);
        drawPlat3(plat3);
        drawPlat4(plat4);

        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers(playerStart.spriteKey, {
                start: 0,
                end: 19
            }),
            repeat: -1
        });

        this.anims.create({
            key: 'bgSwap',
            frames: this.anims.generateFrameNumbers('bg1', {
                start: 0,
                end: 2
            }),
            frameRate: 4,
            repeat: -1

        });

        // player.setScale(0.5);

        this.input.on('pointerdown', function (pointer) {
            playerJump(pointer);
        });

        this.input.on('pointerup', function (pointer) {
            playerNoJump(pointer);
        });


        console.log('gameScene');

        //this.scene.start('game');
    },

    update: function () {

        if (isEnded == true) {
            console.log('From SceneC to SceneA');
            isEnded = false;
            this.scene.start('endScene');
        }

        blinkTime = Phaser.Math.Between(1, 4000);

        player.anims.setRepeatDelay(blinkTime);
        player.anims.play('idle', true);

        background.anims.play('bgSwap', true);


        doForAllPlatforms();
        checkScore();
        control();
        console.log(playerIsJumping);


        if (player.body.touching.left || player.body.touching.right || player.body.touching.down || player.body.touching.up) {
            collide();
        }
        if (player.x > 800) {
            endGame();
        }

    }

});