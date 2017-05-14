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