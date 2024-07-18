import { VISA } from "./VISA.Model";

export class REQUIREDVISA {
    requiredvisaid:number;
    requirementid:number;
    visaid:number;
}

export class REQUIREDVISAExt extends REQUIREDVISA {
    requirmenttitle:string;
    visaname:string;
}

export class ReqVisa {
    requiredVisaExt:REQUIREDVISAExt;
    visasList:VISA[];
}