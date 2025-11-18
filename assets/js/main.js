/*
	Read Only by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$nav = $('#nav'),
		$navToggle = $('#apple-nav-toggle'),
		$wrapper = $('#wrapper');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '1025px',  '1280px' ],
			medium:   [ '737px',   '1024px' ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Tweaks/fixes.

		// Polyfill: Object fit.
			if (!browser.canUse('object-fit')) {

				$('.image[data-position]').each(function() {

					var $this = $(this),
						$img = $this.children('img');

					// Apply img as background.
						$this
							.css('background-image', 'url("' + $img.attr('src') + '")')
							.css('background-position', $this.data('position'))
							.css('background-size', 'cover')
							.css('background-repeat', 'no-repeat');

					// Hide img.
						$img
							.css('opacity', '0');

				});

			}

	// Navigation enhancements.
			var $nav_a = $nav.find('a'),
				closeToggle = function() {
					if ($navToggle.length && $navToggle.is(':checked')) {
						$navToggle.prop('checked', false);
						$body.removeClass('nav-open');
					}
				};

			if ($navToggle.length)
				$navToggle.on('change', function() {
					$body.toggleClass('nav-open', $(this).is(':checked'));
				});

		$nav_a
			.addClass('scrolly')
			.on('click', function() {

				var $this = $(this);

				// External link? Close toggle and bail.
					if ($this.attr('href').charAt(0) != '#') {
						closeToggle();
						return;
					}

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link and lock.
					$this
						.addClass('active')
						.addClass('active-locked');

				// Close the mobile drawer if it's open.
					closeToggle();

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '5vh',
						bottom: '5vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() {

				return $header.outerHeight() || 0;

			}
		});

})(jQuery);
