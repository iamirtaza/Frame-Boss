
import React from 'react';
import { Row, Col, Menu, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

class ReadMore extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="ReadMore">
                <Button>{this.props.text}</Button>
            </div>
        )
    }
}

export default ReadMore;
