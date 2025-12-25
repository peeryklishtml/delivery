import { v4 as uuidv4 } from 'uuid';

// Initialize the Pixel
export const initFacebookPixel = () => {
    // Only run on client
    if (typeof window === 'undefined') return;

    // Use your actual Pixel ID here or strictly rely on the backend one for CAPI, 
    // but client-side pixel needs the ID to initialize `fbq`.
    // Ideally this matches the one in the backend function.
    const PIXEL_ID = 'SEU_ID_DO_PIXEL_AQUI';

    (function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
};

// Frontend Track Event (Pixel + CAPI)
export const trackFacebookEvent = async (eventName: string, userData: any = {}, customData: any = {}) => {
    if (typeof window === 'undefined') return;

    // Generate a unique Event ID for deduplication
    const eventId = uuidv4();

    // 1. Client-side Pixel Tracking
    if (window.fbq) {
        window.fbq('track', eventName, customData, { eventID: eventId });
    }

    // 2. Server-side CAPI Tracking (via Netlify Function)
    try {
        // Collect browser data for better matching
        const fbp = getCookie('_fbp');
        const fbc = getCookie('_fbc');

        await fetch('/.netlify/functions/fb-capi', {
            method: 'POST',
            body: JSON.stringify({
                eventName,
                eventId,
                eventSourceUrl: window.location.href,
                userData: {
                    ...userData,
                    fbp,
                    fbc
                },
                customData
            })
        });
    } catch (e) {
        console.error('Failed to send CAPI event', e);
    }
};

// Helper to get cookies
function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
}

// Add types to window
declare global {
    interface Window {
        fbq: any;
    }
}
