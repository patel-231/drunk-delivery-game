// src/deviceDetection.js

/**
 * Device Detection Utility
 * Automatically detects whether the user is on a mobile or desktop device.
 */

function detectDevice() {
    const userAgent = navigator.userAgent;
    if (/mobile/i.test(userAgent)) {
        return 'mobile';
    }
    return 'desktop';
}

// Export the function for use in other parts of the application
export default detectDevice;
