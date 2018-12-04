import React, { Component, Fragment } from 'react';
import { HomeWraper} from './style';
import { Tabs, Toast } from 'antd-mobile';
import Swipers from './components/Swipers';
import  List  from './components/List';
import Image from './components/Image';
import ToolBar from '../../common/toolbar';
import BackToTop from '../../common/backToTop';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'recommend'
        }
        //this.initBack();
        this.handleChangeTabBar = this.handleChangeTabBar.bind(this);
    }
    // initBack(){
    //     document.addEventListener('plusready', function() {
    //         var webview = plus.webview.currentWebview();
    //         plus.key.addEventListener('backbutton', function() {
    //             webview.canBack(function(e) {
    //                 if(e.canBack) {
    //                     webview.back();             
    //                 } else {
    //                     //webview.close(); //hide,quit
    //                     //plus.runtime.quit();
    //                     //首页返回键处理
    //                     //处理逻辑：1秒内，连续两次按返回键，则退出应用；
    //                     var first = null;
    //                     plus.key.addEventListener('backbutton', function() {
    //                         //首次按键，提示‘再按一次退出应用’
    //                         if (!first) {
    //                             first = new Date().getTime();
    //                             Toast.info('再按一次退出应用', 1);
    //                             setTimeout(function() {
    //                                 first = null;
    //                             }, 1000);
    //                         } else {
    //                             if (new Date().getTime() - first < 1500) {
    //                                 plus.runtime.quit();
    //                             }
    //                         }
    //                     }, false);
    //                 }
    //             })
    //         });
    //     });
    // }
    renderContent = tab =>(
        <Fragment>
          <Swipers></Swipers>
          <Image />
          <List selectedTab={this.state.selectedTab}/>
        </Fragment>
    );
    
    render() {
        const tabs = [
            { title: '推荐' },
            { title: '文章' },
            { title: '养生' },
            { title: '健身' },
            { title: 'IT' },
            { title: '相册' },
            { title: '随笔' },
          ];
          return (
              <HomeWraper>
                <Tabs prerenderingSiblingsNumber={0} onChange={this.handleChangeTabBar} tabs={tabs} swipeable={false} tabBarUnderlineStyle={{border: 'none'}} tabBarActiveTextColor="#ef524d" renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                        {this.renderContent()}
                </Tabs>
                <ToolBar currentBar="home"/>
                <BackToTop />
              </HomeWraper>
          );
    }

    handleChangeTabBar(e) {
        this.setState({
            selectedTab: e.title
        });
    }
};
export default Home;