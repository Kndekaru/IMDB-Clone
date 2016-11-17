class Card extends React.Component {

  render(){

    let { Title, Year, imdbID, Type, Poster } = this.props.movie;
    return(
      <li key={imdbID}>
      <div className="col s11 m7 l1">
        <h3 className="header">{Title}</h3>
          <div className="card horizontal">
            <div className="card-image">
              <img src={Poster}/>
            </div>
            <div className="card-stacked">
            <div className="card-content">
              <MovieDetails Title={Title}/>
            </div>
             <div className="card-action">
               <a className="btn">IMDB Page!</a>
             </div>
          </div>
        </div>
      </div>
    </li>
    )
  }
}
