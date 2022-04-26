import $api from "../../helpers/request";

const episodeDao = {
  getAllEpisodes: () => {
    return $api.get('episodes');
  },
  getEpisodeById: id => {
    return $api.get(`episodes/${id}`)
  }
};

export default episodeDao;