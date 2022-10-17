$(function() {

	// left menu
		$('#toggle').on('click', function() {
			$(this).toggleClass('on');
			$('.right-menu').toggleClass('showMenu');

			if($('.right-menu').hasClass('showMenu')) {
				$('.close-arrow').on('click', function() {
					$('.right-menu').removeClass('showMenu');
					$('#toggle').removeClass('on');
				})

			}
		});


		//Toggle submenu

		$( '.menu-expand' ).on( 'click', function() {
			if ( !( $( this ).hasClass( 'menu-active' ) ) ) {
				$( this ).addClass( 'menu-active' );
				$( '.right-menu' ).addClass( 'right-menu-mob' );
			} else {
				$( this ).removeClass( 'menu-active' );
				$( '.right-menu' ).removeClass( 'right-menu-mob' );
			}
		});


	//Clone nav

		$(".header-nav").clone().appendTo('.menu-for-mob');

	


});

