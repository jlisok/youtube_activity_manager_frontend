export function addSpaces(variable) {
    return variable.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}