demo.state6 = function() {};
demo.state6.prototype = {
	preload :function() {},
	create :function() {
		game.stage.backgroundColor = "#D7531F";
		console.log('state6');
		addChangeStateEventListeners();

	},
	update :function() {}
}; 