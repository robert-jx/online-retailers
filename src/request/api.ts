import service from ".";

// 登录接口
interface loginData {
    username: string,
    password: string
}
export function Login(data: loginData) {
    return service({
        url: '',
        method: 'post',
        data
    })
}