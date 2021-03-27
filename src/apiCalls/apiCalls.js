import axios from 'axios';

const postElement = async (element, type, url, dispatch) => {
  try {
    const response = await axios.post(
      url,
      element,
      { withCredentials: true },
    );
    dispatch({
      type,
      payload: [response.data],
    });
  } catch (err) {
    console.error(err);
  }
};

export { postElement }