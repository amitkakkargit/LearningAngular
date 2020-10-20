class employee
{
    code:number;
    constructor(code:number)
    {
        this.code=code;
    }
    Display():void
    {
        console.log(this.code);
    }
}
var obj=new employee(2);
obj.Display();