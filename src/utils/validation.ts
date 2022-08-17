const RUSSIAN_PHONE_PREFIX = "+7";
const RUSSIAN_INTERNAL_PREFIX = "8";
const MONGOLIAN_PHONE_PREFIX = "+976";

export function validate(type: string, value: string | null | undefined) : boolean {
    switch (type) {
        case 'email':
           return validateEmail(value);
        case 'password':
            return validatePassword(value);
        case 'phone':
            return validatePhone(value);
    }
    return false;
}

export function validateEmail(email: string | null | undefined) : boolean {
    if (email == undefined) return false;

    const parts = email.split('@');
    if (parts?.length != 2) return false;

    if (!parts[0] || !parts[1]) return false;

    const domain = parts[1].split('.');

    if (!domain[0] || !domain[1]) return false;

    if (domain.length < 2) return false;

    return true;
}

export function validatePassword(password: string | null | undefined) : boolean {
    if (password == undefined) return false;

    const letters = "abcdefghijklmnopqrstuvwxyz";
    const lettersUpper = letters.toUpperCase();
    const numbers = "0123456789";

    for (var i = 0; i < password.length; i++) {
        if (password.length < 4) return false;

        for (var i = 0; i < password.length; i++) {
            var symbol = password.charAt(i);
            var isLetter = letters.includes(symbol);
            var isLetterUpper = lettersUpper.includes(symbol);
            var isNumber = numbers.includes(symbol);
            if (!isLetter && !isNumber && !isLetterUpper) {
                return false;
            }
        }
    }

    return true;
}

export function validatePhone(phone: string | null | undefined) : boolean {
    if (phone == undefined) return false;

    if (phone.startsWith("+") && phone.length < 12) return false;
    if (phone.length < 11) return false;

    if (phone.startsWith(RUSSIAN_PHONE_PREFIX)) {
        // some logic
        return true;
    }

    if (phone.startsWith(RUSSIAN_INTERNAL_PREFIX)) {
        return true;
    }

    if (phone.startsWith(MONGOLIAN_PHONE_PREFIX)) {
        // some logic
        return true;
    }

    return false;
}