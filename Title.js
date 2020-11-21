class Title extends Phaser.Scene {

    constructor() {
        super("title");
    }

    create() {
        // background
        this.background = this.add.image(0,0,"background");
        this.background.setOrigin(0,0);

        // SFX
        this.buttonSFX = this.sound.add("select");

        // hina neko
        this.player = this.add.sprite(config.width/2 + 200, config.height-335, "neko");
        this.player.play("neko_anim");
        this.player.setScale(img_config.neko_scale);

        // audio icon
        var tag = (audioOn)? "openAudio" : "mute";
        this.audioIcon = this.add.image(config.width-50, 50, tag).setOrigin(0.5,0.5);
        this.audioIcon.setInteractive();
        this.audioIcon.on('pointerover', () => {
            this.audioIcon.setScale(1.2);
        });
        this.audioIcon.on('pointerout', () => {
            this.audioIcon.setScale(1.0);
        });
        this.audioIcon.on('pointerup', () => {
            audioOn = !audioOn;
            if(audioOn) {
                this.audioIcon.setTexture('openAudio');
            }
            else this.audioIcon.setTexture('mute');
            bgmObj.mute = !audioOn;
        });

        //QR code
        this.add.text(256*0.2+20, config.height-256-15-10-15, 'Plurk', {
            fontFamily: 'Flatwheat',
            fontSize: 20,
            align: 'center',
            color: '#ffffff'
        }).setOrigin(0.5, 0.5);
        this.plurkQR = this.add.image(70, config.height-256+45-15, "plurkQR").setOrigin(0.5,0.5).setScale(0.4);
        this.plurkQR.setInteractive();
        this.plurkQR.on('pointerover', () => {
            this.plurkQR.setScale(0.45);
        });
        this.plurkQR.on('pointerout', () => {
            this.plurkQR.setScale(0.4);
        });
        this.plurkQR.on('pointerup', () => {
            window.open('http://plurk.com/u/potasala1211_bon');
        });
        

        this.add.text(256*0.2+40+256*0.4, config.height-256-15-8-15, 'Instagram', {
            fontFamily: 'Flatwheat',
            fontSize: 20,
            align: 'center',
            color: '#ffffff'
        }).setOrigin(0.5, 0.5);
        this.instaQR = this.add.image(70 + 310*0.4, config.height-256+45-15, "instaQR").setOrigin(0.5,0.5).setScale(0.4);
        this.instaQR.setInteractive();
        this.instaQR.setInteractive();
        this.instaQR.on('pointerover', () => {
            this.instaQR.setScale(0.45);
        });
        this.instaQR.on('pointerout', () => {
            this.instaQR.setScale(0.4);
        });
        this.instaQR.on('pointerup', () => {
            window.open('https://instagram.com/SHIONJAM_1211');
        });

        this.add.text(256*0.4+25, config.height-158, 'Click to follow!', {
            fontFamily: 'Flatwheat',
            fontSize: 20,
            align: 'center',
            color: '#ffffff'
        }).setOrigin(0.5, 0.5);
        
        // Start button
        this.startBtn = this.add.sprite(config.width/2, config.height/2-110, "button").setOrigin(0.5, 0.5);
        this.startBtn.setInteractive();
        this.startLable = this.add.text(config.width/2, config.height/2-100, 'START', {
            fontFamily: 'Flatwheat',
            fontSize: 50,
            align: 'center',
            color: '#606060'
        }).setOrigin(0.5, 0.5);
        this.startBtn.on('pointerover', () => {
            this.startBtn.setTexture("button_hover");
            this.startLable.setColor('#ffffff');
        });
        this.startBtn.on('pointerout', () => {
            this.startBtn.setTexture("button");
            this.startLable.setColor('#606060');
        });
        this.startBtn.on('pointerup', () => {
            if(audioOn) this.buttonSFX.play();
            this.scene.start("playGame");
        });

        // How to play button
        this.readmeBtn = this.add.sprite(config.width/2, config.height/2+50, "button");
        this.readmeBtn.setInteractive();
        this.readmeLabel = this.add.text(config.width/2, config.height/2+63, 'HOW TO PLAY', {
            fontFamily: 'Flatwheat',
            fontSize: 40,
            align: 'center',
            color: '#606060'
        }).setOrigin(0.5, 0.5);;
        this.readmeBtn.on('pointerover', () => {
            this.readmeBtn.setTexture("button_hover");
            this.readmeLabel.setColor('#ffffff');
        });
        this.readmeBtn.on('pointerout', () => {
            this.readmeBtn.setTexture("button");
            this.readmeLabel.setColor('#606060');
        });
        this.readmeBtn.on('pointerup', () => {
            if(audioOn) this.buttonSFX.play();
            this.scene.start("readme");
        });
        
        // UI text
        this.titleLabel = this.add.text(config.width/2, 250, 'HAPPY\nSHION DAY\nPARTY', {
            fontFamily: 'Flatwheat',
            fontSize: 100,
            align: 'center',
            strokeThickness: 5,
            stoke: '#949494',
            boundsAlignH: "center"
        }).setOrigin(0.5, 0.5).setColor('#606060');
    }
}