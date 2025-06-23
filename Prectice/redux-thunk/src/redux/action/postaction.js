 const GET_POST = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      dispatch({
        type: 'get',
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export{GET_POST}