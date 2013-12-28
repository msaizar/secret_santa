define(['knockout', 'amplify', 'game/models/Game'], function(ko, amplify, Game) {
    return function GiftSolutionViewModel() {
    	var self = this;
    	self.visible = ko.observable(false);
    	self.game = ko.observable(new Game());
	
	
    	amplify.subscribe('PlayerNamesSelected', function(data) {
    		self.game(data);
    		self.game().randomizeGifts();
    		self.visible(true);
    	});
        
        self.randomizeAgain = function() {
            self.game().randomizeGifts();
        }
        
        self.differentNames = function() {
            self.visible(false);
            amplify.publish('PlayerQuantitySelected', self.game());
        }
        
        self.newGame = function() {
            self.visible(false);
            
            amplify.publish('PlayerQuantityView');
        }
        
	
    }
});