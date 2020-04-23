
import React from 'react';
import { Row, Col } from 'antd'
import SectionHeading from '../SectionHeading'
import BlogLayout from './blogLayout'
import blog1 from '../../../Assets/Images/frame-front.png'
import blog2 from '../../../Assets/Images/blog-image.png'
import 'antd/dist/antd.css';

class Section7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                {
                    category: 'Category Blog',
                    title: 'A Very Anthropologie Holiday with Jodie Harrison',
                    author: 'Admin',
                    date: '30/3/2020',
                    blogData: 'One of my favorite illustrators, Dan who goes by the creative name of Roach Graphics,...',
                    thumbnail: blog1
                },
                {
                    category: 'Category Blog',
                    title: 'A Very Anthropologie Holiday with Jodie Harrison',
                    author: 'Admin',
                    date: '30/3/2020',
                    blogData: 'One of my favorite illustrators, Dan who goes by the creative name of Roach Graphics,...',
                    thumbnail: blog2
                }
            ]
        }
    }
    render() {
        return (
            <div className="section-7 container">
                <SectionHeading
                    headingName={"Our Blog"}
                    subText={"Our Countless Frame Types Are Loved By Global Frame Lovers, Due To The Variety, Quality Yet Simplicity."} />
                <Row>
                    {
                        this.state.blogs.map(item => {
                            return <Col lg={12} md={12} xs={24} sm={24} >
                                <BlogLayout
                                    category={item.category}
                                    title={item.title}
                                    author={item.author}
                                    date={item.date}
                                    blogData={item.blogData}
                                    thumbnail={item.thumbnail}
                                />
                            </Col>
                        })
                    }
                </Row>
            </div>
        )
    }
}

export default Section7;
