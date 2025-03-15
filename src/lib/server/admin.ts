import { getFirestore } from "firebase-admin/firestore";
import { env } from '$env/dynamic/private';
import pkg from 'firebase-admin';

try {
    pkg.initializeApp({
        credential: pkg.credential.cert({
            projectId: env.FB_PROJECT_ID,
            clientEmail: env.FB_CLIENT_EMAIL,
            privateKey: env.FB_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
    }); 
} catch (err: any) {
    if (!/already exists/u.test(err.message)) {
        console.error('Firebase Admin Error: ', err.stack)
    }
}

export const adminDB = getFirestore();

// Helper function to add email to waitlist
export async function addToWaitlist(email: string, feedback?: string) {
    try {
        const timestamp = new Date();
        const data: { email: string; timestamp: Date; feedback?: string } = {
            email,
            timestamp,
        };
        
        // Only add feedback if it exists and is not empty
        if (feedback && feedback.trim().length > 0) {
            data.feedback = feedback.trim();
        }
        
        await adminDB.collection('waitlist').doc(email).set(data);
        return { success: true };
    } catch (error) {
        console.error('Error adding to waitlist:', error);
        return { success: false, error };
    }
}