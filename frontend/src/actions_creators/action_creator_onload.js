export const action_restore_data = 'action_restore_data';

export function restore_data() {
    var cookie = document.cookie;
    var cookie_obj = cookie.split(/[;] */).reduce(function(result, pairStr) {
        var arr = pairStr.split('=');
        if (arr.length === 2) {
            result[arr[0]] = arr[1];
        }
        return result;
    }, {});
    return {
        type: action_restore_data,
        payload: cookie_obj
    };
}
