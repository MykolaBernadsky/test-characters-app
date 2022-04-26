import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {requestService} from "../../services";
import {Card, Row, Skeleton } from "antd";
import {EpisodeBlock, Wrapper} from "./styles";

const SingleEpisode = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState({});

  useEffect(() => {
    requestService.episodeDao.getEpisodeById(id).then(res => setEpisode(...res.data));
  }, [id]);

  return (
    <Wrapper>
      {episode.characters ? (
        <Card style={{ width: 550, margin: "0 auto" }} title={episode.title}>
          Air date: {episode.air_date} <br />
          Characters:
          <Row gutter={[16,16]}>
            {episode.characters.map(character => (
              <EpisodeBlock>
                <Link to={`/characters?name=${character.split(' ').join('+')}`}>{character}</Link>
              </EpisodeBlock>
            ))}
          </Row>
        </Card>
      ) : <Skeleton style={{ width: 550, margin: "0 auto" }} />}
    </Wrapper>
  );
};

export default SingleEpisode;