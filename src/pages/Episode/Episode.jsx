import React from 'react';
import SingleEpisode from "../../components/SingleEpisode";
import LayoutInner from "../../components/LayoutInner";

const Episode = () => {
  return (
    <LayoutInner goHomeLink={true}>
      <SingleEpisode />
    </LayoutInner>
  );
};

export default Episode;