import React from 'react';
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {
    const session = sessionStorage.getItem('token')
    const role = sessionStorage.getItem('role')
    return (
        <Route
            {...rest}
            render={({ location }) =>
                session && role ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    )
}
export default PrivateRoute;