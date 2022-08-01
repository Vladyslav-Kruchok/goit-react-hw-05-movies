//React
//import { useOutletContext } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
//Component
import { Section } from 'components/Section';
//API
import { tmdbMovieIdAPI } from 'api/tmdbAPI';
import { CastDetails } from 'components/CastDetails';



export const Cast = () => { 
    //const [movieObj] = useOutletContext();
    const { movieId } = useParams();
    const [castObj, setCastObj] = useState(null);
    
    useEffect(() => {
        const castPromise = tmdbMovieIdAPI('movie', `${movieId}`, 'credits');
        if (castPromise) {
            castPromise.then(value => {
                if (!value) return;
                setCastObj(value.data.cast);
            });    
        }
    }, [movieId]);
    return (
        <Section>
            {castObj && castObj.map((castItem) => {
                return <CastDetails castItem={castItem} key={castItem.id} />
            })}
        </Section>
    );
};