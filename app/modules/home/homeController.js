'use strict';

export default class HomeController{
	constructor($scope){
		'ngInject';
		this.items = [{
			id: 1,
			text: 'Hello'
		}];

		this.person = {
			name: 'John'
		};

		this.name = 'HomeControllers Name';

		setTimeout(()=>{
			this.name = 'NAME UPDATED';
			$scope.$apply();
		}, 2000);


		this.graphData = [10, 25, 30, 10, 25, 30, 30];
	}

	addItem(text){
		console.log('text: ', text);
		// this.items.push({
		// 	text: text
		// });

		// this.text = '';
	}

	addValue(value){
		this.graphData.push(+value);
		this.newValue = '';
	}

	showPersonName(name){
		this.name = name + '  changed from controller';
		console.log('showPersonName: ', name);
	}
}