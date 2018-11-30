import React, { Component, Fragment } from 'react';
import ArticleList from '../../common/articleList';
import NavBar from '../../common/navbar';

class MyArticles extends Component{
    render() {
        return(
            <Fragment>
                <NavBar title="我的文章" handleLeftClick={()=>{this.props.history.goBack()}}/>
                <ArticleList articleType="my"/>
            </Fragment>
        )
    }
}

export default MyArticles;