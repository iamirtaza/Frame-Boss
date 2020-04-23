import React from 'react';
import { Row, Col, Menu, Dropdown, Collapse } from 'antd'
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Panel } = Collapse;

const menu = (
    <Menu style={{ backgroundColor: '#F9F9F9', top: '30px' }} className="dropdown-menu-items" >
        <Menu.Item>
            <a target="_blank">
                Gifts
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                Diploma Framing
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                Jersey Framing
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                Canvas Framing
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                Instagram Framing
        </a>
        </Menu.Item>
    </Menu>
);

class MainMenu extends React.Component {

    render() {
        return(
        <Collapse >
            <Panel extra={<MenuOutlined/>} showArrow={false} key="1">
                <div className="main-menu" >
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Services <DownOutlined />
                        </a>
                    </Dropdown>
                    <br />
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Frames <DownOutlined />
                        </a>
                    </Dropdown>
                    <br />
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Blog
               </a>
                    <br />
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Contact Us
                </a>
                </div>
            </Panel>
        </Collapse>
        );
    }
}

export default MainMenu;