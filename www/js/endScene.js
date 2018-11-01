var endScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

        function endScene() {
            Phaser.Scene.call(this, {
                key: 'endScene'
            });
        },

    preload: function () {
        this.load.image('endBg', './assets/sky.png');
    },

    create: function () {
        window.addEventListener('resize', resize);
        resize();

        this.endBg = this.add.image(0, 0, 'endBg').setOrigin(0, 0);
        console.log('End Scene');

        this.input.once('pointerdown', function (event) {

            console.log('The end!!!');
            isEnded = false;
            this.scene.start('menuScene');

        }, this);

    }

});