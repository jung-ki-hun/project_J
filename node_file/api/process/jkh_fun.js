var isEmpty = (str) => {

    if (typeof str == "undefined" || str == null || str == "")
        return true;
    else
        return false;
}


var date_time  =() =>{ 
    const date = new Date();
    
    var str = date;
        return str;
}

module.exports = {
    isEmpty,
    date_time,

}
