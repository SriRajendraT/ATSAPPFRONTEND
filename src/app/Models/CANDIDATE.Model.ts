import { Time } from "@angular/common";

export class CANDIDATE {
    candidateid:number;
    candidatefullname:string;
    candidatecd:Date;
    candidatect:Time;
    candidateud:Date;
    candidateut:Time;
    candidateemail:string;
    candidatephone:string;
    candidatevisa:number;
    candidatecountry:number;
    candidatestate:number;
    candidatecity:number;
    candidateaddress:string;
    candidategender:number;
    candidatetaxterm:number;
    candidateemployer:number;
    candidaterate:number;
    visadateofissue:Date;
    visavalidupto:Date;
}

export class CandidateExt extends CANDIDATE {
    candidategendername:string;
    candidateloccountryname:string;
    candidatelocstatename:string;
    candidateloccityname:string;
    candidatetaxtermname:string;
    candiateemployername:string;
    candidatevisaname:string;
}