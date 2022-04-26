import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex; 
  align-items: center; 
  height: 100vh
`;

const EpisodeBlock = styled.div`
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

export { Wrapper, EpisodeBlock }