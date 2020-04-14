import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

class Page404 extends Component {

    render() {
        return (
            <div class='page-404'>
                <p><h3>404 Page Not Found</h3></p>
                <p><Link to='/'>Go to Home</Link></p>
            </div>
        )
    }
}

export default Page404;