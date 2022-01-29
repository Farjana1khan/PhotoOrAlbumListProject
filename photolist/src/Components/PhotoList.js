import React from 'react'
import axios from "axios"
import { NavLink } from 'react-router-dom'
import "../App.css"
export default class PhotoList extends React.Component {

      state = {
            photos: [],
            visiblePhotos: []
      };


      componentDidMount(){
            axios.get("https://jsonplaceholder.typicode.com/photos").then(response =>{
            console.log(response.data);
            this.setState({
                  photos: response.data.slice(0, 10),
                  visiblePhotos: response.data.slice(0, 10)
            })
            })
      }

filterPhotos = () =>{
      console.log(this.filterText.value);
      const filterPhotolist = this.state.photos.filter(photo => {
            return photo.title.indexOf(this.filterText.value) !== -1;

      })

      //console.log(filterPhotolist);

      this.setState({
            visiblePhotos: filterPhotolist
      })
}

      render() {
            return (
              <section>
                <div className="row1">
                  <input
                    type="text"
                    onChange={this.filterPhotos}
                    ref={(node) => (this.filterText = node)}
                    className="searchtext"
                  />
                  <button onClick={this.filterphotos} className="filterbutton">
                    Filter
                  </button>
                </div>
                <hr />
                <span className='list'>PhotoList</span>
                <div className="row2">
                  {this.state.visiblePhotos.map((photo) => {
                    return (
                      <div className="col">
                        <div className="card">
                          <div className="card-image">
                            <img src={photo.thumbnailUrl} alt="photos" />
                            <span className="card-title">{photo.title}</span>
                          </div>
                          <div className="card-action">
                            <NavLink to={`${photo.id}`} className="navlink">
                              This is a link
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
      }
}
