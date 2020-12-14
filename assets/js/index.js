(function() {
	var dateDom = document.querySelector('.date');
	setInterval(function() {
		var date = new Date();
		var currDate = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
			+ ' ' + [date.getHours(), date.getMinutes(), date.getSeconds()].join(':');
		dateDom.innerText = currDate;
	}, 1e3);
})();