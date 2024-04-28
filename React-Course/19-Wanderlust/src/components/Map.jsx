import { useNavigate } from 'react-router-dom';
import styles from './Map.module.css';
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMap,
    useMapEvents,
} from 'react-leaflet';
import { useEffect, useState } from 'react';
import { useCities } from '@/contexts/CitiesContext';
import { useGeolocation } from '@/hooks/useGeolocation';
import Button from './Button';
import { useUrlPositions } from '@/hooks/useUrlPositions';

const Map = () => {
    const { cities } = useCities();
    const [mapPosition, setMapPosition] = useState([51.505, -0.09]);
    const [mapLat, mapLng] = useUrlPositions();
    const {
        isLoading: isLoadingGeolocation,
        position: geolocationPosition,
        getPosition,
    } = useGeolocation();

    useEffect(() => {
        if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    }, [mapLat, mapLng]);

    useEffect(() => {
        if (geolocationPosition)
            setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    }, [geolocationPosition]);

    return (
        <div className={styles.mapContainer}>
            <Button type="position" onClick={getPosition}>
                {isLoadingGeolocation ? 'Loading...' : 'use your position'}
            </Button>
            <MapContainer
                center={mapPosition}
                zoom={8}
                scrollWheelZoom={true}
                className={styles.map}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cities.map((city) => (
                    <Marker
                        key={city.id}
                        position={[city.position.lat, city.position.lng]}
                    >
                        <Popup>
                            <span>{city.emoji}</span>{' '}
                            <span>{city.cityName}</span>
                        </Popup>
                    </Marker>
                ))}

                <ChangeCenter position={mapPosition} />
                <DetectClick />
            </MapContainer>
        </div>
    );
};

function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);

    return null;
}

function DetectClick() {
    const navigate = useNavigate();

    useMapEvents({
        click: (e) => {
            navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
        },
    });
}

export default Map;
