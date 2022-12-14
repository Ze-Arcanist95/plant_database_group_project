import { backendClient } from '../api/axios.js';
import useAuth from './useAuth.js';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        try {
            const { data } = await backendClient.get('/auth/refresh', { withCredentials: true });
            setAuth(prevAuth => {
                return { 
                    ...prevAuth,
                    roles: data.roles,
                    accessToken: data.accessToken 
                };
            });
            return data.accessToken;
        } catch (error) {
            console.error(error);
        }
    };
    return refresh;
};

export default useRefreshToken;