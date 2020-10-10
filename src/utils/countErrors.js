export let countErrors = (errors) => {
    return Object.keys(errors)
        .filter(element => errors[element].length > 0 && element !== "submitButton" && element !== "badRequest")
        .length;
}
