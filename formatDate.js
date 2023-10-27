function formatDuration(sec) {
	if (sec === 0) return 'now';
	let min = 0;
	let hour = 0;
	let day = 0;
	let year = 0;

	// Calculate years
	if (sec >= 31557600) {
		year = Math.floor(sec / 31557600);
		sec %= 31557600;
	}

	if (sec >= 86400) {
		day = Math.floor(sec / 86400);
		sec %= 86400;
	}

	if (sec >= 3600) {
		hour = Math.floor(sec / 3600);
		sec %= 3600;
	}

	if (sec >= 60) {
		min = Math.floor(sec / 60);
		sec %= 60;
	}

	console.log(year);
	console.log(day);
	console.log(hour);
	console.log(min);
	console.log(sec);

	// if (min === 0 && sec > 1) {
	// 	return sec === 1 ? `${sec} second` : `${sec} seconds`;
	// } else {
	// 	const minuteString =
	// 		min !== 0 ? (min === 1 ? `${min} minute` : `${min} minutes`) : null;
	// 	const secondString =
	// 		sec !== 0 ? (sec === 1 ? `${sec} second` : `${sec} seconds`) : null;

	// 	if (minuteString && secondString) {
	// 		return `${minuteString} and ${secondString}`;
	// 	} else {
	// 		return minuteString || secondString;
	// 	}
	// }

	return hour == 1 ? `${hour} hour` : `${hour} hours`;
}

console.log(formatDuration(7200));
