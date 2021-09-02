import { useEffect, useState } from 'react';
import { deleteAudio } from '../handlers/recordings-list';
import generateKey from '../utils/generate-key';

export default function useRecordingsList(audio) {
    const [recordings, setRecordings] = useState([]);

    useEffect(() => {
        if (audio) setRecordings((prevState) => [...prevState, { key: generateKey(), audio }]);
    }, [audio]);

    return {
        recordings,
        deleteAudio: (audioKey) => deleteAudio(audioKey, setRecordings),
    };
}
