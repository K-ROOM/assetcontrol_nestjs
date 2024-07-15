export class CreateIpHeaderDto {
    ip1: number;
    ip2: number;
    ip3: number;
    ip4: number;
    branchCode: string;
    sectionCode: string;
    subSectionCode: string;
    vLanNo: string;
    status: string;
    assetHeader: {
        edp_No: string;
    }
}
