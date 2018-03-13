export function loginSuccess(login){
    return {
            type: 'get_login_success',
            payload: {
                login:login,
            }
        }
}