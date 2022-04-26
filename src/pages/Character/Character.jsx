import React from 'react';
import {Link} from "react-router-dom";
import {Layout} from "antd";
import SingleCharacter from "../../components/SingleCharacter/SingleCharacter";

const { Header, Content } = Layout;

const Character = () => {

  return (
    <Layout>
      <Header>
        <h1 style={{ color: '#fff !important' }}>
          <Link to={"/"}>Go back</Link>
        </h1>
      </Header>
      <Content>
        <SingleCharacter />
      </Content>
    </Layout>
  );
};

export default Character;