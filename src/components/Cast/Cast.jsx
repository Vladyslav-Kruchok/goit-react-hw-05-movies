//React
//import { useOutletContext } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
//Component export default
import Section from 'components/Section/Section.jsx';
import CastDetails from 'components/CastDetails/CastDetails.jsx';
//API
import { tmdbMovieIdAPI } from 'api/tmdbAPI';




const Cast = () => { 
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

export default Cast;