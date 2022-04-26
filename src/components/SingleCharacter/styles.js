import styled from 'styled-components';

const CharacterBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #fff;
  width: 150px;
  margin: 0 5px;
  padding: 10px;
  background: #2832c2;
  border-radius: 50px
`;

const CharacterImg = styled.img`
  width: 250px;
`

export { CharacterBlock, CharacterImg }