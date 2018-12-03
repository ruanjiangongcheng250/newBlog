import React, { Component, Fragment } from 'react';
import ArticleList from '../../common/articleList';
import NavBar from '../../common/navbar';

class Private extends Component{
    render() {
        return(
            <Fragment>
                <NavBar title="私密文章" handleLeftClick={()=>{this.props.history.goBack()}}/>
                <ArticleList articleType="private"/>
            </Fragment>
        )
    }
}

export default Private;