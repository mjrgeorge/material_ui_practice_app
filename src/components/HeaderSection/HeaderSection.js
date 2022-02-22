import * as React from 'react';
import { useTranslation } from "react-i18next";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { Button, ButtonGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';

const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    },
    {
        code: 'bn',
        name: 'বাংলা',
        country_code: 'bd'
    },
    {
        code: 'hi',
        name: 'हिंदी',
        country_code: 'in',
    }
]

const HeaderSection = () => {
    const { t } = useTranslation();
    const currentLanguageCode = cookies.get('i18next') || 'en';
    const currentLanguage = languages.find(l => l.code === currentLanguageCode);

    const [currentCode, seCurrentCode] = React.useState('');

    const handleLanguageChange = (event) => {
        seCurrentCode(event.target.value);
    };

    React.useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr';
        document.title = t('app_title');
        i18next.changeLanguage(currentCode);
    }, [currentCode, currentLanguage]);

    return (
        <div>
            <ButtonGroup color="primary" >
                <Button>
                    <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                </Button>
                <Button>
                    <Link to="/textEditor" style={{ textDecoration: 'none' }}>Text Editor</Link>
                </Button>
                <Button>
                    <Link to="/audioRecorder" style={{ textDecoration: 'none' }}>Audio Recorder</Link>
                </Button>
                <Button>
                    <Link to="/pageAudioRecorder" style={{ textDecoration: 'none' }}>Page Audio Recorder</Link>
                </Button>
            </ButtonGroup>
            <Box sx={{ width: 120, m: 3 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{t('language')}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currentCode}
                        label="Language"
                        onChange={handleLanguageChange}
                    >
                        {
                            languages.map(({ code, name, country_code }) => (
                                <MenuItem key={code} value={code}>{name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Box>
        </div>
    )
}

export default HeaderSection
