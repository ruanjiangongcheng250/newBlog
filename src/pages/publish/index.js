import React, { Component } from 'react';
import { PublishWrap, PublishContent } from './style';
import { Toast } from 'antd-mobile';
import NavBar from '../../common/navbar';
import axios from 'axios';
import cb from '../../util/cube';
import qs from 'qs';
class Publish extends  Component {
    constructor(props){
        super(props);
        this.handlePublish = this.handlePublish.bind(this);
    }
    render (){
        return (
            <PublishWrap>
                <NavBar title="发布文章" rightContent={<span style={{fontSize: '12px', color: 'red'}}>发布</span>} handleRightClick={this.handlePublish}  handleLeftClick={()=>{this.props.history.goBack()}}/>
                <PublishContent>
                    <p className='title'>
                        <input ref={el=>this.title=el} type='text' placeholder='请输入文章标题'/>
                    </p>
                    <div className='content'>
                        <textarea ref={el=>this.content=el} placeholder="请输入正文"/>
                    </div>
                </PublishContent>
            </PublishWrap>
        )
    }
    handlePublish() {
        const self = this;
        const commitData = {
            id: '',
            author: cb.CookieParser.getCookie('name'),
            author_id: cb.CookieParser.getCookie('author_id'),
            token: cb.CookieParser.getCookie('token'),
            type:'',
            name: this.title.value,
            time: cb.formatDate(new Date()),
            content: this.content.value,
            wordNumber: this.content.value.length,
            isPrivate: 0,
            description: this.content.value.substr(0, 200)   
        }
        axios.post('/php/addOrEditArticle.php', qs.stringify(commitData), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(res=>{
            if(res.data.code === 999){
                Toast.info(res.data.message, 1);
                setTimeout(()=>{
                    self.props.history.push('/login');
                },1000);
            }else{
                Toast.success('文章发布成功', 1);
                self.props.history.replace('/home')
            }
        })
    }
}

export default Publish;