class NavBar extends React.Component{


  handleSearch(event){
    let movieSearch = this.refs['search-text']
    $.ajax ({
      url: '/imdb/search/'+movieSearch.value,
      method: 'get'
    }).done( function(response){
      this.props.search_response(response)
    }.bind(this))
  }


  render(){
    return(
      <section>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo"><i className="material-icons"></i>MMDB</a>
          </div>
        </nav>
        <div className="row">
          <form className="col s10">

            <div className="row">
              <div className="input-field col s5">
                <input ref="search-text" id="icon_prefix" type="text" className="validate"/>
                <label htmlFor="icon_prefix">Search</label>
              </div>
              <div className="input-field col s5">
                <i onClick={(event) => this.handleSearch(event)} className="material-icons prefix">search</i>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}
