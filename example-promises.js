// // CALLBACKS
// function getTempCallback (location, callback) {
// 	callback(undefined, 78); //1st callback = success state
// 	callback('City not found.'); //2nd callback = error state
// }

// getTempCallback('Philadelphia', function (err, temp) {
// 	if (err) {
// 		console.log('error', err);
// 	} else {
// 		console.log('success', temp);
// 	}
// });

// // PROMISES
// function getTempPromise (location) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			resolve(79);
// 			reject('City not found.');
// 		}, 1000);
// 	});
// }

// getTempPromise('Philadelphia').then(function (temp) {
// 	console.log('promise success', temp);
// }, function (err) {
// 	console.log('promise error', err);
// });

// Challenge area

function addPromise (a, b) {
	return new Promise(function (resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		} else {
			reject('Error: must be numbers');
		}
	});
}

addPromise(2, 'asdf').then(function (sum) {
	console.log('Your sum is', sum);
}, function (err) {
	console.log(err);
});