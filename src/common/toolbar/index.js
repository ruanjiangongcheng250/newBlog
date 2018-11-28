import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {my, myActive, home, homeActive, publish} from '../../statics/toolbar';
import { connect } from 'react-redux';
import { 
    ToolBarWraper,
    ToolBarItem
} from './style';
class ToolBar extends Component{
    shouldComponentUpdate(nextprops){
        if( nextprops.currentBar === this.props.currentBar){
            return false;
        }
    }
    render (){
        const { currentBar, hasLogin } = this.props;
        return (
            <ToolBarWraper>
                <Link to="">
                    <ToolBarItem className={currentBar === 'home' ? "active" : ""} >
                        <img src={currentBar === 'home' ? homeActive : home} alt="" />
                        首页
                    </ToolBarItem>
                </Link>
                <Link to="/publish">
                    <ToolBarItem>
                        <img src={publish} alt="" />
                        发布
                    </ToolBarItem>
                </Link>
                <Link to={ hasLogin ? "/my" : "/login"}>
                    <ToolBarItem className={currentBar === 'my' ? "active" : ""} >
                        <img src={currentBar === 'my' ? myActive : my} alt="" />
                        我的
                    </ToolBarItem>
                </Link>
            </ToolBarWraper>
        )
    }
}

const mapState = (state)=>({
    hasLogin: state.getIn(['login', 'hasLogin'])
})

export default connect(mapState, null)(ToolBar);