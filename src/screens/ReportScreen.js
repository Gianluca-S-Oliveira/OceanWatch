import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getCoordinatesByCityName, reportIssue } from '../services/api';

const ReportScreen = () => {
    const [description, setDescription] = useState('');
    const [cityName, setCityName] = useState('');
    const [coordinates, setCoordinates] = useState(null);
    const navigation = useNavigation();

    const handleReport = async () => {
        // Obter coordenadas baseadas no nome da cidade
        const coord = await getCoordinatesByCityName(cityName);
        setCoordinates(coord);

        // Enviar os dados para o servidor ou API
        const response = await reportIssue(description, coord);
        if (response.success) {
            alert('Relato enviado com sucesso!');
        } else {
            alert('Erro ao enviar relato');
        }
    };

    const handleViewMap = () => {
        navigation.navigate('Map', { cityName });
    };

    return (
        <View>
            <Text>Descreva o problema</Text>
            <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder="Descrição do problema"
            />
            <Text>Nome da cidade</Text>
            <TextInput
                value={cityName}
                onChangeText={setCityName}
                placeholder="Nome da cidade"
            />
            <Button title="Enviar Relato" onPress={handleReport} />
            <Button title="Ver Mapa" onPress={handleViewMap} />
            {coordinates && (
                <View>
                    <Text>Coordenadas Obtidas:</Text>
                    <Text>Latitude: {coordinates.lat}</Text>
                    <Text>Longitude: {coordinates.lon}</Text>
                </View>
            )}
        </View>
    );
};

export default ReportScreen;
