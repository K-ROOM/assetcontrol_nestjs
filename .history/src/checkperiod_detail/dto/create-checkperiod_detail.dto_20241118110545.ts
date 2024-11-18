export class CreateCheckperiodDetailDto {
    edp_No: string;
    status: boolean;
    checkperiod: {
        halfName: string;
        workYear: string;
    }
}
