import { Time } from "@angular/common";

export class SUBMISSION {
    submissionid:number;
    requirementid:number;
    candidateid:number;
    submissionstatusid:number;
    submissioncd:Date;
    submissionct:Time;
    submissionud:Date;
    submissionut:Time;
}

export class SubmissionExt extends SUBMISSION {
    requirementname:string;
    candidatename:string;
    submissionstatusname:string;
}