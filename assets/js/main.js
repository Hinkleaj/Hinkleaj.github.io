/*
	Dopetrope by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/




(function($) {

	var	$window = $(window),
		$body = $('body');


	// Get the modal
		var modal = document.getElementById("image-modal");
		var modalImg = document.getElementById("modal-image");
		var closeModal = document.getElementById("close-modal");

	// Add click event to each image with the 'zoomable-image' class
		var images = document.getElementsByClassName("zoomable-image");
		for (var i = 0; i < images.length; i++) {
			images[i].onclick = function () {
				modal.style.display = "flex"; // Display the modal
				modalImg.src = this.getAttribute("data-image"); // Set the modal image to clicked image's src
			};
		}

	// Close the modal when the "X" button is clicked
		closeModal.onclick = function () {
			modal.style.display = "none";
		};

	// Close the modal when clicking anywhere outside the image
		window.onclick = function (event) {
			if (event.target === modal) {
				modal.style.display = "none";
			}
		};


		
	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center'
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);