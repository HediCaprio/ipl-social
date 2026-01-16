
export function validateEmail(email: string): boolean {

    for (let i = 0; i < email.length; i++) {
        if (email[i] === ' ') return false;
    }

    const atIndex = email.indexOf('@');
    if (atIndex <= 0 || atIndex === email.length - 1) return false;

    

    return true;
}