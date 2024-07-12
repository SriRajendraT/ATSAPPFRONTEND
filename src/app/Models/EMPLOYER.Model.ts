import { Time } from "@angular/common";

export class EMPLOYER {
    employeid:number;
    employername:string;
    employercd:Date;
    employerct:Time;
    employerud:Date;
    employerut:Time;
    employercompany:number;
    employeremail:string;
    employerphonenumber:string;
}

export class EmployerExt extends EMPLOYER {
    employercompanyname:string;
}