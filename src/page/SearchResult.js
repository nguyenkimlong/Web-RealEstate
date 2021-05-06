

import { render } from '@testing-library/react';
import React, { useState, useEffect, Component } from 'react';


class SearchResult extends Component {
  constructor(props) {
    super(props);
    console.log("SearchResult");
    console.log(props);

    this.state = {
      data: []
    }

  }




  getData = () => {
    var that = this;
    fetch('./data/data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        var datafilter = that.props.data;
        if (Number(datafilter.lengthValue) > 0 && Number(datafilter.widthValue) > 0) {
          var _acreage = Number(datafilter.lengthValue) * Number(datafilter.widthValue);
          myJson = myJson.filter(x => {
            return x.acreage >= _acreage;
          });
        }

        if (datafilter.selectedBed !== "") {
          myJson = myJson.filter(x => {
            return x.rooms === Number(datafilter.selectedBed);
          });
        }

        if (Number(datafilter.selectedFloor) > 0) {
          myJson = myJson.filter(x => {
            return x.floor === Number(datafilter.selectedFloor);
          });
        }

        if (datafilter.selectedProperty !== "") {
          myJson = myJson.filter(x => {
            return x.type.toUpperCase() === datafilter.selectedProperty.toUpperCase();
          });
        }
        that.setState({ data: myJson });
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <td>Image</td>
                  <td>Ten</td>
                  <td>Dien Tich</td>
                  <td>So phong ngu</td>
                  <td>So Tang</td>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.data && this.state.data.length > 0 && this.state.data.map((item) => {
                    return <tr key={item.id}>
                      <td width="45%"><img src={item.img} className="img-thumbnail" /></td>
                      <td>{item.name}</td>
                      <td>{item.acreage}</td>
                      <td>{item.rooms}</td>
                      <td>{item.floor}</td>
                    </tr>
                  })
                }

              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }

}


export default SearchResult;
