export default function AMovieBlock(props) {
    return(
        <>
            <div className="text-white mx-4 pb-6 uppercase">
                <img src={"https://image.tmdb.org/t/p/w200"+props.poster} className="hover:opacity-40 h-80 rounded"/>
                <h3>{props.name}</h3>
                {props.date && '| ' + props.date} | {props.type}
                <br/>
                {props.vote} Votes 
            </div>
        </>
    );
}