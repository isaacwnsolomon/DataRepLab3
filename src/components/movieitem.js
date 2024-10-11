const MovieItem = (props)=>{
    return(
        <div>
            <h3>{props.myMovie.Title}</h3>
            <p>{props.myMovie.Year}</p>
            <p>{props.myMovie.imdbID}</p>
            <p>{props.myMovie.Type}</p>
           <img src={props.myMovie.Poster}></img>

        </div>
    );
}

export default MovieItem