//React
import { useState, useEffect } from 'react';
import PropType from 'prop-types';
//Style
import { DivCastInfo } from "./CastDetails.styled";
//API
import { tmdbImageAPI } from 'api/tmdbAPI';

const WIDTH_IMG = 200;

export const CastDetails = ({ castItem: { name, character, profile_path } }) => { 
    const [imgLink, setImgLink] = useState();
    useEffect(() => {
        tmdbImageAPI(profile_path, `w${WIDTH_IMG}`).then(fullPathImg => setImgLink(fullPathImg));
    }, [imgLink, profile_path]);
    return (
        <DivCastInfo>
            <img src={imgLink} alt={name} />
            <ul>
                <li>{name}</li>
                <li>character: {character}</li>
            </ul>
        </DivCastInfo>
    );
};

CastDetails.protoType = {
    castItem: PropType.shape({
        name: PropType.string.isRequired,
        character: PropType.string.isRequired,
        profile_path: PropType.string.isRequired
    })
};