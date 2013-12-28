define(['knockout', 'amplify', 'game/models/Game', 'game/models/Player'], function(ko, amplify, Game, Player) {
    return function PlayerNameSelectionViewModel() {
    	var self = this;
    	self.visible = ko.observable(false);
    	self.game = ko.observable(new Game());
	
	
    	self.playerNamesSelected = function() {
    		self.visible(false);
    		amplify.publish('PlayerNamesSelected', self.game());
    	}
        
    	amplify.subscribe('PlayerQuantitySelected', function(data) {
    		self.game(data);
            self.game().createEmptyPlayers();
    		self.visible(true);
    	});
	
    }
});