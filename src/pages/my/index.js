import React, { Component } from 'react';
import { HomeWraper, AvatorContent, DataBord, List,ListItem } from './style';
import ToolBar from '../../common/toolbar';
import axios from 'axios';

class My extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo : {}
        }
    }
    render() {
        const { name, avator, description, likes, fans, articles, wordNumber} = this.state.userInfo;
        return (
            <HomeWraper>
                <AvatorContent>
                    <img src={avator} alt="" />
                    <div className="nameAndDesc">
                        <p className="name">{name}</p>
                        <p className="desc">{description}</p>
                    </div>
                </AvatorContent>
                <DataBord>
                    <div>
                        <p>{likes && likes.length}</p>关注
                    </div>
                    <div>
                        <p>{fans && fans.length}</p>粉丝
                    </div>
                    <div>
                        <p>{articles && articles.length}</p>文章
                    </div>
                    <div>
                        <p>{wordNumber}</p>字数
                    </div>
                </DataBord>
                <List>
                    <ListItem>我的文章</ListItem>
                    <ListItem>我喜欢的文章</ListItem>
                    <ListItem>日记本</ListItem>
                    <ListItem>设置</ListItem>
                </List>
                <ToolBar currentBar='my'/>
            </HomeWraper>
        )
    }

    componentDidMount() {
        axios.get('/php/user.php?userId=28').then(res=>{
            this.setState({
                userInfo: res.data
            })
        })
    }
}

export default My;