import { UAParser } from 'ua-parser-js';

export default function useIsDesktop() {
    const device = new UAParser(navigator.userAgent).getDevice().type;
    const isDesktop = device === undefined || !['wearable', 'mobile'].includes(device);

    return isDesktop;
}