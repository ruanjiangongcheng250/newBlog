import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './style';
import { DetailWraper, Title, Content, Author } from './style';
import NavBar from '../../common/navbar';
import BackToTop from '../../common/backToTop';

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