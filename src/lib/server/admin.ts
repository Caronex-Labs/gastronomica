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
export async function addToWaitlist(email: string) {
    try {
        const timestamp = new Date();
        await adminDB.collection('waitlist').doc(email).set({
            email,
            timestamp,
        });
        return { success: true };
    } catch (error) {
        console.error('Error adding to waitlist:', error);
        return { success: false, error };
    }
}