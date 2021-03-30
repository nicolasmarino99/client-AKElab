import axios from 'axios';

const postElement = async (element, type, url, dispatch, setLoading) => {
  try {
    setLoading(true);
    const response = await axios.post(
      url,
      element,
    );
    await dispatch({
      type,
      payload: [response.data],
    });
    setLoading(false);
  } catch (err) {
    console.error(err);
  }
};

export { postElement }