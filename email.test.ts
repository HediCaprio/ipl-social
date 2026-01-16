import { validateEmail } from './email';

describe('Email Validation Logic', () => {

    test('devrait refuser s\'il y a un espace', () => { // Contrainte c [cite: 35]
        expect(validateEmail('te st@vinci.be')).toBe(false);
    });
});