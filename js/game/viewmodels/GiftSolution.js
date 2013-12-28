define(['knockout', 'amplify', 'game/models/Game'], function(ko, amplify, Game) {
    return function GiftSolutionViewModel() {
    	var self = this;
    	self.visible = ko.observable(false);
    	self.game = ko.observable(new Game());
    	self.gifts = ko.observableArray([]);
	
	
    	amplify.subscribe('PlayerNamesSelected', function(data) {
    		self.game(data);
    		self.game().randomizeGifts();
    		self.visible(true);
    	});
	
    }
});