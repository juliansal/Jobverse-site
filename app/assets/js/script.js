$(document).ready(function() {
		var pipsRange = document.getElementById('pips-range');
		var range_all_sliders = {
			'min': [5, 5 ],
			'25%': [10, 10 ],
			'50%': [15, 10 ],
			'75%': [25,25],
			'max': [ 50 ]
		};

		noUiSlider.create(pipsRange, {
 			range: range_all_sliders,
			start: 0,
			pips: {
				mode: 'range',
				density: 3
			}

		});
		
		var $miles = $(".noUi-value");
		
		$miles.prepend("Within ");
		$miles.append(" miles");
		
		$("#advancedBtn").on("click", function() {
			$("#expanded-form-fields").toggle();
		});


		
		
});