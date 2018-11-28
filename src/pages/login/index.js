import React, { Component } from 'react';
import { LoginWraper } from './style';
import axios from 'axios';
import qs from 'qs';
import { Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import { actionCreators } from './store';
class Login extends Component{
    render() {
        return (
            <LoginWraper>
                <form className='form' action="">
                    <div className="userName">
                        <label htmlFor="user">用户名</label>
                        <input id="user" type="text" ref={input=> this.userInput = input} name="user" />
                    </div>
                    <div className="password">
                        <label htmlFor="password">密码</label>
                        <input id="password"  ref={input=> this.pwdInput = input} type="password" name="pwd" />
                    </div>
                    <button onClick={this.props.handleLoginFun.bind(this)}>登录</button>
                </form>
            </LoginWraper>
        )
    }
}
const mapDispatch = (dispatch)=>({
    handleLoginFun(e) {
        e.preventDefault();
        const name = this.userInput.value;
        const pwd = this.pwdInput.value;
        dispatch(actionCreators.handleLogin(name, pwd, this.props));
    }
})
export default connect(null, mapDispatch)(Login);
