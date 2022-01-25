import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
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
                  <div className='row'>
                        <div>
                              <NavLink to="/">back</NavLink>

                        </div>

                        <div key={photoDetails.id} className='col s4 m4' >
                        <div className='card'>
                              <div className='card-image'>
                              <img src={ photoDetails.thumbnailUrl} alt='photos' />
                              <span className='card-title' >{photoDetails.title}</span>
                              </div>
                        </div>
                        </div>
                        
                  </div>
            )
      }
}
