class MovieDetails extends React.Component{

  constructor(){
    super()
    this.state = {
      moviedetails:
        { Title:"",
          Year:"",
          Rated:"",
          Released:"" ,
          Director:"",
          Writer:"",
          Actors:"",
          Plot:"" }
    }
  }

  componentDidMount(){
    $.ajax({
      url: 'imdb/search/details/'+ this.props.Title,
      method: 'get'
    }).done((response) => {
      this.setState({
        moviedetails : response
    })
  })
}


  render(){
    let { Title, Year, Rated, Released, Director, Writer, Actors, Plot } = this.state.moviedetails

    return(
      <div>
      <p><b>Title:</b> {Title}</p>
      <p><b>Year:</b> {Year}</p>
      <p><b>Released:</b> {Released}</p>
      <p><b>Director:</b> {Director}</p>
      <p><b>Writer:</b> {Writer} </p>
      <p><b>Actors:</b> {Actors}</p>
      <p><b>Plot:</b> {Plot} </p>
      </div>
    )
  }
}
