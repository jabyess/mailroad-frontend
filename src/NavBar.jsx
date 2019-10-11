import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'

class NavBar extends React.Component {
	render() {
		return (
			<div className="nav navbar has-shadow">
				<div className="nav-left">
					<NavLink className="nav-item is-tab" activeClassName="is-active" to="/">Home</NavLink>
					<Link className="nav-item is-tab" activeClassName="is-active" to="/editor">Create Email</Link>
					<Link className="nav-item is-tab" activeClassName="is-active" to="/admin">Admin</Link>
					<Link className="nav-item is-tab" activeClassName="is-active" to="/media">Media</Link>
				</div>
				<div className="nav-item loading"></div>
				<div className="nav-right">
					<button className="nav-item is-tab" onClick={this.props.doLogout}>Logout</button>
				</div>
			</div>
		)
	}

}

NavBar.propTypes = {
	doLogout: PropTypes.func
}

export default NavBar