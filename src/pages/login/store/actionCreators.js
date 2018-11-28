import axios from 'axios';
import * as constants from './constants';
import qs from 'qs';
import { Toast } from 'antd-mobile';


export const handleLogin = (name, password, props)=>{
    return (dispatch)=>{
        axios.post('/php/login.php', qs.stringify({
            name,
            password,
            article_id: '',
            user_id: ''
        }),{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(res=>{
            if(res.data.code === 200){
                dispatch({type: constants.HANDLE_LOGIN, hasLogin: true})
                props.history.push('/home');
                Toast.success('登录成功');
            }else{
                Toast.fail('用户名或者密码错误');
            }
            
        })
    }
}