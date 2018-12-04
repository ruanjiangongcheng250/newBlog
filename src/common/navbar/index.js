import React, { Component } from 'react';
import { NavBar as NB, Icon } from 'antd-mobile';

class NavBar extends Component {
    render() {
        const { title, handleLeftClick, rightContent, handleRightClick } = this.props;
        return (
            <NB style={{position: 'fixed', width: '100%', top: 0}}
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={ handleLeftClick }
            rightContent={<span onClick={handleRightClick}>{rightContent}</span>}
          >{title}</NB>
        )
    }
}

export default NavBar;