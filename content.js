// window.onload = () => {
// 	const button = document.createElement('button');
// 	button.id="alterkgpButton";
// 	button.textContent = "ALTER-KGP"

// 	document.querySelector('[aria-label="Account"]').append(button);

// 	button.addEventListener('click', () => enableDarkMode());
// }


// function enableDarkMode() {
// 	window.location.href="http://www.alter-kgp.online"
// }
//oi9244e8
window.onload = () => {
	
	//document.body.style.backgroundColor="black";

	
	
	const button = document.createElement('button');
	button.id="darkModeButton";
	button.textContent = "DO IT DARK"
	

	const input = document.createElement('input');
	input.type = 'checkbox';
	input.id = 'darkSetting'

	document.querySelector('body').prepend(button, input, 'Auto apply?');
	document.getElementById('darkModeButton').style.height="100px";	
	document.getElementById('darkModeButton').style.width="100px";	
	document.getElementById('darkModeButton').style.color="white";
	document.getElementById('darkModeButton').style.backgroundColor="black";	
	document.getElementById('darkModeButton').style.size="40px";	

	document.getElementById('darkSetting').style.height="100px";	
	document.getElementById('darkSetting').style.width="100px";	
	document.getElementById('darkSetting').style.color="white";
	document.getElementById('darkSetting').style.backgroundColor="black";
	document.getElementById('darkSetting').style.size="40px";

	button.addEventListener('click', () => enableDarkMode());
	input.addEventListener('click', () => storeSetting());

	checkSetting();
}

function checkSetting() {
	chrome.storage.local.get(['enabled'], result => {
		const isEnabled = result.enabled;
		console.log(isEnabled)

		document.getElementById('darkSetting').checked = isEnabled;

		if(isEnabled) {
			enableDarkMode();
		}
	})
}

function storeSetting() {
	const isEnabled = document.getElementById('darkSetting').checked;
	const setting = { enabled: isEnabled };

	chrome.storage.local.set(setting, () => {
		console.log('stored', setting);
	})
}

function enableDarkMode() {
	let nodes = document.querySelectorAll('div, body, input, div > a, pre')
	for(let node of nodes)
		node.style.backgroundColor="#111111";

	let words = document.querySelectorAll('div, body, input, div > a')
	for(let word of words)
		word.style.color="white"; 
}


