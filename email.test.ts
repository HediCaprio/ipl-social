import { validateEmail } from './email';

describe('Email Validation Logic', () => {

    test('devrait refuser s\'il y a un espace', () => {
        expect(validateEmail('te st@vinci.be')).toBe(false);
    });

    test('devrait refuser si pas de @', () => {
        expect(validateEmail('testvinci.be')).toBe(false);
    });

    test('devrait refuser si rien avant ou après le @', () => {
        expect(validateEmail('@vinci.be')).toBe(false);
        expect(validateEmail('test@')).toBe(false);
    });
});