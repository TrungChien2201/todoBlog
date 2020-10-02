import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/blog.scss'
const Blog = () => {
    const blogContent = JSON.parse(localStorage.getItem('contentblog'));
    const [listBlog, setListBlog] = useState(blogContent ? blogContent : []);
    const handleOnchange = (valueSelect) => {
        const FilterValue = listBlog.filter(el => el.classify === valueSelect.target.value)
        setListBlog(FilterValue)
    }
    const ReesetListBlog = () => {
        setListBlog(blogContent)
    }
    return (
        <Layout>
            <SEO title="Page two" />
            <div className="content-page">
                <div className="d-flex justify-content-between">
                    <div>
                        <h2>All Post</h2>
                        <Button className="mt-3" onClick={ReesetListBlog}>Reset</Button>
                    </div>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom" >
                            <Form.Label className="select-title">Custom select</Form.Label>

                            <Form.Control className="mt-2" as="select" custom onChange={handleOnchange} >
                                <option value="">Choose option</option>
                                <option value="sport">Sport</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="information">Information</option>
                                <option value="other">Others</option>
                            </Form.Control>

                        </Form.Group>
                    </Form>
                </div>

                <div className="row">
                    {listBlog ? listBlog.map((item, index) => (
                        <div key={index} className="col-6 py-3">
                            <div className="card-blog">
                                <div className="d-flex card-blog_header">
                                    <img src={`/images/${item.image}`} />
                                    <div className="pl-3 card-blog_header_text">
                                        <h5 className="mb-0">{item.title}</h5>
                                        <p className="mb-0 card-blog_header_text-description">({item.description})</p>
                                        <p className="mb-0 font-weight-bold"><em>Time post: {item.datetime}</em></p>
                                    </div>
                                </div>
                                <div className="card-blog_content">{item.body}</div>
                                <p className="card-blog_tag">#{item.tag}</p>
                            </div>
                        </div>
                    )) : ''}
                </div>
            </div>
        </Layout>
    )
}
export default Blog;