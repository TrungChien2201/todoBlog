import React from "react";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="TODO BLOG" />
    <div className="content-page">
    <h1>Hi people </h1>
    <p>Welcome to your new Gatsby ToDo training site.</p>
    <p className="">Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </div>
  </Layout>
)

export default IndexPage
