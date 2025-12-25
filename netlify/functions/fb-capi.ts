import { Handler } from '@netlify/functions';
import crypto from 'crypto';

// CONFIGURATION - REPLACE WITH YOUR ACTUAL CREDENTIALS
// NOTE: Ideally these should be environment variables (process.env.FB_ACCESS_TOKEN)
const FB_ACCESS_TOKEN = 'EAAbIFSO9SZBMBQSJlqkavB8lYgjCA090RrvqlSGELJiLjduQVHg78d3mScu7V7tzhURBZCdoGcm8IRvwNBhQaG48e30jSZCGaJXUTQhcfVmeaP8ZBsMo1aIBb2GtaaE5IhsIW960MbggTZBJQ0OdmHcsOBx5xRyNbPeDFZCQMn15dmcG2eMYZBZAZCfolaj7AbQZDZD';
const FB_PIXEL_ID = '1487200669007426';

const hashData = (data: string) => {
    if (!data) return null;
    return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
};

export const handler: Handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const body = JSON.parse(event.body || '{}');
        const { eventName, eventId, eventSourceUrl, userData, customData } = body;

        if (!eventName || !userData) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
        }

        const currentTimestamp = Math.floor(Date.now() / 1000);

        // Construct the payload for FB CAPI
        const payload = {
            data: [
                {
                    event_name: eventName,
                    event_time: currentTimestamp,
                    event_id: eventId, // Critical for deduplication
                    event_source_url: eventSourceUrl,
                    action_source: 'website',
                    user_data: {
                        em: [hashData(userData.email)],
                        ph: [hashData(userData.phone)],
                        fn: [hashData(userData.firstName)],
                        ln: [hashData(userData.lastName)],
                        ct: [hashData(userData.city)],
                        st: [hashData(userData.state)],
                        zp: [hashData(userData.zip)],
                        country: [hashData('br')], // Hardcoded BR for this project context
                        client_ip_address: event.headers['client-ip'] || event.headers['x-forwarded-for'],
                        client_user_agent: event.headers['user-agent'],
                        // fbp and fbc cookies should be passed if available
                        fbp: userData.fbp,
                        fbc: userData.fbc
                    },
                    custom_data: customData
                }
            ],
            // test_event_code: 'TEST20364' // Optional: for testing in FB Events Manager
        };

        // Send to Facebook Graph API
        const response = await fetch(`https://graph.facebook.com/v19.0/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('FB API Error:', data);
            return {
                statusCode: response.status,
                body: JSON.stringify({ error: 'Failed to send event to FB', details: data })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, fb_trace_id: data.fbtrace_id })
        };

    } catch (error: any) {
        console.error('Function Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error', message: error.message })
        };
    }
};
