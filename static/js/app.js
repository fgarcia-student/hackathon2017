$(document).ready(() => {
	const URL = "http://api.reimaginebanking.com";
	const KEY = "e7150808ddce2e6692381d1667d36855"; //api key to access data on cap1 end point

	const CUST_2 = "5a063c1da73e4942cdafe87b"; //2 accounts
	const CUST_2_ACCT_ID = "5a063c1ea73e4942cdafe87d";
	const TRANSFER_ACCT = "5a063c1ea73e4942cdafe87e";

function getCustomerAccountInfo(id) {
	id = CUST_2;
	require(['account'], function(account) {
		let custAcct = account.initWithKey(KEY);
		console.log(custAcct.getAllByCustomerId(id));
	});
}

function getCustomerBalanceInfo(id) {
	id = CUST_2;
	require(['account'], function(account) {
		let custAcct = account.initWithKey(KEY);
		let accts = custAcct.getAllByCustomerId(id);
		let fin = [];
		for (var i = accts.length - 1; i >= 0; i--) {
			fin.push({"name": accts[i].nickname, "balance": accts[i].balance});
		}
		console.log(fin);
	});
}

function getCustomerBillsInfo(id) {
	id = CUST_2;
	require(['bills'], function(bills) {
		let custBill = bills.initWithKey(KEY);
		let b = custBill.getAllByCustomerId(id);
		console.log(b);
	});
}

function makeAccount(id) {
	id = CUST_2;
	require(['account'], function(account) {
		let newacct = {
		  type: "Credit Card",
		  nickname: "EZbank",
		  rewards: 0,
		  balance: 0,
		  account_number: "1234567890123456"
		};
		let custAcct = account.initWithKey(KEY);
		let done = custAcct.createAccount(id,JSON.stringify(newacct));
		console.log(done);
	});
}

function makeTransfer(id) {
	id = CUST_2;
	let obj = {
	  "medium": "balance",
	  "payee_id": TRANSFER_ACCT,
	  "amount": 0.01,
	  "transaction_date": "2017-11-11",
	  "description": "string"
	};
	$.ajax({
		type: "POST",
		url: `${URL}/accounts/${CUST_2_ACCT_ID}/transfers?key=${KEY}`,
		data: JSON.stringify(obj),
		contentType: 'application/json',
		success: function(arg) {
			console.log(arg);
		}
	});
}

function makeWithdrawal(id) {
	id = CUST_2;
	let obj = {
	  "medium": "balance",
	  "transaction_date": "2017-11-11",
	  "amount": 0.01,
	  "description": "string"
	};
	require(['withdrawal'], function(withdrawal) {
		let custWith = withdrawal.initWithKey(KEY);
		console.log(custWith.createWithdrawal(CUST_2_ACCT_ID,JSON.stringify(obj)));
		
	});
}

function makeLoan(id) {
	id = CUST_2;
	let loan = {
		"type": "home",
		"status": "pending",
		"credit_score": 687,
		"monthly_payment": 25,
		"amount": 100,
		"description": "ksdjfjksjdk"
	};

	$.ajax({
		type: "POST",
		url: `${URL}/accounts/${CUST_2_ACCT_ID}/loans?key=${KEY}`,
		data: JSON.stringify(loan),
		contentType: 'application/json',
		success: function(arg) {
			console.log(arg);
		}
	});
}
makeTransfer();
makeWithdrawal();
makeLoan();
makeAccount();
getCustomerAccountInfo();
getCustomerBalanceInfo();
getCustomerBillsInfo();
});