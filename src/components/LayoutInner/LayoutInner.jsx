import React from 'react';
import {Layout} from "antd";
import {Link} from "react-router-dom";

const { Header, Content } = Layout;

const LayoutInner = ({ goHomeLink = false, children}) => {
  return (
    <Layout>
      <Header>
        <h1 style={{ color: '#fff' }}>
          {goHomeLink
            ?  <Link to={"/"}>Go back</Link>
            : 'Main page'
          }
        </h1>
      </Header>
      <Content style={{ padding: "50px", }}>
        {children}
      </Content>
    </Layout>
  );
};

export default LayoutInner;