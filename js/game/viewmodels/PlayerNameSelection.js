define(['knockout', 'amplify', 'game/models/Game', 'game/models/Player'], function(ko, amplify, Game, Player) {
    return function PlayerNameSelectionViewModel() {
    	var self = this;
    	self.quantity = 0;
    	self.visible = ko.observable(false);
    	self.game = ko.observable(new Game());
	
	
    	amplify.subscribe('PlayerQuantitySelected', function(data) {
    		self.game(data);
    		self.createPlayers();
    		self.visible(true);
    	});
	
	
    	self.createPlayers = function() {		
    		for (var i = 0; i < self.quantity; i++ ) {
    			var player = new Player('');			
    			self.game().addPlayer(player);
			
    		}
    	}
	
	
    	self.playerNamesSelected = function() {
    		self.visible(false);
    		amplify.publish('PlayerNamesSelected', self.game());
    	}
    }
});