import React, { Component , Fragment} from 'react';
import { ListWraper, ListItem, ListInfo, Mask , Operate} from './style';
import { Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import { comments, like, watch } from '../../statics/common';
import  cb  from '../../util/cube';
import BackToTop from '../../common/backToTop';
import { Toast } from 'antd-mobile';
class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleType: this.props.articleType,
            listData: [],
            isLongTouch: false,
            id: 'listWrap'
        }
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.hideMask = this.hideMask.bind(this);
        this.cancelFavourite = this.cancelFavourite.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
    }

    handleTouchStart(e, id, index) {
        e.preventDefault();
        document.documentElement.style.webkitTouchCallout='none';
        this.timeStart = new Date().getTime();
        this.articleId = id;
        this.index = index
        this.timeout = setTimeout(()=>{
            this.setState({
                isLongTouch: true
            });
        }, 1000);
    }

    handleTouchEnd() {
        clearTimeout(this.timeout);
    }
    cancelFavourite(e) {
        e.stopPropagation();
        const self = this;
        this.setState({
            isLongTouch: false
        });
        axios.post('php/likeArticle.php', qs.stringify({
            article_id: this.articleId,
            author_id: cb.CookieParser.getCookie('author_id'),
            author_name: cb.CookieParser.getCookie('name'),
            token: cb.CookieParser.getCookie('token'),
            number: 0,
            like: false
        }),{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(res=>{
            if(res.data.code === 200){
                const list = self.state.listData;
                const newFavouriteList = decodeURIComponent(cb.CookieParser.getCookie('likesofarticle')).split(',').splice(self.index).join()
                cb.CookieParser.setCookie('likesofarticle', newFavouriteList)
                list.splice(self.index, 1);
                this.setState({
                    listData: list
                });
            }            
        })
    }

    deleteArticle(e){
        const self = this;
        e.stopPropagation();
        this.setState({
            isLongTouch: false
        });
        axios.post('/php/deleteArticle.php', qs.stringify({
            id: this.articleId,
            author_id: cb.CookieParser.getCookie('author_id'),
            token: cb.CookieParser.getCookie('token')
        }), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(res=>{
            if(res.data.code === 200){
                const list = self.state.listData;
                list.splice(self.index, 1);
                this.setState({
                    listData: list
                });
            }       
        })

    }

    hideMask() {
        this.setState({
            isLongTouch: false
        });
    }
    render() {
        return (
            <Fragment>
                <ListWraper id={this.state.id}  style={this.state.isLongTouch ? {overflowY: 'hidden'} : {overflowY: 'auto'}}>
                    {
                        this.state.listData.length ? this.state.listData.map((item, index)=>{
                            return <Link key={item.id} to={"detail/" + item.id}>
                                <ListItem onTouch onTouchStart={(e)=>{this.handleTouchStart(e, item.id, index)}} onTouchEnd={this.handleTouchEnd} >
                                    <ListInfo>
                                        <h3 className="title">{item.name}</h3>
                                        <p className="desc">{item.description}</p>
                                        {this.state.articleType !== 'private' && <p className="info">
                                            <span>
                                                <img src={watch} alt=""/>
                                                {item.watch}
                                            </span>
                                            <span>
                                                <img src={comments} alt=""/>
                                                {item.comment && item.comment.length}
                                            </span>
                                            {/* <span>
                                                <img src={like} alt=""/>
                                                {item.support}
                                            </span> */}
                                        </p>}
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        }) : <p className="noDataTip">暂无文章...</p>
                    }
                </ListWraper>
                { this.state.isLongTouch && <Mask onClick={this.hideMask}>
                    {this.state.articleType === 'favourite' ? <Operate onClick={this.cancelFavourite}>
                        取消喜欢
                    </Operate> : <Operate onClick={this.deleteArticle}>
                        删除文章
                    </Operate> }
                </Mask> }
                <BackToTop domId={this.state.id}  bottom={10} />
            </Fragment>
        )
    }

    componentDidMount() {
        Toast.loading('加载中...', 0);
        switch(this.state.articleType){
            case 'favourite':
            axios.get('/php/getFavouriteArticles.php?articleArr=' + cb.CookieParser.getCookie('likesofarticle')).then(res=>{
                Toast.hide();
                this.setState({
                    listData: res.data
                });
            })
            break;
            case 'my':
            axios.get('/php/user.php?userId=' + cb.CookieParser.getCookie('author_id')).then(res=>{
                Toast.hide();
                this.setState({
                    listData: res.data && res.data.articles
                });
            })
            break;
            case 'private':
            axios.get('/php/user.php?userId=' + cb.CookieParser.getCookie('author_id')).then(res=>{
                Toast.hide();
                this.setState({
                    listData: res.data && res.data.notes
                });
            })
            break;
            default: 
            break;

        }
    }
}


export default ArticleList;