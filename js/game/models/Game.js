define(['jquery', 'knockout', 'game/models/Gift'], function($, ko, Gift) {
    return function Game() {
    	var self = this;
    	self.playerQuantity = ko.observable(2);
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
	
    	self.randomizeGifts = function() {
    		self.gifts([]);
    		self.playersGifted = [];
    		self.playersGifting = [];
    		for (var i = 0; i < self.players().length; i++) {
    			var obj = self.players()[i];
    			var index = i;
    			while (index == i || $.inArray(index, self.playersGifted)  != -1) {
    				index = self.getRandomInt(0, self.playerQuantity() - 1);
    			}
    			self.playersGifting.push(i);
    			self.playersGifted.push(index);
    			var gift = new Gift(obj, self.players()[index]);
    			self.gifts.push(gift);
    		};
    	}

    }

});

