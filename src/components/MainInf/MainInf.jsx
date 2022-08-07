//React
import PropType from 'prop-types';
import { useState, useEffect } from 'react';
//Style
import { Link, SectionMainInfo, SectionAddInfo } from "./MainInf.styled";
//API
import { tmdbImageAPI } from 'api/tmdbAPI';

const WIDTH_IMG = 300;

const MainInf = ({ movieObj }) => {
    const { original_title, popularity, overview, genres, poster_path, release_date } = movieObj;
    const [imgLink, setImgLink] = useState();
    
    const getYear = () => { 
        const date = new Date(release_date).getFullYear();
        return date || 'not found';
    };
    useEffect(() => {
        const fullImgLink = tmdbImageAPI(poster_path, `w${WIDTH_IMG}`);
        setImgLink(fullImgLink);
    }, [poster_path]);

    return (
        <>
            <SectionMainInfo>
                <img src={imgLink} alt={`${original_title}'s title`} width={`${WIDTH_IMG}`} />
                
                <ul>
                    <li>
                        <h2>{original_title} ({getYear()})</h2>
                        <p>Popularity: {popularity}</p>
                    </li>
                    <li>
                        <h3>Overview</h3>
                        <p>{overview}</p>
                    </li>
                    {genres && <li>
                        <h3>Genres</h3>
                        <p>{genres.map(({name}) => {
                            return `[${name}] `
                        })}
                        </p>
                    </li>}
                </ul>
            </SectionMainInfo>
            <SectionAddInfo>
                <p>Additional information</p>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            </SectionAddInfo>
        </>
    );
};
MainInf.protoType = {
    movieObj: PropType.shape({
        original_title: PropType.string.isRequired,
        popularity: PropType.number.isRequired,
        overview : PropType.string.isRequired,
        genres: PropType.shape({
            name: PropType.string.isRequired
        }),
        poster_path: PropType.string.isRequired,
        release_date: PropType.string.isRequired
    })
};

export default MainInf;