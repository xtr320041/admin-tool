import React from 'react'
import { BrowserRouter, Route, Redirect, Link, Switch } from 'react-router-dom'
// import { init, isAuthenticated, isVerified } from '../../services/self'
// import { apiGatewayClient } from '../../services/api'
// import './App.css'
import Office from '../Office';

const NoMatch = () => <h2></h2>

export default class Main extends React.Component {
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
      <BrowserRouter>
        <div >
          <section>
              {/* <AlertPopup /> */}
              <Switch>
                 {/* <Route exact path="/" component={Home} /> */}
                <Route path="/Office" component={Office} />
                {/* <Route path="/getting-started" component={GettingStarted} />
                <Route path="/recover-password" component={RecoverPassword} />
                <Route path="/dashboard" component={Dashboard}/>
                <Route exact path="/apis" component={Apis}/>
                <Route path="/apis/:apiId" component={ApiDetails}/>  */}
                <Route component={NoMatch}/>
              </Switch>
          </section>
        </div>
      </BrowserRouter>
    )
  }
}
