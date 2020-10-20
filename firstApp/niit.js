var employee = /** @class */ (function () {
    function employee(code) {
        this.code = code;
    }
    employee.prototype.Display = function () {
        console.log(this.code);
    };
    return employee;
}());
var obj = new employee(2);
obj.Display();
