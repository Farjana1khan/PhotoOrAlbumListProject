import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import "../App.css"
export default class PhotoDetails extends Component {

      state = {
            photoDetails: {}
      }
componentDidMount() {
    const { match } = this.props;
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos/${match.params.photo_id}`
      )
      .then(response => {
        this.setState({
          photoDetails: response.data
        });
      });
}
      render() {

            const {photoDetails} = this.state
            return (
              <div className="row2">
                <div key={photoDetails.id} className="col">
                  <div className="card">
                    <div className="card-image">
                      <img src={photoDetails.thumbnailUrl} alt="photos" />
                      <span className="card-title">{photoDetails.title}</span>
                    </div>
                    <div className="card-action">
                      <NavLink to="/" className="navlink">
                        back to List
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            );
      }
}
