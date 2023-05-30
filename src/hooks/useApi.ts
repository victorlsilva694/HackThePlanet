import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8000/",
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.post('/api/validate', { token });
        return response.data;
    },
    signin: async (email: string, password: string) => {
        const response = await api.post('/api/login', { email, password });
        return response.data;
    },
    logout: async () => {
        const response = await api.post('/logout');
        return response.data;
    }
});