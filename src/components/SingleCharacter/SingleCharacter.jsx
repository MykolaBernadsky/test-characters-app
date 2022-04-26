import React, {useEffect, useState} from 'react';
import {requestService} from "../../services";
import {useSearchParams} from "react-router-dom";
import {Card, Row, Skeleton} from "antd";
import {CharacterBlock, CharacterImg} from "./styles";

const SingleCharacter = () => {
  const [character, setCharacter] = useState(null);
  let [searchParams] = useSearchParams();

  const characterName = searchParams.get('name')

  useEffect(() => {
    requestService.characterDao.getCharacterByName(characterName).then(res => setCharacter(...res.data))
  }, [characterName]);

  return (
    <div>
      {character ? (
        <Card
          style={{ width: 550, margin: "0 auto" }}
          title={character.name}
          cover={<CharacterImg src={character.img} alt={'image'} />}
        >
          <div>Nickname: {character.nickname}</div>
          <div>Date of birth: {character.birthday}</div>

          Occupations:

          <Row gutter={[16,16]}>
            {character.occupation.map((item, index) => (
              <CharacterBlock key={item+index}>
                {item}
              </CharacterBlock>
            ))}
          </Row>
        </Card>
      ) : <Skeleton />}
    </div>
  );
};

export default SingleCharacter;