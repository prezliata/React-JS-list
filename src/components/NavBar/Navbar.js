import React, {Component} from 'react';
import {connect} from 'react-redux';


const mapStateToProps = (state) =>{
	return {
		counter:state.counter
	}
};

const Navbar =(props) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar 
                <span className="badge badge-pill badge-secondary">{props.counter}</span>
                {/* Sum:
                <span className="badge badge-pill badge-secondary">{sum}</span> */}
            </a>
        </nav>
    );
}


export default connect(mapStateToProps) (Navbar);