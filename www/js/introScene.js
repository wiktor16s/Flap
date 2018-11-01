var onEvent = function () {
    console.log("To jest event");
    this.scene.start('menuScene');
}

var introScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function introScene() {
            Phaser.Scene.call(this, {
                key: 'introScene'
            });
        },

    preload: function () {
        this.load.image('introBG', './assets/introBG.png');
    },

    create: function () {
        window.addEventListener('resize', resize);
        resize();

        this.introBG = this.add.image(0, 0, 'introBG').setOrigin(0, 0);
        console.log('intro');
        // var timeEvent;
        //timeEvent = this.time.delayedCall(3000, onEvent, [], this);

        this.input.once('pointerdown', function (event) {

            console.log('From SceneC to SceneA');
            isEnded = false;
            this.scene.start('menuScene');

        }, this);

    }

});