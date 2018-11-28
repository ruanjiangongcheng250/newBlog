import React, { Component } from 'react';
import {BackToTopWraper, Content } from './style';
import { backToTop } from '../../statics/common/index';
class BackToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showIcon: false,
            bottom: this.props.bottom || 60
        }
    }
    render() {
        const {showIcon, bottom} = this.state;
        return (
            showIcon ?
            <BackToTopWraper bottom={bottom} onClick={this.backToTop}>
                <Content>
                    <img src={backToTop} alt=""/>
                </Content>
            </BackToTopWraper> : null
        )
    }

    backToTop(e) {
        e.stopPropagation();
        document.documentElement.scrollTo(0,0);
    }

    componentDidMount() {
        this.handleScrollTop();
    }
    componentWillUnmount() {
       // document.removeEventListener('scroll');
    }
    handleScrollTop() {
        document.addEventListener('scroll', () => {
            const showIcon = document.documentElement.scrollTop > 500  ? true : false
            this.setState({
                showIcon: showIcon 
            })
        })
        // document.onscroll = () => {
        //     const showIcon = document.documentElement.scrollTop > 500  ? true : false
        //     this.setState({
        //         showIcon: showIcon 
        //     })
        // }
    }
}

export default BackToTop;