import { apiEndPoint,api } from "../handlers";

const login_user = async (payload:any) => {
    const {data} = await api.post(apiEndPoint.users,payload)
    return data
}


export {login_user}