// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from 'react';

import styles from './Form.module.css';
import Button from './Button';
import BackButton from './BackButton';
import { useUrlPositions } from '@/hooks/useUrlPositions';
import axios from 'axios';
import Message from './Message';
import { Spinner } from '@nextui-org/react';

export function convertToEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

const BASEURL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

function Form() {
    const [lat, lng] = useUrlPositions();

    const [cityName, setCityName] = useState('');
    const [country, setCountry] = useState('');
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState('');
    const [emoji, setEmoji] = useState('');
    const [isLoadingGeocoding, setisLoadingGeocoding] = useState(false);
    const [geocodingError, setGeocodingError] = useState('');

    useEffect(() => {
        async function fetchCityData() {
            try {
                setisLoadingGeocoding(true);
                setGeocodingError('');
                const res = await axios.get(
                    `${BASEURL}?latitude=${lat}&longitude=${lng}`
                );
                const data = await res.data;

                if (!data.countryCode)
                    throw new Error(
                        "That doesn't seem to be a city, Please select another one 😉"
                    );

                setCityName(data.cityName || data.locality || '');
                setCountry(data.countryName);
                setEmoji(data.countryCode);
            } catch (err) {
                setGeocodingError(err.message);
                throw new Error('Error fetching city data to the form');
            } finally {
                setisLoadingGeocoding(false);
            }
        }

        fetchCityData();
    }, [lat, lng]);

    if (isLoadingGeocoding) return <Spinner />;

    if (geocodingError) return <Message message={geocodingError} />;

    return (
        <form className={styles.form}>
            <div className={styles.row}>
                <label htmlFor="cityName">City name</label>
                <input
                    id="cityName"
                    onChange={(e) => setCityName(e.target.value)}
                    value={cityName}
                    className="text-[#1c1c1c]"
                />
                <span className={`${styles.flag} text-[#1c1c1c]`}>{emoji}</span>
            </div>

            <div className={styles.row}>
                <label htmlFor="date">When did you go to {cityName}?</label>
                <input
                    id="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    className="text-[#1c1c1c]"
                />
            </div>

            <div className={styles.row}>
                <label htmlFor="notes">
                    Notes about your trip to {cityName}
                </label>
                <textarea
                    id="notes"
                    onChange={(e) => setNotes(e.target.value)}
                    value={notes}
                    className="text-[#1c1c1c]"
                />
            </div>

            <div className={styles.buttons}>
                <Button type="primary" onClick={() => {}}>
                    Add
                </Button>

                <BackButton />
            </div>
        </form>
    );
}

export default Form;
