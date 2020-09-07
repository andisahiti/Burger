import { useState, useEffect } from 'react'



export default httpClient => {

    const [error, setError] = useState(null)

    //per componentwillmount veq ja hjek krejt ato ski nevoj hook
    const reqInterceptor = httpClient.interceptors.request.use(req => {
        setError(null)
        return req;
    });
    const resInterceptor = httpClient.interceptors.response.use(res => res, error => {
        setError(error)
    });

    //per componentwillunmount e shtin kodin nuseeffect te cleanup function
    useEffect(() => {
        return () => {
            httpClient.interceptors.request.eject(reqInterceptor);
            httpClient.interceptors.response.eject(resInterceptor);
        }
    }, [reqInterceptor, resInterceptor])

    const errorConfirmedHandler = () => {
        setError(null)
    }

    return [error, errorConfirmedHandler];
}