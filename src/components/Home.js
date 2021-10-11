import * as React from 'react';
import { useTranslation } from "react-i18next";
import { Box, Typography } from '@material-ui/core';

const Home = () => {
    const { t } = useTranslation();
    const releaseDate = new Date('2021-10-11');
    const timeDifference = new Date() - releaseDate;
    const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    return (
        <Box m={3}>
            <Typography variant="h2" color="primary" align="center" gutterBottom>{t('welcome_message')}</Typography>
            <Typography variant="h3" color="secondary" align="center" gutterBottom>{t('home_page')}</Typography>
            <Typography variant="h5" color="textPrimary" align="center" gutterBottom>{t('days_since_release', { number_of_days })}</Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>{t('home_page_story')} </Typography>
        </Box>
    )
}

export default Home
