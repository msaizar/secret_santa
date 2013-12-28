


requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/core',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        game: '../game',
    },
    shim: {
        "amplify": {
            deps: ["jquery"],
            exports: "amplify"
        }
    }
});

requirejs(['jquery', 'amplify', 'knockout', 'game/config', 'game/viewmodels/PlayerQuantity', 'game/viewmodels/PlayerNameSelection', 'game/viewmodels/GiftSolution'],
function   ($, amplify, ko, config, PlayerQuantityViewModel, PlayerNameSelectionViewModel, GiftSolutionViewModel) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
   	var playerQuantityViewModel = new PlayerQuantityViewModel();
   	ko.applyBindings(playerQuantityViewModel, document.getElementById(player_quantity_id));	

   	var playerNameSelectionViewModel = new PlayerNameSelectionViewModel();
   	ko.applyBindings(playerNameSelectionViewModel, document.getElementById(player_name_selection_id));	

   	var giftSolutionViewModel = new GiftSolutionViewModel();
   	ko.applyBindings(giftSolutionViewModel, document.getElementById(gift_solution_id));	
});

