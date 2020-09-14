import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RoutePaths from './utilities/routes.json'
import components from './utilities/components'
function Routes() {
    return (
        <>
          <Switch>
              {RoutePaths.map((route)=>{
                 const RouteComponent = components[route.componentName]
                 return <Route key={route.id} exact path={route.path} component={RouteComponent}  />
              })}
              {/* <Route path="/contact" exact component={Contact} /> */}
          </Switch>
        </>
    )
}

export default Routes
