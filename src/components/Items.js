import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

// For large lists > 10000 rows
//Grab the viewport height and display only viewable rows +20 top/bottom
//set a handleScroll event handler to keep rendering rows on scroll
const Items = ({ items }) => (
    <div>
        {items.map((item) => (
            <pre key={item.id}> {JSON.stringify(item, null, '\t') } </pre> 
        ))}
    </div>
);


export default connect(mapStateToProps)(Items);