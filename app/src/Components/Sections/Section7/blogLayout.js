
import React from 'react';
import { Row, Col, Menu, Button } from 'antd'
import ReadMore from '../../Buttons/ReadMore'
import 'antd/dist/antd.css';

class BlogLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Row className="blog">
                <Col lg={11} md={24} xs={24} sm={24} >
                <img src={this.props.thumbnail} />
                </Col>
                <Col lg={12} md={24} xs={24} sm={24} >
                <div style={{marginTop:'18px'}} >
                <p className="blog-category" >{this.props.category}</p>
                <p className="blog-title">{this.props.title}</p>
                <div style={{display:'flex'}} >
                <p className="blog-category" >By {this.props.author}</p>
                <p style={{marginLeft:'60px'}} className="blog-category" >{this.props.date}</p>
                </div>
                <p className="blog-category">
                {this.props.blogData}
                </p>
                <ReadMore text={"Read More"} />
                </div>
                </Col>
            
            </Row>
        )
    }
}

export default BlogLayout;
