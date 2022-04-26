import React, {useEffect, useState} from 'react';
import {requestService} from "../../services";
import {Card, Col, Row, Skeleton} from 'antd';
import {Link} from "react-router-dom";

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    requestService.episodeDao.getAllEpisodes().then(res => setEpisodes(res.data));
  }, [])

  return (
    <div>
      <Row gutter={[16, 16]}>
        {episodes ? episodes.map(item => (
          <Col key={item.title}  span={8}>
            <Card title={<Link to={`/episodes/${item.episode_id}`}>{item.title}</Link> }>Air date: {item.air_date}</Card>
          </Col>
        )) : <Skeleton />}
      </Row>
    </div>
  );
};

export default EpisodeList;