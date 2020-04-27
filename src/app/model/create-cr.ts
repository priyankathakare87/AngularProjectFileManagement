export interface CreateCr {
    crNo: string;
    crSerialNo: number;
    reqBy: string;
    ticketNo: number;
    component: string;
    priority: string;
    raisedon: string;
    crType: string;   // CR – Change Request, BF – Bug Fixing
    existingProcess: string;
    proposedProcess: string
}
