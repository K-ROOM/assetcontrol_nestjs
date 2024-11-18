export class CreateCheckperiodDetailDto {
    id: int;
    status: boolean;
    checkperiod: {
        halfName: string;
        workYear: string;
    }
}
