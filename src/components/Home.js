import * as React from 'react';
import { useTranslation } from "react-i18next";
import { Box, Typography } from '@material-ui/core';
import { browserName, browserVersion } from "react-device-detect";

const Home = () => {
    const { t } = useTranslation();

    const [allData, setAllData] = React.useState({
        city: "",
        country: "",
        countryCode: "",
        query: "",
        browserName: "",
        browserVersion: "",
    })
    const { city, country, countryCode, query, browserName, browserVersion } = allData;

    const releaseDate = new Date('2021-10-11');
    const timeDifference = new Date() - releaseDate;
    const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    React.useEffect(() => {
        fetch('https://extreme-ip-lookup.com/json/')
            .then(res => res.json())
            .then(response => {
                setAllData({
                    city: response.city,
                    country: response.country,
                    countryCode: response.countryCode,
                    query: response.query,
                    browserName,
                    browserVersion,
                });
            })
            .catch((data, status) => {
                console.log('Request failed:', data);
            });
    }, [])

    return (
        <Box m={3}>
            <Typography variant="body2" color="textSecondary" align="right" gutterBottom>{`${city}, ${country}, ${countryCode}, ${query}, ${browserName}, ${browserVersion}`} </Typography>
            <Typography variant="h2" color="primary" align="center" gutterBottom>{t('welcome_message')}</Typography>
            <Typography variant="h3" color="secondary" align="center" gutterBottom>{t('home_page')}</Typography>
            <Typography variant="h5" color="textPrimary" align="center" gutterBottom>{t('days_since_release', { number_of_days })}</Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>{t('home_page_story')} </Typography>
            <Typography variant="caption" color="secondary" align="right" gutterBottom>{`${city}, ${country}, ${countryCode}, ${query}, ${browserName}, ${browserVersion}`} </Typography>
        </Box>
    )
}

export default Home
