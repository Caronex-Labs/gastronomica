import { json } from '@sveltejs/kit';
import { addToWaitlist } from '$lib/server/admin';

export async function POST({ request }) {
    try {
        const { email } = await request.json();
        
        // Basic email validation
        if (!email || !isValidEmail(email)) {
            return json({ success: false, error: 'Invalid email address' }, { status: 400 });
        }
        
        // Add to waitlist in Firestore
        const result = await addToWaitlist(email);
        
        if (result.success) {
            return json({ success: true });
        } else {
            return json({ success: false, error: 'Failed to add to waitlist' }, { status: 500 });
        }
    } catch (error) {
        console.error('Error processing waitlist request:', error);
        return json({ success: false, error: 'Server error' }, { status: 500 });
    }
}

// Email validation helper
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
} 