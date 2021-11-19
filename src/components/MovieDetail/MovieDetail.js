import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShowDetail } from '../../common/features/movies/movieSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faFilm, faStar, faThumbsUp, faYinYang } from '@fortawesome/free-solid-svg-icons';

function MovieDetail() {
    const dispatch = useDispatch();
    const { imdbId } = useParams();
    const data = useSelector(getSelectedMovieOrShow);

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbId));

        return () => {
            dispatch(removeSelectedMovieOrShowDetail())
        };
    }, [imdbId, dispatch]);

    const infoSections = [
        {
            name: 'IMDB Rating',
            icon: faStar,
            iconColor: '#ff9300',
            value: data?.imdbRating
        },
        {
            name: 'IMDB Votes',
            icon: faThumbsUp,
            iconColor: '#fafafa',
            value: data?.imdbVotes
        },
        {
            name: 'Runtime',
            icon: faFilm,
            iconColor: 'rbg(191, 213, 214)',
            value: data?.Runtime
        },
        {
            name: 'Year',
            icon: faCalendarAlt,
            iconColor: 'peachpuff',
            value: data?.Year
        }
    ]

    const additionalInfos = [
        {name: 'Director', value: data.Director},
        {name: 'Genres', value: data.Genre},
        {name: 'Stars', value: data.Actors},
        {name: 'Languages', value: data.Language},
        {name: 'Awards', value: data.Awards},
    ]

    const getRenderData = () => (
        <>
            <div className="md:w-3/5" data-about="info">
                <h1 className="text-3xl">{data.Title}</h1>
                <dl className="flex mt-5 text-secondary-text">
                    {
                        infoSections.map(infoSec => (
                            <div key={infoSec.name} className="mr-5">
                                <dt className="inline"> {infoSec.name} <FontAwesomeIcon icon={infoSec.icon} color={infoSec.iconColor} size="sm" />: </dt>
                                <dd className="inline"> {infoSec.value} </dd>
                            </div>
                        ))
                    }
                </dl>
                <div className="mt-8 text-sm">{data.Plot}</div>
                <dl className="mt-8">
                    {
                        additionalInfos.map(infoSec => (
                            <div key={infoSec.name}>
                                <dt className="inline text-primary-text font-semibold"> {infoSec.name}: </dt>
                                <dd className="inline text-secondary-text"> {infoSec.value} </dd>
                            </div>
                        ))
                    }
                    
                </dl>
            </div>

            <div className="md:w-2/5" data-about="image-container">
                <img src={data?.Poster} alt={data?.Title} />
            </div>
        </>
    );

    return (
        <div className="container md:flex md:gap-4 text-primary-text text-normal py-4">
            {data && Object.keys(data).length > 0 ? getRenderData() : 'Loading...'}
        </div>
    )
}

export default MovieDetail;
