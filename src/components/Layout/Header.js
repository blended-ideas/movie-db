import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../common/features/movies/movieSlice';


function Header() {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(fetchAsyncMovies(searchText));
        dispatch(fetchAsyncShows(searchText));

    }

    return (
        <header className="bg-secondary text-secondary-text">
            <div className="container sm:flex items-center justify-between py-4">
                <div className="font-bold text-lg">
                    <Link to="/"> Movie DB</Link>
                </div>
                <div className="my-2 sm:my-0 text-center">
                    <form onSubmit={submitHandler} className="flex">
                        <input type="text" placeholder="Search for movie or a show"
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                            className="mx-auto px-4 py-2 rounded-r-none"
                            style={{ width: '50vw', minWidth: '300px' }} />
                        <button type="submit" className="px-2 py-1 hover:opacity-75 bg-gray-100 text-black rounded-l-none">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>

                </div>
                <div className="cursor-pointer">
                    <FontAwesomeIcon icon={faUserCircle} size='2x' />
                </div>
            </div>
        </header>
    )
}

export default Header
