var init_friend_lookup;

init_friend_lookup = function() {
	var form = $('#friend-lookup-form');

	$(form).on('ajax:before', function(event, data, status) {
		show_spinner();
	})

	$(form).on('ajax:after', function(event, data, status) {
		hide_spinner();
	})

	$(form).on('ajax:success', function(event, data, status) {
		$('#friend-lookup').replaceWith(data);
		init_friend_lookup();
	})

	$(form).on('ajax:error', function(event, xhr, status, error) {
		hide_spinner();
		$('#friend-lookup-results').replaceWith(' ');
		$('#friend-lookup-errors').replaceWith('Person was not found');
	})
}

$(function() {
    init_friend_lookup();
})
