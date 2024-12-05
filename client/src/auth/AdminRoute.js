import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, } from 'react-redux'




const AdminRoute = ({ component: Component, ...rest }) => {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    console.log({ userInfo });

    const getItem = localStorage.getItem("userInfo")
    console.log({ getItem });

    return <Route
        {...rest}
        render={props =>
            getItem && getItem.role === 0 ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/signin",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
}

export default AdminRoute;