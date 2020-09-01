export let setDidBlur = didBlur => {

    let updatedDidBlur = {...didBlur};
    Object.keys(didBlur)
        .forEach(value => {
            if (value !== "phonePrefix" && value !== "phoneNumber"){
                updatedDidBlur[value] = true;
            }
        });
    return updatedDidBlur;
}
