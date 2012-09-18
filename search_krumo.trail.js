(function ($) {

// Written by
// Bram ten Hove, bramth@goalgorilla.com
// Daniel Beeke, daniel@goalgorilla.com

// Explain link in query log
Drupal.behaviors.search_krumo_trail = {
  attach: function() {

  	$('.krumo-element:not(".processed")').addClass('processed').append(Drupal.t('<span class="krumo-get-path"><a href="#">Get path</a></span>'));

  	// The function to return the path
		$('.krumo-get-path').click( function(){
			// Function for getting a path to an element in php
			var pathItems = [];
			var parent = $(this).parents('.krumo-root');
			var krumoIndex = parent.index('.krumo-root');

			// Array which will hold all the pieces of the trail
			var currentItem = ['Tail', $(this).parent().children('.krumo-name').text()];
			// Last item
			pathItems.push(currentItem);

			// Filling the trail array
			$(this).parents('.krumo-nest').each(function(i) {
				var elType = $(this).prev('.krumo-element').children('.krumo-type').text().toString().split(' ');
				if (elType[0] == 'Object') {
					var currentItem = ['Object', $(this).prev('.krumo-element').children('.krumo-name').text()];
				} else if (elType[0] == 'Array,') {
					var currentItem = ['Array', $(this).prev('.krumo-element').children('.krumo-name').text()];
				}
				pathItems.push(currentItem);
			});

			// The string which will be returned
			var trail = '';
			// For each item in the trail array
	  	$.each(pathItems, function(i) {
				if (pathItems[i +1] && pathItems[i +1][0] == 'Array') {
					if (parseInt($(this)[1])) {
						trail = "[" + $(this)[1] + "]" + trail;
					} else {
						trail = "['" + $(this)[1] + "']" + trail;
					}
				} else if (pathItems[i +1] && pathItems[i +1][0] == 'Object') {
					trail = "->" + $(this)[1] + trail;
				} else {
					// We are at the first item
					if (Drupal.settings.searchKrumo !== undefined && Drupal.settings.searchKrumo.var[krumoIndex] !== undefined) {
						trail = Drupal.settings.searchKrumo.var[krumoIndex] + trail;
					}
					else {
						trail = '$var' + trail;
					}
				}
			});
			$(this).addClass('hidden').hide().before('<input id="trail-input" value="' + trail + '" />');
			$('#trail-input').select().blur( function(){
				$(this).remove();
				$('.krumo-get-path.hidden').show();
			});
			return false;
  	});
  }
}

})(jQuery);
