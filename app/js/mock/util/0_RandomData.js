var RandomData = {};

(function() {
	var _names = ["Piotr Piotrowski", "Edyta Kowalczyk", "Sabina Golonka", "Jan Kowalski"];
	var _responses = [403, 404, 500, 502, 503, 504, 200];

	RandomData.name = function() {
		return _getRandomItem(_names);
	};

	RandomData.int = function(begin, end) {
		return Math.floor(Math.random() * (end - begin + 1)) + begin;
	};
	RandomData.double = function(begin, end) {
		return Math.random() * (end - begin) + begin;
	};
	RandomData.bool = function() {
		return (Math.random() > 0.5);
	};
	RandomData.substractMinutes = function(minutes) {
		var newTime = new Date();
		var substractTimestamp = minutes * 60 * 1000;
		return newTime.setTime(newTime.getTime() - substractTimestamp);
	};
	RandomData.response = function(){
		var randomResult = RandomData.int(0, 90);
		if(randomResult >= _responses.length-1){
			randomResult = _responses.length-1;
		}
		return _responses[randomResult];
	};
	RandomData.success = function() {
		var randomResult = RandomData.int(0, 100);
		if(RandomData.int(0, 80) !== 0){
			randomResult = 1;
		}
		return randomResult;
	};

	function _getRandomItem(storage) {
		return storage[Math.floor(Math.random() * storage.length)];
	}
}());