import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from "./home";
import NoMacth from "./nomatch";
import store from "../asstes";
import {Provider} from 'react-redux'
function Souter(){
    return(
        <div>
            <Provider store={store}>
            <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='*' component={NoMacth} />
            </Switch>
            </Router>
            </Provider>
        </div>
    )
}

export default Souter;