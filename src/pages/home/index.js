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
        this.handleChangeTabBar = this.handleChangeTabBar.bind(this);
    }
    renderContent = tab =>(
        <Fragment>
          <Swipers></Swipers>
          <Image />
          <List selectedTab={this.state.selectedTab}/>
        </Fragment>
    );
    componentDidMount() {
        Toast.loading('loading...');
    }
    render() {
        const tabs = [
            { title: '推荐123' },
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
        Toast.loading('loading...');
        this.setState({
            selectedTab: e.title
        });
    }
};
export default Home;