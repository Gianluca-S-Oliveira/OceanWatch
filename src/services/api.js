import axios from 'axios';

// Crie uma instância de axios para a sua API de relatos
const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5', // Substitua pela URL real da OpenWeather API
    params: {
        appid: '8cd5a8c23d39c734fa2bfab6beaddc33', // Substitua 'SUA_API_KEY' pela sua chave de API real
    }
});

export const reportIssue = async (description, coordinates) => {
    try {
        const response = await api.post('/report', {
            description,
            latitude: coordinates.lat,
            longitude: coordinates.lon,
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao reportar problema:', error);
    }
};
