import { Employee } from "../Model/Employee";

export class EmployeeService
{
    public EmployeeDetails():Employee
    {
        var emp= new Employee();
        emp.EmpId = 123;
        emp.EmpName="Amit Kakkar";
        return emp;
    }
}