
import SearchResult from './SearchResult.js';
import { Form } from 'react-bootstrap';
import React, { Component } from 'react';

class SearchSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSearch: 0,
            selectedProperty: "",
            selectedBed: "",
            widthValue: 0,
            lengthValue: 0,
            selectedFloor: 0,
        }
    }

    onChangeProperty(event) {
        this.setState({ selectedProperty: event.target.value });
    }

    onChangeBeds(event) {
        this.setState({ selectedBed: event.target.value });
    }

    onSearchData() {
        this.setState({ isSearch: Math.random() });
        console.log("onSearchData");

        console.log("stateSearch",this.state);
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <header className="masthead text-white text-center">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 mx-auto">
                                <h1 className="mb-5">Find Designs</h1>
                            </div>
                            <div className="col-lg-10 mx-auto">
                                <Form>
                                    <div className="form-row">
                                        <div className="col-3">
                                            <Form.Control as="select" defaultValue={''} onChange={this.onChangeProperty.bind(this)}>
                                                <option value="">Kiểu Nhà</option>
                                                <option value="House">House</option>
                                                <option value="ApartmentUnit">Apartment & Unit</option>
                                                <option value="Villa">Villa</option>
                                                <option value="Land">Land</option>
                                            </Form.Control>
                                        </div>
                                        <div className="col-3">
                                            <Form.Control as="select" defaultValue={''} onChange={this.onChangeBeds.bind(this)}>
                                                <option value="">Số Phòng Ngủ</option>
                                                <option value="1">1 Phòng Ngủ</option>
                                                <option value="2">2 Phòng Ngủ</option>
                                                <option value="3">3 Phòng Ngủ</option>
                                                <option value="4">4 Phòng Ngủ</option>
                                                <option value="5">5 Phòng Ngủ</option>
                                            </Form.Control>
                                        </div>
                                        <div className="col-3">
                                            <Form.Control type="number" placeholder="Chiều Rộng" onChange={e => { this.setState({ widthValue: e.target.value }); }} />
                                        </div>
                                        <div className="col-3">
                                            <Form.Control type="number" placeholder="Chiều Dài" onChange={e => { this.setState({ lengthValue: e.target.value }); }} />
                                        </div>
                                        <div className="col-3">
                                            <Form.Group controlId="formBasicRange">
                                                <Form.Label>Số Tầng</Form.Label>
                                                <Form.Control as="select" onChange={e => { this.setState({ selectedFloor: e.target.value }); }}>
                                                    <option value="1">1 Tầng</option>
                                                    <option value="2">2 Tầng</option>
                                                    <option value="3">3 Tầng</option>
                                                    <option value="4">4 Tầng</option>
                                                    <option value="5">5 Tầng</option>
                                                </Form.Control>
                                            </Form.Group>

                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-12 col-md-3">
                                            <button className="btn btn-block btn-lg btn-primary" type="button" onClick={this.onSearchData.bind(this)}>Search</button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>

                </header>

                {this.state.isSearch > 0 && <SearchResult data={this.state} key={this.state.isSearch} />}
            </div>


        )

    }

}

export default SearchSection;
