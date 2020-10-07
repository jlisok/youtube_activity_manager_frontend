export const handleStylesChangeOnValidation = (error, didBlur) => {
    if (didBlur) {
        return error.length > 0 ? "form-control is-invalid" : "form-control is-valid";
    } else {
        return "form-control";
    }
}
