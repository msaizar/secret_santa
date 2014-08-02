define(['knockout', 'pager', 'game/models/Game'], function(ko, pager, Game) {
    return function MainViewModel() {
    	var self = this;
    	self.game = ko.observable(new Game());
        self.game().createEmptyPlayers();
        self.game().randomizeGifts();
	
        
        self.randomizeAgain = function() {
            self.game().randomizeGifts();
        }
        	
    	self.playerNamesSelected = function() {
            pager.navigate('#!/result');
    		self.randomizeAgain();
    	}
        
    	self.quantitySelected = function() {
            pager.navigate('#!/playernames');
            self.game().createEmptyPlayers();
            
    	}
        
        
	
    }
});