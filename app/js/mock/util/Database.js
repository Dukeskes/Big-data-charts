var Database = {};
var step = 0;
Database.users = [
	new User(1, 'dukes', '123'),
	new User(2, 'admin', '123'),
	new User(3, 'test', '123')
];

Database.day1 = [];
Database.day7 = [];
Database.day30 = [];
Database.dayAll = [];

(function _initDay1() {
	for (var i = 0; i < RandomData.int(20, 40); i++) {
		Database.day1.push(
			new Response(
				step,
				i,
				RandomData.substractMinutes(step),
				RandomData.double(0, 2),
				RandomData.response(),
				RandomData.success(),
				0,
				null,
				null
			));
		step++;
	}
})();

(function _initDay7() {
	Database.day7 = Database.day1;
	for (var i = 0; i < RandomData.int(30, 40); i++) {
		Database.day7.push(
			new Response(
				step,
				i,
				RandomData.substractMinutes(step),
				RandomData.double(0, 2),
				RandomData.response(),
				RandomData.success(),
				0,
				null,
				null
			));
		step++;
	}
})();

(function _initDay30() {
	Database.day30 = Database.day7;
	for (var i = 0; i < RandomData.int(30, 50); i++) {
		Database.day30.push(
			new Response(
				step,
				i,
				RandomData.substractMinutes(step),
				RandomData.double(0, 2),
				RandomData.response(),
				RandomData.success(),
				0,
				null,
				null
			));
		step++;
	}
})();

(function _initDayAll() {
	Database.dayAll = Database.day30;
	for (var i = 0; i < RandomData.int(50, 60); i++) {
		Database.dayAll.push(
			new Response(
				step,
				i,
				RandomData.substractMinutes(step),
				RandomData.double(0, 2),
				RandomData.response(),
				RandomData.success(),
				0,
				null,
				null
			));
		step++;
	}
})();


Database.byYears = [
	{
		"year": "1950",
		"value": -0.307
	},
	{
		"year": "1951",
		"value": -0.168
	},
	{
		"year": "1952",
		"value": -0.073
	},
	{
		"year": "1953",
		"value": -0.027
	},
	{
		"year": "1954",
		"value": -0.251
	},
	{
		"year": "1955",
		"value": -0.281
	},
	{
		"year": "1956",
		"value": -0.348
	},
	{
		"year": "1957",
		"value": -0.074
	},
	{
		"year": "1958",
		"value": -0.011
	},
	{
		"year": "1959",
		"value": -0.074
	},
	{
		"year": "1960",
		"value": -0.124
	},
	{
		"year": "1961",
		"value": -0.024
	},
	{
		"year": "1962",
		"value": -0.022
	},
	{
		"year": "1963",
		"value": 0
	},
	{
		"year": "1964",
		"value": -0.296
	},
	{
		"year": "1965",
		"value": -0.217
	},
	{
		"year": "1966",
		"value": -0.147
	},
	{
		"year": "1971",
		"value": -0.19
	},
	{
		"year": "1972",
		"value": -0.056
	},
	{
		"year": "1973",
		"value": 0.077
	},
	{
		"year": "1974",
		"value": -0.213
	},
	{
		"year": "1975",
		"value": -0.17
	},
	{
		"year": "1976",
		"value": -0.254
	},
	{
		"year": "1977",
		"value": 0.019
	},
	{
		"year": "1978",
		"value": -0.063
	},
	{
		"year": "1979",
		"value": 0.05
	},
	{
		"year": "1980",
		"value": 0.077
	},
	{
		"year": "1981",
		"value": 0.12
	},
	{
		"year": "1982",
		"value": 0.011
	},
	{
		"year": "1983",
		"value": 0.177
	},
	{
		"year": "1989",
		"value": 0.104
	},
	{
		"year": "1990",
		"value": 0.255
	},
	{
		"year": "1991",
		"value": 0.21
	},
	{
		"year": "1992",
		"value": 0.065
	},
	{
		"year": "1993",
		"value": 0.11
	},
	{
		"year": "1994",
		"value": 0.172
	},
	{
		"year": "1995",
		"value": 0.269
	},
	{
		"year": "1996",
		"value": 0.141
	},
	{
		"year": "1997",
		"value": 0.353
	},
	{
		"year": "1998",
		"value": 0.548
	},
	{
		"year": "1999",
		"value": 0.298
	},
	{
		"year": "2000",
		"value": 0.267
	},
	{
		"year": "2001",
		"value": 0.411
	},
	{
		"year": "2002",
		"value": 0.462
	},
	{
		"year": "2003",
		"value": 0.47
	},
	{
		"year": "2004",
		"value": 0.445
	},
	{
		"year": "2005",
		"value": 0.47
	}
];