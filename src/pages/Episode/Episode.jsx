import React from 'react';
import SingleEpisode from "../../components/SingleEpisode";
import {Layout} from "antd";
import {Link} from "react-router-dom";

const { Header, Content } = Layout;

const Episode = () => {
  return (
    <Layout>
      <Header>
        <h1 style={{ color: '#fff !important' }}>
          <Link to={"/"}>Go back</Link>
        </h1>
      </Header>
      <Content>
        <SingleEpisode />
      </Content>
    </Layout>
  );
};

export default Episode;