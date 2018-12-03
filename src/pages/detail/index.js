import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './style';
import { DetailWraper, Title, Content, Author, Comment, CommentList, CommentItem } from './style';
import NavBar from '../../common/navbar';
import BackToTop from '../../common/backToTop';
import Item from 'antd-mobile/lib/popover/Item';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            id: this.props.match.params.id,
            article: {}
        }
        this.handleLeftClick = this.handleLeftClick.bind(this);
    }
    render() {
        const { article} = this.state;
        return (
            <Fragment>
                <NavBar title="详情" handleLeftClick={this.handleLeftClick}/>
                <DetailWraper>
                    <Title>{ article.name }</Title>
                    <Author>作者： { article.author }</Author>
                    <Content dangerouslySetInnerHTML={{__html: article.content}} />
                </DetailWraper>
                <Comment>
                    <p className="title">评论</p>
                    <CommentList>
                        {
                            article.comment && article.comment.length ? article.comment.map((item) => {
                                return <CommentItem>
                                    <img src={item.author_avator} alt=""/>
                                    <div className='rightContent'>
                                        <p className="nameAndTime">
                                            <span className="name">{item.author}</span>
                                            <span className="time">{item.time}</span>
                                        </p>
                                        <p className="content">{item.content}</p>
                                    </div>
                                </CommentItem>
                            }) : <p>暂无评论···</p>
                        }
                    </CommentList>
                </Comment>
                <BackToTop  bottom={20}/> 
            </Fragment>
        )
    }

    componentDidMount() {
        axios.get('/php/detail.php?id='+ this.state.id +'&timeOrder=0').then(res=>{
            this.setState({
                article: res.data[0]
            })
        })
    }

    handleLeftClick() {
        this.props.history.goBack();
    }
}

export default Detail;