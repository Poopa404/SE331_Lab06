import apiClient from "./AxioClient";
apiClient.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem('access_token')
        console.log('token', token)
        if(token){
            request.headers['Authorization'] = 'Bearer '+ token
            console.log(request)
        }
        return request
    },
    (error) => {
        return Promise.reject(error)
    }
)