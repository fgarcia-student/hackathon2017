$(document).ready(() => {
	const URL = "http://api.reimaginebanking.com";
	const KEY = "e7150808ddce2e6692381d1667d36855"; //api key to access data on cap1 end point

	const CUST_1 = "5a063c1ca73e4942cdafe87a";
	const CUST_2 = "5a063c1da73e4942cdafe87b";
	const CUST_3 = "5a063c1ca73e4942cdafe87c";

function getCustomerAccountInfoCUST_1() {

	$.ajax({
		type: "GET",
		url: `${URL}/customers/${CUST_1}/accounts?key=${KEY}`,
		success: function(arg) {
			console.log(arg)
		}
	});
}

function makeAccountForCUST_1() {
	
	// $.ajax({
	// 	type: "POST",
	// 	url: `${URL}/customers/${CUST_1}/accounts?key=${KEY}`,
	// 	body: 
	// 	success: function(argument) {
	// 		// body...
	// 	}
	// })
}

getCustomerAccountInfoCUST_1();
});