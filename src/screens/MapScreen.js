import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getCoordinatesByCityName } from '../services/openWeatherApi';

const MapScreen = ({ route }) => {
    const { cityName } = route.params;
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        const fetchCoordinates = async () => {
            const coord = await getCoordinatesByCityName(cityName);
            setCoordinates(coord);
        };
        fetchCoordinates();
    }, [cityName]);

    return (
        <View style={styles.container}>
            {coordinates ? (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: coordinates.lat,
                        longitude: coordinates.lon,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: coordinates.lat,
                            longitude: coordinates.lon,
                        }}
                        title={cityName}
                    />
                </MapView>
            ) : (
                <Text>Carregando mapa...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default MapScreen;
