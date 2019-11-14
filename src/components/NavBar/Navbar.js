import React  from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom'


const mapStateToProps = (state) =>{
	return {
		counter:state.counter
	}
};

const Navbar =(props) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand">
                Navbar 
                <span className="badge badge-pill badge-secondary">{props.counter}</span>
                {/* Sum:
                <span className="badge badge-pill badge-secondary">{sum}</span> */}
            </span>
            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/rooms'>Rooms</Link>
                </li>
            </ul>
        </nav>
    );
}


export default connect(mapStateToProps) (Navbar);