import React from "react"
import PropTypes from "prop-types"
// import { browserHistory } from 'react-router-dom'
import NavBar from "./NavBar.jsx"
import axiosClient from "./lib/axios.js"
import NotificationContainer from "./NotificationContainer"
import { Route, Switch } from "react-router-dom"
// import App from './App.jsx'
import EditorContainer from "./editor/EditorContainer.jsx"
import EmailContainer from "./emails/EmailContainer.jsx"
import AdminContainer from "./admin/AdminContainer.jsx"
import MediaContainer from "./media/MediaContainer.jsx"
import LoginContainer from "./login/LoginContainer.jsx"

class App extends React.Component {
	doLogout() {
		axiosClient
			.get("/api/auth/logout")
			.then(status => {
				console.log(status)
				this.props.history.push('/login')
			})
			.catch(err => {
				axiosClient.post("/api/log", {
					level: "error",
					data: err
				})
			})
	}

	render() {
		return (
			<div>
				<NotificationContainer />

				<div className="app-nav">
					<NavBar doLogout={this.doLogout} />
				</div>
				<div className="app-content">
					<div className="container is-fluid">
						<Switch>
							<Route path="/" exact component={EmailContainer} />
							<Route path="/editor" component={EditorContainer} />
							<Route path="/editor/:id" render={p => <EditorContainer {...p} />} />
							<Route path="/admin" component={AdminContainer} />
							<Route path="/media" component={MediaContainer} />
							<Route path="/login" component={LoginContainer} />
						</Switch>
					</div>
				</div>
			</div>
		)
	}
}

App.propTypes = {
	children: PropTypes.element
}

export default App
