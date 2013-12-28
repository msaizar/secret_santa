define(['knockout', 'amplify', 'game/models/Game'], function(ko, amplify, Game) {
    return function PlayerQuantityViewModel() {
    	var self = this;
    	self.visible = ko.observable(true);
    	self.game = ko.observable(new Game());
	
    	self.quantitySelected = function() {
    		self.visible(false);
    		amplify.publish('PlayerQuantitySelected', self.game());
    	}
    }
});
