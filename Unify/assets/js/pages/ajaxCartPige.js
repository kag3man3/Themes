	/*
	** nopCommerce ajax cart implementation
	*/


	var AjaxCart = {
		loadWaiting: false,
		usepopupnotifications: false,
		topcartselector: '',
		topwishlistselector: '',
		flyoutcartselector: '',

		init: function (usepopupnotifications, topcartselector, topwishlistselector, flyoutcartselector) {
			this.loadWaiting = false;
			this.usepopupnotifications = usepopupnotifications;
			this.topcartselector = topcartselector;
			this.topwishlistselector = topwishlistselector;
			this.flyoutcartselector = flyoutcartselector;
		},

		//add a product to the cart/wishlist from the catalog pages
		addproducttocart_catalog: function (urladd) {

			$.ajax({
				cache: false,
				url: urladd,
				type: 'post',
				success: this.success_process,
				complete: this.resetLoadWaiting,
				error: this.ajaxFailure
			});
		},

		
	   

		success_process: function (response) {
			if (response.updatetopcartsectionhtml) {
				$(AjaxCart.topcartselector).html(response.updatetopcartsectionhtml.replace("(", "").replace(")", ""));
			}
			if (response.updatetopwishlistsectionhtml) {
				$(AjaxCart.topwishlistselector).html(response.updatetopwishlistsectionhtml);
			}
			if (response.updateflyoutcartsectionhtml) {
				$(AjaxCart.flyoutcartselector).replaceWith(response.updateflyoutcartsectionhtml);
			}
			if (response.message) {
				//display notification
				if (response.success == true) {
				    //success
				    open('./onepagecheckout');
					if (AjaxCart.usepopupnotifications == true) {
						displayPopupNotification(response.message, 'success', true);
					}
				}
				else {
					//error
					if (AjaxCart.usepopupnotifications == true) {
						displayPopupNotification(response.message, 'error', true);
					}
					else {
						//no timeout for errors
						displayBarNotification(response.message, 'error', 0);
					}
				}
				return false;
			}
			if (response.redirect) {
				location.href = response.redirect;
				return true;
			}
			//return false;
		},

		ajaxFailure: function () {
			alert('Failed to add the product. Please refresh the page and try one more time.');
		}
	};