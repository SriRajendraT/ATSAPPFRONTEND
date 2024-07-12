import { Time } from "@angular/common";

export class REQUIREMENT {
    requirementid:number;
    requirementtitle:string;
    requirementdesc:string;
    requirementcd:Date;
    requirementct:Time;
    requirementud:Date;
    requirementut:Time;
    requirementmaxrate:number;
    requirementloccity:number;
    requirementwn:number;
    requirementhybridtype:number;
    requirementimplementation:number;
    requirementclient:number;
    requirementlocstate:number;
    requirementloccountry:number;
}

export class RequirementExt extends REQUIREMENT {
    requirementloccityname:string;
    requirementlocstatename:string;
    requirementloccountryname:string;
    requirementwnname:string;
    requirementhybridtypename:string;
    requirementimplementationname:string;
    requirementclientname:string;
}