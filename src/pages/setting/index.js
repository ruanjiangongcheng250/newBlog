import React, { Component } from 'react';
import { SettingWrap,SettingContent, LoginOut, BasicSetting, MyProfile, ModifySettingMask } from './style';
import axios from 'axios';
import { Toast } from 'antd-mobile';
import NavBar from '../../common/navbar';
import cb from '../../util/cube';
import qs from 'qs';
class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo : {},
            modifyItem : '',
        }
    }
    ModifyBasicSetting(type) {
        this.setState({
            modifyItem: type
        })
    }
    render() {
        return (
            <SettingWrap>
                <NavBar title="设置" handleLeftClick={()=>{this.props.history.goBack()}} />
                <SettingContent>
                    <BasicSetting>
                        <p className="title">基础设置</p>
                        <p className="setting-item">
                            <span className="item-key">更换头像</span>
                            <input type='file' onChange={(e)=>{this.uploadImage(e, 'avator')}}/>
                            <img src={this.state.userInfo && this.state.userInfo.avator} alt='' />
                        </p>
                        <p className="setting-item" onClick={()=>{this.ModifyBasicSetting('name')}}>
                            <span className="item-key">昵称</span>
                            <span className='item-value'>{this.state.userInfo && this.state.userInfo.name}</span>
                        </p>
                        <p className="setting-item"  onClick={()=>{this.ModifyBasicSetting('email')}}>
                            <span className="item-key">邮箱</span>
                            <span className='item-value'>{this.state.userInfo && this.state.userInfo.mail}</span>
                        </p>
                        <p className="setting-item"  onClick={()=>{this.ModifyBasicSetting('mobile')}}>
                            <span className="item-key">手机</span>
                            <span className='item-value'>{this.state.userInfo && this.state.userInfo.mobile}</span>
                        </p>
                    </BasicSetting>
                    <MyProfile>
                        <p className="title">个人资料</p>
                        <p className="setting-item">
                            <span className="item-key">微信二维码</span>
                            <input type='file' onChange={(e)=>{this.uploadImage(e, 'wechatImage')}}/>
                            <img src={this.state.userInfo && this.state.userInfo.wechatImage} alt=''/>
                        </p>
                        <p className="setting-item">
                            <span className="item-key">性别</span>
                            <span className='item-value'>{this.state.userInfo && (this.state.userInfo.sex === '1' ? '男' : this.state.userInfo.sex === '0' ? '女' : '未知')}</span>
                        </p>
                        <p className="setting-item" onClick={()=>{this.ModifyBasicSetting('description')}}>
                            <span className="item-key">简介</span>
                            <span className='item-value'>{(this.state.userInfo && this.state.userInfo.description) || '您还没有设置签名'}</span>
                        </p>
                        <p className="setting-item"  onClick={()=>{this.ModifyBasicSetting('website')}}>
                            <span className="item-key">网站</span>
                            <span className='item-value'>{(this.state.userInfo && this.state.userInfo.website) || '您还没有设置个人网站'}</span>
                        </p>
                    </MyProfile>
                    <LoginOut onClick={this.handleLoginOut.bind(this)}>
                        <span>退出登录</span>
                    </LoginOut>
                    {this.showModifyContent()}
                </SettingContent>
            </SettingWrap>
        )
    }
    componentDidMount() {
        const self = this;
        axios.get('php/user.php?userId=' + cb.CookieParser.getCookie('author_id')).then(res=>{
            self.setState({
                userInfo: res.data
            });
        })
    }
    uploadImage(e, type) {
        const self = this;
        const param = new FormData();
        const file = e.target.files[0];
        param.append('file', file, file.name)  // 通过append向form对象添加数据
        param.append('chunk', '0') // 添加form表单中其他数据
        axios.post('/php/avator.php',param,  {headers: {'Content-Type': 'multipart/form-data'}}).then(res=>{
            //修改头像
            const userInfo = self.state.userInfo;
            userInfo[type] = res.data.imageName;
            const commitData = {
                author_id: cb.CookieParser.getCookie('author_id'),
                token: cb.CookieParser.getCookie('token')
            }
            if(type === 'avator'){
                commitData.name= this.state.userInfo.name;
                commitData.mobile = this.state.userInfo.mobile;
                commitData.email = this.state.userInfo.mail;
                commitData.avator = res.data.imageName;
                axios.post('/php/saveBasicSetting.php',qs.stringify(commitData), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(res=>{
                    if(res.data.code === 999){
                        Toast.info(res.data.message,1);
                        setTimeout(()=>{
                            self.props.history.push('/login');
                        }, 1000)
                    }else{
                        self.setState({
                            userInfo
                        })
                        Toast.success('上传成功');
                    }
                })
            }else{
                commitData.description= this.state.userInfo.description;
                commitData.sex = this.state.userInfo.sex;
                commitData.website = this.state.userInfo.website;
                commitData.wechatImage = res.data.imageName;
                axios.post('/php/saveProfileSetting.php',qs.stringify(commitData), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(res=>{
                    if(res.data.code === 999){
                        Toast.info(res.data.message, 1);
                        setTimeout(()=>{
                            self.props.history.push('/login');
                        }, 1000)
                    }else{
                        self.setState({
                            userInfo
                        })
                        Toast.success('上传成功');
                    }
                })
            }

        })
    }
    showModifyContent() {
        if(this.state.modifyItem){
            var type = '';
            var value = '';
            var placeholder = '';
            switch(this.state.modifyItem){
                case 'name':
                type = '修改昵称';
                value = this.state.userInfo.name;
                placeholder = '请输入昵称';
                break;
                case 'email':
                type = '修改邮箱';
                value = this.state.userInfo.mail;
                placeholder = '请输入邮箱';                
                break;
                case 'mobile':
                type = '修改手机';
                value = this.state.userInfo.mobile;
                placeholder = '请输入手机';
                break;
                case 'website':
                type = '修改网站';
                value = this.state.userInfo.website;
                placeholder = '请输入个人签名';
                break;
                case 'description':
                type = '修改签名';
                value = this.state.userInfo.description;
                placeholder = '请输入个人网站';
                break;
                default: 

            }
            return <ModifySettingMask>
                    <div className="modifyContnet">
                        <p className="modifyType">{type}</p>
                        <input ref={input=>this[this.state.modifyItem] = input} autofocus="autofocus" placeholder={placeholder} value={value} onChange={this.handleChangeInput.bind(this)} />
                        <p className='btns'><span onClick={this.cancelModify.bind(this)}>取消</span><span onClick={this.saveModify.bind(this)}>确定</span></p>
                    </div>
                </ModifySettingMask>
        }
    }
    cancelModify() {
        const userInfo = this.state.userInfo;
        if(this.defaultValue)
            userInfo[this.state.modifyItem] = this.defaultValue;
        this.defaultValue = '';
        this.setState({
            modifyItem: '',
            userInfo
        })
    }
    handleChangeInput(e) {
        const value = e.target.value;
        const userInfo = this.state.userInfo;
        if(!this.defaultValue)
            this.defaultValue = e.target.defaultValue;
        userInfo[this.state.modifyItem] = value;
        this.setState({userInfo})
    }
    saveModify() {
        const self = this;
        if(this.state.modifyItem === 'website' || this.state.modifyItem === 'description'){
            const commitData = {
                author_id: cb.CookieParser.getCookie('author_id'),
                token: cb.CookieParser.getCookie('token'),
                website: this.state.userInfo.website,
                description: this.state.userInfo.description,
                sex: this.state.userInfo.sex,
                wechatImage: ''
            }
            commitData[this.state.modifyItem] = this[this.state.modifyItem].value;
            this.defaultValue = '';
            axios.post('/php/saveProfileSetting.php',qs.stringify(commitData), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(res=>{
                if(res.data.code === 999){
                    self.setState({
                        modifyItem: ''
                    });
                    Toast.info(res.data.message, 1);
                    setTimeout(()=>{
                        self.props.history.push('/login');
                    }, 1000)
                }else{
                    if(self[self.state.modifyItem].value) 
                      self.state.userInfo[this.state.modifyItem] = self[self.state.modifyItem].value;
                    self.setState({
                        userInfo: self.state.userInfo,
                        modifyItem: ''
                    });
                    Toast.success('修改成功');
                }
            })
        }else{
            const commitData = {
                author_id: cb.CookieParser.getCookie('author_id'),
                token: cb.CookieParser.getCookie('token'),
                email: this.state.userInfo.mail,
                mobile: this.state.userInfo.mobile,
                name: this.state.userInfo.name,
                avator: ''
            }
            commitData[this.state.modifyItem] = this[this.state.modifyItem].value;
            this.defaultValue = '';
            axios.post('/php/saveBasicSetting.php',qs.stringify(commitData), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(res=>{
                if(res.data.code === 999){
                    self.setState({
                        modifyItem: ''
                    });
                    Toast.info(res.data.message, 1);
                    setTimeout(()=>{
                        self.props.history.push('/login');
                    }, 1000)
                }else{
                    if(self[self.state.modifyItem].value) 
                      self.state.userInfo[this.state.modifyItem] = self[self.state.modifyItem].value;
                    self.setState({
                        userInfo: self.state.userInfo,
                        modifyItem: ''
                    });
                    Toast.success('修改成功');
                }
            })
        }
    }
    handleLoginOut() {
        const self = this;
        axios.post('/php/loginOut.php','', {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(res=>{
            Toast.success('已退出当前账号');
            setTimeout(()=>{
                self.props.history.push('/home');
            }, 1000);
        })
    }
}

export default Setting;