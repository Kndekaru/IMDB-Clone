class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      movies:[]
    }
  }

handleDisplaySearch(movies){
  this.setState({
    movies: movies
  })
}


  render(){
    let movies = this.state.movies
    return(
      <section>
        <NavBar search_response={this.handleDisplaySearch.bind(this)}/>
        <ul>
          { movies.map((movie,i) => <Card movie={movie} key={i}/>) }
        </ul>
      </section>
    )
  }
}
