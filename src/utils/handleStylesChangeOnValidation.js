export const handleStylesChangeOnValidation = (error, didBlur) => {
    return didBlur ? error.length > 0 ? "form-control is-invalid" : "form-control is-valid" : "form-control";
}
