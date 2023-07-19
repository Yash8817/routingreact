import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import User from "./User";

function App()
{
    return 
        <BrowserRouter>
    <div>
            <Route path="/Home">
                Welcome to My Page 
            </Route>

            <Route path="/user/:username">
                <User />
            </Route>

            <Route path="/">
                You reach out to me at @yash_8817
            </Route>

    </div>
        </BrowserRouter>
}



export default App