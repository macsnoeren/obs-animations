//////////////////////////////////////////////////////////////////////////////////////////
// BOEREN BINGO!
// -------------
// BOEREN BINGO is a bingo game for the family. Within our family bingo is played with the
// family. Prices on the table from all kind of gadets and smaller items. Eveyone got a
// pencil and notebook. The bingo master asks whether everyone is ready. Five numbers are
// written down on a paper by. The bingo master tell each number and make it a fun and
// interactive game.
//
// On the Intenet no bingo game as this type could be found. Therefore together with the
// children an Internet game has been created. This bingo game is able to support our
// family bingo as we always do.
//
// Version: 0.1 - beta
// Authors: Maurice, Noortje and Lieve - macsnoeren@gmail.com
// License: GPLv3 - https://www.gnu.org/licenses/gpl-3.0.nl.html 
//////////////////////////////////////////////////////////////////////////////////////////

// Game configuration variables
var title      = "OBS Animations";
var scaleRatio = 1;
var width      = window.screen.width/scaleRatio;
var height     = window.screen.height/scaleRatio;
var background = "#FF0000";//"#009933";

// Configuration of the Phaser Game Object
var config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    parent: 'obs-animations-game',
    scene: {
        preload: preload,
        create: create,
	    update: update,
    },
    audio: {
        disableWebAudio: false
    }
};

// Game object of the Phaser framework
var game = null;

function startGame ( ) {
    game = new Phaser.Game(config);
}

// Preload function belonging to the Phaser framework
function preload () {    

}

// Create function belonging to the Phaser framework
function create () {
    game.stage.backgroundColor = "#FF0000";
    /*
    var text = this.add.bitmapText(width/2, 0, 'desyrel', title, 64/scaleRatio, 1).setOrigin(0.5, 0);
    
    var graphics = this.add.graphics();
    graphics.lineStyle(10/scaleRatio, 0xFFFFFF);
    graphics.strokeRect(cage.x, cage.y, cage.width, cage.height);

    // Add the yellow balls
    balls = this.physics.add.group({
	key: 'ball',
	repeat: totalBalls-1,
	setXY: { x: width/2, y: height/2, stepX: 0 }
    });

    balls.children.iterate( function (ball) {
	ball.setScale(0.5/scaleRatio);
	ball.setVelocity(500*Math.random(), 500*Math.random());
	ball.setBounce(1, 1);
	ball.setCollideWorldBounds(true);
	ball.body.setBoundsRectangle(cage);
    });

    // Add the blue balls
    blueBalls = this.physics.add.group({
	key: 'ballBlue',
	repeat: 1,
	setXY: { x: width/2, y: height/2, stepX: 0 }
    });

    blueBalls.children.iterate( function (ball) {
	ball.setScale(0.5/scaleRatio);
	ball.setVelocity(500*Math.random(), 500*Math.random());
	ball.setBounce(1, 1);
	ball.setCollideWorldBounds(true);
	ball.body.setBoundsRectangle(cage);
    });

    // Create the sounds and the actions
    var rollSound = this.sound.add('roll');
    var dropSound = this.sound.add('drop');
    
    rollSound.on('complete', function () {
	stopCage();
	showBall();
	dropSound.play();
    });

    dropSound.on('complete', function () {
	console.log('ready');
    });

    numbersSound = [];
    for ( var i=1; i <= totalBalls; i++ ) {
	numbersSound.push( this.sound.add('number'+i) );
    }

    // Create the button for full screen
    var button = this.add.image(width-16, 16, 'fullscreen', 0).setOrigin(1, 0).setInteractive();
    button.on('pointerup', function () {
        if (this.scale.isFullscreen) {
            button.setFrame(0);
            this.scale.stopFullscreen();
	    
	    
        } else {
            button.setFrame(1); 
            this.scale.startFullscreen();
        }

    }, this);

    // Create the buttons
    var buttonRoll, buttonBingo, buttonAgain, buttonStop;
    
    buttonRoll = this.add.image(width/2+(150/scaleRatio), cage.y+cage.height+(50/scaleRatio), 'buttonRoll').setScale(0.5/scaleRatio).setInteractive();    
    buttonRoll.on('pointerup',function(pointer) {
	autoplay = true;
	rollSound.play();
	startCage();
	buttonRoll.visible = false;
	buttonBingo.visible = true;
    });
    
    buttonBingo = this.add.image(width/2+(150/scaleRatio), cage.y+cage.height+(50/scaleRatio), 'buttonBingo').setScale(0.5/scaleRatio).setInteractive();
    buttonBingo.visible = false;
    buttonBingo.on('pointerup',function(pointer) {
	autoplay = false;	
	buttonRoll.visible = true;
	buttonBingo.visible = false;
    });

    buttonAgain = this.add.image(width/2-(150/scaleRatio), cage.y+cage.height+(50/scaleRatio), 'buttonAgain').setScale(0.5/scaleRatio).setInteractive();
    buttonAgain.visible = true;
    buttonAgain.on('pointerup',function(pointer) {
	restartGame();
	autoplay = false;
    });

    ballSelected = this.add.image(width/2, cage.y+cage.height, 'ball').setScale(0.0);
    tweenShow = this.tweens.add({
        targets: ballSelected,
        y: {from: cage.y+cage.height, to: height/2},
	scale: {from: 0, to: 6/scaleRatio},
        duration: 1000,
        ease: 'Cubic.easeInOut',
        repeat: 0,
        yoyo: false,
	paused: true,
	onComplete: function() {
	    textSelectedBall.setAlpha(1);
	    setTimeout( function() { // Autoplay
		hideBall();
		if ( autoplay && rolled.length <= totalBalls) {
		    rollSound.play();
		    startCage();
		}
	    }, 4000 + Math.random()*5000);
	}
    });

    var fontSize = 300/scaleRatio;
    var style = { font: "bold " + fontSize + "px Arial", fill: "#F00", boundsAlignH: "center", boundsAlignV: "middle" };
    textSelectedBall = this.add.text(width/2, height/2, "12", style).setOrigin(0.5);
    textSelectedBall.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    textSelectedBall.setAlpha(0);
    */
}


