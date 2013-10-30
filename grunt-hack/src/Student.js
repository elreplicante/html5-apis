function Student(number){
	this.number = number;
}

Student.prototype.isFizz = function() {
	return this.number % 3 == 0 && this.number % 5 != 0;
};

Student.prototype.isBuzz = function() {
	return this.number % 5 == 0 && this.number % 3 != 0;
};

Student.prototype.isFizzBuzz = function() {
	return this.number % 5 == 0 && this.number % 3 == 0;
};
