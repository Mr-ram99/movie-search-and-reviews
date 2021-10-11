import React from 'react'
const MovieDetails = (props) => {
    const {data, loading} = props;
    return (
        <>
        {data.Response==="True" && <div className=" d-lg-flex flex-lg-row my-2 mx-4 bg-dark text-light">
            <img src={data.Poster} alt="Poster Not awailable" className="mw-50"/>
            <div className="border w-100">
                <h2 className="text-center bg-light text-dark">{data.Title}({data.Year})</h2>
                <p className="m-2"><span className="text-warning">Plot</span> : {data.Plot}</p>
                <div className="d-lg-flex">
                    <div className="w-lg-50">
                        <p className="m-2"><span className="text-warning">Actors</span> : {data.Actors}</p>
                        <p className="m-2"><span className="text-warning">Director</span> : {data.Director}</p>
                        <p className="m-2"><span className="text-warning">Writer</span> : {data.Writer}</p>
                        <p className="m-2"><span className="text-warning">Genre</span> : {data.Genre}</p>
                        <p className="m-2"><span className="text-warning">Languages</span> : {data.Language}</p>
                    </div>
                    <div className="w-lg-50">
                        <p className="m-2"><span className="text-warning">IMDB Rating</span> : {data.imdbRating}</p>
                        <p className="m-2"><span className="text-warning">Rated</span> : {data.Rated}</p>
                        <p className="m-2"><span className="text-warning">Awards</span> : {data.Awards}</p>
                        <p className="m-2"><span className="text-warning">Released</span> : {data.Released}</p>
                        <p className="m-2"><span className="text-warning">Box Office</span> : {data.BoxOffice}</p>
                    </div>
                </div>
            </div>
        </div>}
        {data.Response==="False" && <div className="my-3 mx-4 bg-dark text-light">
            <p className="text-warning text-center ">Movie not found in database. Please check for typing error!!</p>
        </div>}
        </>
    )
}

export default MovieDetails
