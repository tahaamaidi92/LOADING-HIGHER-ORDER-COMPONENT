import React, { Component } from 'react';
import '../App.css'
class Movies extends Component {
    constructor(props){
        super(props)
this.state={
    List :[
        {
          id: "Movie1",
          name: "The Lullaby",
          rate: "★★★★☆",
          image:
            "https://horrornews.net/wp-content/uploads/2018/02/The-Lullaby-2018-movie-Darrell-Roodt-2.jpg"
        },
        {
          id: "Movie2",
          name: "Laraide",
          rate: "★★★☆☆",
          image: "http://www.laraider.com/films/filmtr3/promo/affiche3.jpg"
        },
        {
          id: "Movie3",
          name: "Braven",
          rate: "★★☆☆☆",
          image:
            "https://media.senscritique.com/media/000017581368/source_big/Braven.jpg"
        }
      ]
}
        
    }
    render() { 
        return ( 
            <div className="App1">
            <h1>MOVIES LIST</h1>
            {this.state.List.map((el, i) => (
              <div className="movies">
                <h4> Id : {el.id} </h4>
                <h4> Name : {el.name} </h4>
                <h4> Rating : {el.rate} </h4>
                <img src={el.image} />
              </div>
            ))}
          </div>
         );
    }
}
 
export default Movies;