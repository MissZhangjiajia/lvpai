import React from 'react';
import Remai from './Remai';
import Guang from './Guang';
import Tui from './Tui';
import {NavLink,Route,HashRouter as Router,Redirect,Switch} from 'react-router-dom';

class Home extends React.Component{
render(){
return(
<div  className="container">
    <header className="head">        
        <NavLink to="/home/remai">热卖</NavLink>
        <NavLink to="/home/guang">逛逛</NavLink>
        <NavLink to="/home/tui">推荐</NavLink>
    </header>
    <section>
        <Router>
                <Switch>
                <Route path="/home/guang" component={Guang}>逛逛</Route>
                <Route path="/home/remai" component={Remai}>热卖</Route>
                <Route path="/home/tui" component={Tui}>推荐</Route>
                <Redirect to="/home/remai"/>
            </Switch>
        </Router>
    </section>
    <footer className="foot">
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/luxian">路线</NavLink>
        <NavLink to="/dingzhi">定制</NavLink>
        <NavLink to="/kepian">客片</NavLink>
        <NavLink to="/me">我的</NavLink>
    </footer>

</div>
)
}
}
export default Home;