/*function showBall () {
    if (  rolled.length < totalBalls ) {
	var number = getNumber();
	textSelectedBall.text = number
	numbersSound[number-1].play();
	textSelectedBall.setAlpha(0);
	tweenShow.play();
	tweenShow.restart();
	
    } else {
	textSelectedBall.text = "EINDE";
	textSelectedBall.setAlpha(0);
	tweenShow.play();
	tweenShow.restart();
    }
}*/

function hideBall () {
    textSelectedBall.setAlpha(0);
    ballSelected.setScale(0);
    addRolledBall();
}

function addRolledBall () {
    if ( rolled.length != 0 && rolled.length <= totalBalls ) {
	var number = rolled[rolled.length-1];
	x = cage.x + cage.width + 100/scaleRatio + ((number-1) % 10)*50/scaleRatio;
	y = parseInt((number-1) / 10)*50/scaleRatio + cage.y;
	var _ball = game.scene.scenes[0].add.image(x, y, 'ball');
	rolledBallItems.push( _ball );
	_ball.setScale(0.5/scaleRatio);
	var fontSize = 30/scaleRatio;
	var style = { font: "bold " + fontSize + "px Arial", fill: "#F00", boundsAlignH: "center", boundsAlignV: "middle" };
	var _text = game.scene.scenes[0].add.text(x, y, number, style);
	rolledBallItems.push( _text );
	_text.setOrigin(0.5);
    }

    if ( rolled.length == totalBalls ) {
	console.log("EINDE");
    }
}

function update (time, step) {
    //console.log(time);
    //console.log(step);
    
}
