'use strict';

function getMessage(a, b) {
	//if a is boolean
	if(typeof a == 'boolean') {
		if (a) {
			return 'Я попал в ' + b;
		} else {
			return 'Я никуда не попал';
		}
	}

	//if a is a number
	if(typeof a == 'number') {
		return 'Я прыгнул на ' + (a * 100) + ' сантиметров';
	}

	//if a is an array and b not
	if(Array.isArray(a) && !Array.isArray(b)) {
		var numberOfSteps = 0;
		for(var i in a) {
			numberOfSteps += a[i];
		}
		return 'Я прошёл ' + numberOfSteps + ' шагов';
	}

	//if both a and b are arrays
	if(Array.isArray(a) && Array.isArray(b)) {
		var distancePath = 0;
		for(var i in a) {
			distancePath += (a[i] * b[i]);
		}
		return 'Я прошёл ' + distancePath + ' метров'
	} else {
		//if nothing of above
		return 'Переданы некорректные данные';
	}
}