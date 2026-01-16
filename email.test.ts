import { validateEmail } from './email';

describe('Email Validation Logic', () => {

    test('should reject if there is a space', () => {
        expect(validateEmail('hedi .benkhalifa@student.vinci.be')).toBe(false);
    });

    test('should reject if there is no @ symbol', () => {
        expect(validateEmail('hedi.benkhalifa.student.vinci.be')).toBe(false);
    });

    test('should reject if there is no text before or after the @ symbol', () => {
        expect(validateEmail('@student.vinci.be')).toBe(false);
        expect(validateEmail('hedi.benkhalifa@')).toBe(false);
    });

    test('should reject if there is no dot in the domain name', () => {
        expect(validateEmail('hedi.benkhalifa@studentvinci')).toBe(false);
    });

    test('should reject if the dot is the last character', () => {
        expect(validateEmail('hedi.benkhalifa@student.vinci.')).toBe(false);
    });

    test('should accept a valid email', () => {
        expect(validateEmail('hedi.benkhalifa@student.vinci.be')).toBe(true);
    });

});