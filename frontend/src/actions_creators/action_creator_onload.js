function hasPreviousData() {
    var cookie = document.cookie;
    var cookie_obj = str.split(/[;] */).reduce(function(result, pairStr) {
        var arr = pairStr.split('=');
        if (arr.length === 2) {
            result[arr[0]] = arr[1];
        }
        return result;
    }, {});
    return {
        type: HAS_PREVIOUS_DATA,
        payload: cookie_obj
    };
}
