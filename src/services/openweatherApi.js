import axios from 'axios';

const openWeatherApi = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        appid: '8cd5a8c23d39c734fa2bfab6beaddc33',
    }
});

export const getCoordinatesByCityName = async (cityName) => {
    try {
        const response = await openWeatherApi.get('/weather', {
            params: {
                q: cityName,
            }
        });
        const { coord } = response.data;
        return coord; // { lat: ..., lon: ... }
    } catch (error) {
        console.error('Erro ao obter coordenadas:', error);
    }
};
