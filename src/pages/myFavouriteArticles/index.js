import React, { Component, Fragment } from 'react';
import ArticleList from '../../common/articleList';
import NavBar from '../../common/navbar';
import BackToTop from '../../common/backToTop';

class MyFavouriteArticles extends Component{
    render() {
        return(
            <Fragment>
                <NavBar title="我喜欢的文章" handleLeftClick={()=>{this.props.history.goBack()}}/>
                <ArticleList articleType="favourite"/>
                <BackToTop bottom={10} />
            </Fragment>
        )
    }
}

export default MyFavouriteArticles;