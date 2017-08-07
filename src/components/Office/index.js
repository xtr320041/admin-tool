import React from 'react'
import { BrowserRouter, Route, Redirect, Link, Switch } from 'react-router-dom'
// import { init, isAuthenticated, isVerified } from '../../services/self'
// import { apiGatewayClient } from '../../services/api'
// import './App.css'

const NoMatch = () => <h4>Office Page</h4>

export default class Office extends React.Component {
  constructor() {
    super()
    //init()

    // We are using an S3 redirect rule to prefix the url path with #!
    // This then converts it back to a URL path for React routing
    // NOTE: For local development, you will get a Page Not Found when refreshing the Swagger UI page when it has a #!
    // const hashRoute = location.hash.substring(2)
    // history.pushState({}, 'home page', hashRoute)
  }

  render() {
    return (
      <NoMatch/>

    )
  }
}
