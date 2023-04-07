document.getElementById("auto-fill").addEventListener("click", () => {
	/* Auto fill form */
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			rad_1_11: document.getElementById('t-st').value,
			rad_1_12: document.getElementById('t-w').value,
			rad_2_11: document.getElementById('c-st').value,
			rad_2_12: document.getElementById('c-w').value,
			rad_0_15: document.getElementById('sug').value,
		}, function(response) {
			console.log(response.status);
		});
	});
});

document.getElementById("reset-fields").addEventListener("click", () => {
	/* Reset extension form values */
	document.getElementById('t-st').value = '';
	document.getElementById('t-w').value = '';
	document.getElementById('c-st').value = '';
	document.getElementById('c-w').value = '';
	document.getElementById('sug').value = '';
});


document.getElementById("save").addEventListener("click", () => {
	chrome.storage.sync.set({
		rad_1_11: document.getElementById('t-st').value,
		rad_1_12: document.getElementById('t-w').value,
		rad_2_11: document.getElementById('c-st').value,
		rad_2_12: document.getElementById('c-w').value,
		rad_0_15: document.getElementById('sug').value,
	}, function() {
		document.getElementById('saved').value="Saved!";
		console.log("Saved!");
	});
});

document.getElementById("load").addEventListener("click", () => {
	chrome.storage.sync.get([
		'rad_1_11',
		'rad_1_12',
		'rad_2_11',
		'rad_2_12',
		'rad_0_15',
	], function(result) {
		document.getElementById('t-st').value = result.rad_1_11;
		document.getElementById('t-w').value = result.rad_1_12;
		document.getElementById('c-st').value = result.rad_2_11;
		document.getElementById('c-w').value = result.rad_2_12;
		document.getElementById('sug').value = result.rad_0_15;
	});
});
