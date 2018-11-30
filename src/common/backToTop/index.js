import React, { Component } from 'react';
import {BackToTopWraper, Content } from './style';
import { backToTop } from '../../statics/common/index';
class BackToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showIcon: false,
            bottom: this.props.bottom || 60,
            domId: this.props.domId
        }
        this.backToTop = this.backToTop.bind(this);
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
        if(this.state.domId){
            document.getElementById(this.state.domId).scrollTo(0, 0);
        }else{
            document.documentElement.scrollTo(0,0);
        }
    }

    componentDidMount() {
        this.handleScrollTop();
    }
    componentWillUnmount() {
        this.setState = (state,callback)=>{
            return;
        };
    }
    handleScrollTop() {
        console.log(this.state.domId);
        if(this.state.domId){
            const dom = document.getElementById(this.state.domId);
            dom.addEventListener('scroll', () => {
                const showIcon = dom.scrollTop > 500  ? true : false
                this.setState({
                    showIcon: showIcon 
                })
            })
        }else{
            document.addEventListener('scroll', () => {
                const showIcon = document.documentElement.scrollTop > 500  ? true : false
                this.setState({
                    showIcon: showIcon 
                })
            })
        }
    }
}

export default BackToTop;