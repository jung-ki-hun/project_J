var isEmpty = (str) => {

    if (typeof str == "undefined" || str == null || str == "")
        return true;
    else
        return false;
}


module.exports = {
    isEmpty,
}
