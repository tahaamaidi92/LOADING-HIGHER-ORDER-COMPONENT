import React, { Component } from 'react';
import '../App.css';
import Movies from './movies.js'
class HOC extends Component {
    constructor(props){
        super(props)
        this.state={
            loading: false
        }
    }
    fetchData = () => {
        this.setState({ loading: true });
    
        //Faking API call here
        setTimeout(() => {
          this.setState({ loading: false });
        }, 3000);
      };
    render() { 
        const { loading } = this.state;
        return ( 
            <div style={{ marginTop: "60px" }}>
            <button className="button" onClick={this.fetchData} disabled={loading}>
              {loading && (
                <i class="fas fa-sync-alt" style={{ marginRight: "5px" }}></i>
              )}
              {loading && <span>Loading Data from Server</span>}
            {!loading && <span> Fetch Data from Server </span>}
            </button>
            {!loading && <div> <Movies/> </div>}
          </div>
         );
    }
}
 
export default HOC;