import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Form } from "react-bootstrap"
import { useStaticQuery } from "gatsby";
import { v4 as uuidv4 } from 'uuid';
import ModalEdit from "../components/modalEdit";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const SecondPage = () => {
  const { site } = useStaticQuery(graphql`
  query{
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm")
    }
  }
`)
  const [isdisplay, setisDisplay] = useState();
  const [images, setImage] = useState('');
  const [validated, setValidated] = useState(false);
  const [infor, setinfor] = useState({
    id: '',
    classify: '',
    title: '',
    description: '',
    datetime: '',
    image: '',
    body: '',
    tag: ''
  });
  const blogcontent = JSON.parse(localStorage.getItem('contentblog'));
  const [listBlog, setListBlog] = useState(blogcontent ? blogcontent : []);
  const valueEnter = {
    id: uuidv4(),
    classify: infor.classify,
    title: infor.title,
    description: infor.description,
    datetime: site.buildTime,
    image: images.name,
    body: infor.body,
    tag: infor.tag
  };
  const SubmitCreate = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    }
    else {
      listBlog.push(valueEnter);
      toast.success('Create blog success');

      localStorage.setItem('contentblog', JSON.stringify(listBlog));
      setinfor({
        classify: '',
        title: '',
        description: '',
        datetime: '',
        image: '',
        body: '',
        tag: ''
      })
      setisDisplay('');
      setValidated(false);
    }
  }
  const handleOnchange = (key) => (event) => {

    setinfor({ ...infor, [key]: event.target.value })
  }

  const OpenForm = () => {
    setisDisplay(true)
  }
  const CloseForm = () => {
    setisDisplay('')
  }
  const deleteBlog = (itemId) => {
    if (itemId) {
      toast.success('Delete success');
    }
    else {
      toast.error('Delete fail');
    }
    const filterList = listBlog.filter(el => el.id !== itemId);
    setListBlog(filterList);
    localStorage.setItem('contentblog', JSON.stringify(filterList));
  }

  const UpdateBlog = (item) => {
    if (item) {
      toast.success('Update success');
    }
    else {
      toast.error('Update fail');
    }
    const editBlog = listBlog.map(el => {
      if (el.id === item.id) {
        return item
      }
      return el
    })
    setListBlog(editBlog);
    localStorage.setItem('contentblog', JSON.stringify(editBlog))
  }
  return (
    <Layout>
      <SEO title="Page two" />
      <div className="content-page">
        <h1>Hi every one</h1>
        <p>Welcome to Admin Page</p>
        {isdisplay ? <Button type="button" variant="danger" onClick={CloseForm}>Close</Button> : <Button type="button" onClick={OpenForm}>New Blog</Button>}
        {isdisplay ?
          <div className="mt-3">
            <Form noValidate validated={validated} onSubmit={SubmitCreate}>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label >Classify Blog</Form.Label>
                <Form.Control required as="select" custom onChange={handleOnchange("classify")}>
                  <option value="">Choose option</option>
                  <option value="sport">Sport</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="information">Information</option>
                  <option value="other">Others</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control required type="text-muted" value={infor.title} onChange={handleOnchange("title")} placeholder="title" />
                <Form.Text className="text-muted">
                  We'll never share content blog with anyone else.
            </Form.Text>
                <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Desciption</Form.Label>
                <Form.Control required type="text-muted" value={infor.description} onChange={handleOnchange("description")} placeholder="description" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
          </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control required type="file" onChange={(e) => setImage(e.target.files[0])} placeholder="image" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
          </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Body</Form.Label>
                <Form.Control required type="text-muted" value={infor.body} onChange={handleOnchange("body")} as="textarea" rows="6" placeholder="body" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
          </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Tag</Form.Label>
                <Form.Control required type="text-muted" value={infor.tag} onChange={handleOnchange("tag")} placeholder="tag" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
          </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary"  type="submit">
                Submit
            </Button>
              <ToastContainer />
            </Form>
          </div> : ''}
        <div>
          {
            listBlog ? listBlog.map((item, index) => (
              <div key={index} className="d-flex">
                <div className="d-flex blog-view">
                  <div className="blog-view-title">{item.title}</div>
                  <Button className="btn-close ml-3" onClick={() => deleteBlog(item.id)}><i className="fa fa-times-circle"></i></Button>
                  <ToastContainer />
                </div>
                <ModalEdit data={item} UpdateBlog={UpdateBlog} />
              </div>
            )) : ''
          }
        </div>
        <br></br>
        <br></br>
      </div>
    </Layout>
  )
}

export default SecondPage
