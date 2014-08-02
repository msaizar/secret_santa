define(['jquery', 'knockout', 'game/models/Gift', 'game/models/Player'], function($, ko, Gift, Player) {
    return function Game() {
    	var self = this;
    	self.playerQuantity = ko.observable(3);
    	self.players = ko.observableArray([]);
    	self.gifts = ko.observableArray([]);
    	self.playersGifted = [];
    	self.playersGifting = [];
	
    	self.setPlayerQuantity = function(data) {
    		self.playerQuantity(data);
    	}
	
    	self.addPlayer = function(player) {
    		self.players.push(player);
    	}
	
    	self.removePlayer = function(player) {
    		self.players.remove(player);
    	}
	
    	self.removeAllPlayers = function() {
    		self.players([]);
    	}
	
    	self.getRandomInt = function(min, max) {
    		return Math.floor(Math.random() * (max - min + 1)) + min;
    	}
        
    	self.createEmptyPlayers = function() {	
            self.players([]);	
    		for (var i = 0; i < self.playerQuantity(); i++ ) {
    			var player = new Player('Player ' + (i+1));			
    			self.addPlayer(player);
    		}
    	}
        
	
    	self.randomizeGifts = function() {
            
    		self.gifts([]);
    		self.playersGifted = [];
    		self.playersGifting = [];
    		for (var i = 0; i < self.players().length; i++) {
    			var obj = self.players()[i];
    			var index = i;
                if (i == self.players().length -1 && ($(self.playersGifted).not(self.playersGifting).length == 0 && $(self.playersGifting).not(self.playersGifted).length == 0)) {
                    self.randomizeGifts();
                }
                else {
        			while (index == i || $.inArray(index, self.playersGifted)  != -1) {
        				index = self.getRandomInt(0, self.playerQuantity() - 1);
        			}
        			self.playersGifting.push(i);
        			self.playersGifted.push(index);
        			var gift = new Gift(obj, self.players()[index]);
        			self.gifts.push(gift);
                }
                
    		};
    	}

    }

});


