
import React from 'react';
import { Row, Col, Menu, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

class StartFramingButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="startFramingButton">
                <Button  >{this.props.text}</Button>
            </div>
        )
    }
}

export default StartFramingButton;
