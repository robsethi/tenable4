import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import Items from '../components/Items';

class ItemList extends Component {
    constructor(){
        super();

        this.getData = this.getData.bind(this);
        this.clearData = this.clearData.bind(this);
    }
   

    getData() {
        this.props.fetchData('http://jsonplaceholder.typicode.com/todos');

    }

    clearData() {
        let resultElement = document.getElementById('getResult');
        while (resultElement.firstChild) resultElement.removeChild(resultElement.firstChild);
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <div className="container">
            <h1>Configuration Data</h1>
                <div className="panel panel-primary">
                <div className="panel-heading">Question 5 for rows > 10000. Grab the viewport height, display viewable rows +20 for top and bottom padding buffer. Setup a scrollHandler function to render additional rows on scroll</div>
                    <div className="panel-body">
                        <button className="btn btn-primary" onClick={this.getData}>Get Configurations</button>
                        <button className="btn btn-warning" onClick={this.clearData}>Clear</button>
                        <div className="panel-body" id="getResult">
                         <Items />   
                </div>
                </div>
            </div>
            </div>


        );
    }
}
const mapStateToProps = (state) => {
    return {
        
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
