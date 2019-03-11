import React from 'react';
import {NavLink,Route,HashRouter as Router,Switch} from 'react-router-dom';
import Prolist from './Prolist'
import Topic from './Topic'

class Luxian extends React.Component{
    render(){
        return(
            <div className="container">
                <header className="head">
                    <NavLink to="/Luxian/prolist">产品列表</NavLink>
                    <NavLink to="/Luxian/topic">话题分类</NavLink>
                </header>
                <Router>
                    <section>
                        <Switch>
                        <Route path="/Luxian/prolist" component={Prolist}></Route>
                        <Route path="/Luxian/topic" component={Topic}></Route>
                        </Switch>
                    </section>
                </Router>
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
export default Luxian;