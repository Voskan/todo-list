const validateInput = (text) => {
    if (text.trim().length > 2) {
        return true
    }

    return false
}

export {
    validateInput,
}