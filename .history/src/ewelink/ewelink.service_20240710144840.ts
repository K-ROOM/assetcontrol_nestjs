import { Injectable } from '@nestjs/common';
import EWeLinkApi from 'ewelink-api';

@Injectable()
export class EWeLinkService {
    private readonly ewelink: EWeLinkApi;

    constructor() {
        this.ewelink = new EWeLinkApi({
            email: 'p.ronakorn@nipponexpress-necl.co.th',
            password: 'abc_123456',
        });
    }

    async getTemperature(deviceId: string) {
        try {
            const devices = await this.ewelink.getDeviceCurrentTemperature(deviceId);
            return devices;
        } catch (error) {
            throw new Error('Failed to fetch devices from eWeLink');
        }
    }
}
