import React from 'react';
import EpisodeList from "../../components/EpisodeList/EpisodeList";
import {Layout} from "antd";

const { Header, Content } = Layout

const Main = () => {

  return (
    <Layout>
      <Header>
        <h1 style={{ color: '#fff' }}>Main page</h1>
      </Header>
      <Content style={{ padding: "50px", }}>
        <EpisodeList />
      </Content>
    </Layout>
  );
};

export default Main;