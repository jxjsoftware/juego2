demo.state5 = function() {};
demo.state5.prototype = {
	preload :function() {},
	create :function() {
		game.stage.backgroundColor = "#123456";
		addChangeStateEventListeners();
		console.log('state5');
		
},
	update :function() {}
}; 