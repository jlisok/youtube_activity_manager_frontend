export const validateSignUpFields = state => {
    let {errors, phonePrefix, phoneNumber, password} = state;

    //email
    const expected = /^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/;
    errors.email = expected.test(state.email) ? "" : "Invalid Email. Please enter correct email address.";

    //password
    errors.password = state.password.length < 4 ? "Password must contain at least 4 letters" : "";


    //repeat Password
    errors.repeatPassword = state.repeatPassword.length > 0 ? state.repeatPassword !== password ? "Repeated password must equal password" : "" : "Repeated password cannot be empty";

    // country
    errors.country = state.country.length > 0 ? "" : "Country field cannot be empty";


    //year of birth
    const date = new Date();
    errors.birthYear = state.birthYear.length !== 4 || state.birthYear < 1900 || state.birthYear > date.getFullYear() ? "Invalid year of birth. Please enter correct year." : "";


    //gender
    errors.gender = !state.gender ? "Invalid gender. Please select valid value from the menu." : "";

    //phoneNumber
    if (!phonePrefix) {
        errors.phoneNumber = !phoneNumber ? "" : phoneNumber.length === 9 ? "" : "invalid number";
    } else {
        errors.phoneNumber = !phoneNumber ? "Please enter a phone number to match phone prefix." : phoneNumber.length === 9 ? "" : "invalid number";
    }

    //phonePrefix
    if (!phoneNumber) {
        errors.phonePrefix = !phonePrefix ? "" : phonePrefix.length >= 3 && phonePrefix.length <= 6 ? "" : "invalid phone prefix";
    } else {
        errors.phonePrefix = !phonePrefix ? "Please enter phone prefix to match phone number." : phonePrefix.length >= 3 && phonePrefix.length <= 6 ? "" : "invalid phone prefix";
    }

    //finally
    return errors;
}