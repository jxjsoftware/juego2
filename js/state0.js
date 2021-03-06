var demo = {};
var robot;
var speed=8;
demo.state0 = function() {};
demo.state0.prototype = {
	preload :function() {
		game.load.image('robot', 'recursos/imagenes/robotx.png')
		game.load.image('fondo', 'recursos/imagenes/FONDO.png')
	},
	create :function() {
		game.stage.backgroundColor = "#11234F";
		console.log('state0');
		addChangeStateEventListeners();

		

		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		var fondo=game.add.sprite(0, 0,'fondo');
		game.world.setBounds(0, 0, 1500, 1000);
		robot= game.add.sprite(650, 400, 'robot');
		robot.anchor.x = 0.5;
		robot.anchor.y = 0.5;
		robot.scale.setTo(0.7, 0.7)

		game.camera.follow(robot);
		game.camera.deadzone = new Phaser.Rectangle(100,100,750,1000);


	},
	update :function() {

			if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			robot.x +=speed;
			}else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
			robot.x -=speed;
			robot.scale.setTo(-0.7, 0.7)
			}else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
			robot.y +=speed;
			}else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
			robot.y -=speed;
			}



	}
}; 

		function changeState(i, stateNum){
			console.log(i)
			game.state.start('state' + stateNum);
	}	
		function addKeyCallback(key, fn, args){
			game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
		
	}
		function addChangeStateEventListeners(){
		addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
		addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
		addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
		addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
		addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
		addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
		addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
		addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
		addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
		addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
		}