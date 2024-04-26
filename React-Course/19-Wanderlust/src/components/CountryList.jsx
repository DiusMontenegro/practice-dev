import CountryItem from './CountryItem';
import styles from './CountryList.module.css';
import Message from './Message';
import Spinner from './Spinner';

function CountryList({ cities, isLoading }) {
    if (isLoading) return <Spinner />;

    if (!cities.length)
        return (
            <Message message="Add your first city by clicking a city on the map." />
        );

    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country)) {
            return [...arr, { country: city.country, emoji: city.emoji }];
        } else {
            return arr;
        }
    }, []);

    return (
        <div className={styles.countryList}>
            {countries.map((country, index) => (
                <CountryItem key={index} country={country} />
            ))}
        </div>
    );
}

export default CountryList;
