export const maskPhoneNumber = (input: string): string => {
    input = input.replace(/[^\d+]/g, '');

    console.log("INPUT: ", input);

    // Move any "+" to start
    if (input.match(/(?<!^)(\+)/g)) {
        input = input.replace(/\+/g, '');
        input = '+' + input;
    }

    // Change any start symbol to "+"
    if (!input.startsWith("+")) input = input.replace(/./g, '+');

    // Limit to 11
    input = input.substring(0, 11);

    const numberWithoutCountryPart = input.replace(/(^\+\d|^\+)/g, ''); // Get numbers except country code
    const countryCode = input.slice(0, 2); // Get country code

    if (input.length > 2) input = countryCode + ' ' + numberWithoutCountryPart.slice(0, 3);
    if (input.length >= 6) input += ' ' + numberWithoutCountryPart.slice(3, 6);
    if (input.length >= 10) input += ' ' + numberWithoutCountryPart.slice(6, 9);

    return input;
};