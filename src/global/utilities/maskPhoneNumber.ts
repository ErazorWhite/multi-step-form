interface IMaskPhoneNumberReturn {
    formattedValue: string,
    newCursorPosition?: number,
}

export const maskPhoneNumber = (rawValue: string, cursorPosition?: number): IMaskPhoneNumberReturn => {
    rawValue = rawValue.replace(/[^\d+]/g, '');

    // Change any start symbol to "+"
    if (!rawValue.startsWith("+")) rawValue = rawValue.replace(/./g, '+');

    // Move any "+" to start
    rawValue = '+' + rawValue.replace(/\+/g, '');

    // Limit to 11
    rawValue = rawValue.substring(0, 11);

    // Add spaces
    let numberWithoutCountryPart = rawValue.substring(2); // Get numbers except country code
    const countryCode = rawValue.slice(0, 2); // Get country code

    numberWithoutCountryPart = numberWithoutCountryPart.replace(/.{1,3}/g, '$& ').trim();
    rawValue = countryCode;
    if (numberWithoutCountryPart.length > 0) {
        rawValue += ' ' + numberWithoutCountryPart;
    }

    // Keep cursor position at the same place
    if (cursorPosition && ((cursorPosition - 3) % 4 === 0)) cursorPosition += 1;

    return cursorPosition ? {formattedValue: rawValue, newCursorPosition: cursorPosition} : {formattedValue: rawValue};
};