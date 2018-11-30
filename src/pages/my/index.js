import React, { Component } from 'react';
import { HomeWraper, AvatorContent, DataBord, List,ListItem } from './style';
import ToolBar from '../../common/toolbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import cb from '../../util/cube';
class My extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo : {}
        }
    }
    componentWillMount() {
        if(!cb.CookieParser.getCookie('name')){
            this.props.history.push('/login');
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
                    <Link to="myArticles"><ListItem>我的文章</ListItem></Link>
                    <Link to="myFavouriteArticles"><ListItem>我喜欢的文章</ListItem></Link>
                    <Link to="note"><ListItem>日记本</ListItem></Link>
                    <Link to="setting"><ListItem>设置</ListItem></Link>
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