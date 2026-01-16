
export function validateEmail(email: string): boolean {

    for (let i = 0; i < email.length; i++) {
        if (email[i] === ' ') return false;
    }

    return true;
}