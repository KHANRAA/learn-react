import React, {Component} from 'react';


export default class NavBar extends Component {
    render() {
        console.log('NavBer -Rendered');
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand"
                   href="#">Navbar{" "} <span
                    className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
                </a>
            </nav>
        );
    }
}