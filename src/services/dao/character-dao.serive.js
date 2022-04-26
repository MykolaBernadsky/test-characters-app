import $api from "../../helpers/request";

const characterDao = {
  getCharacterByName: name => {
    const queryName = name.split(' ').join('+');

    return $api.get(`characters?name=${queryName}`)
  }
}

export default characterDao