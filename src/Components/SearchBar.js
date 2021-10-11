import React,{useState,useEffect} from 'react'
import MovieDetails from './MovieDetails';
import Loading from './Loading';
const SearchBar = () => {
    const [searchText, setSearchText] = useState("");
    const [movieData, setmovieData] = useState();
    const [loading, setLoading] = useState(false);
    const getMovieData = async() =>{
        setLoading(true);
        let url = `https://www.omdbapi.com/?t=${searchText}&plot=full&apikey=b9bc8477`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setmovieData(parsedData);
        setLoading(false);
    }

    const handleChange = (event) =>{
        setSearchText(event.target.value);
    }

    return (
        <>
        <div className="mx-auto w-75">
                <div class="row">
                    <input type="text" className="col-sm-4 p-2 m-2" placeholder="Movie Name" aria-label="Movie Name" value={searchText} onChange={handleChange}/>
                    <button onClick={getMovieData} className="btn btn-primary p-2 m-2 col-sm-2">Search</button>
                </div>

        </div>
        
            {loading && <Loading />}
            {!loading && movieData && <MovieDetails data={movieData} loading={loading}/>}
        </>
        )
}

export default SearchBar
