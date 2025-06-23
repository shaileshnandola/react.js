import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {GET_POST} from './redux/action/postaction';

function App() {
  const dispatch = useDispatch();

  const {posts} = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(GET_POST());
  }, []);

  return (
    <div align="center">
      <h1>Post Data</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map((post, index) =>
            {
              return (
                <tr key={index}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
