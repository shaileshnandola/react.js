import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const getproducts = () => {
    fetch(`https://dummyjson.com/products`)
      .then(response => response.json())
      .then((data) => {
        setProducts(data.products);
        console.log(data.products);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <div align="center">
      <h1>Products</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Images</th>
            <th>Reviews</th>
            <th>Rating Sum</th>
            <th>Rating Average</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, id) => {
            const ratingSum = p.reviews ? p.reviews.reduce((sum, r) => sum + r.rating, 0) : 0;

            const ratingAverage = p.reviews && p.reviews.length > 0
              ? (ratingSum / p.reviews.length).toFixed(2)
              : 0;

            return (
              <tr key={id}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.description.slice(0, 40)}</td>
                <td>{p.price}</td>
                <td>
                  {p.images.map((img, i) => (
                    <img src={img} alt={`Product ${p.id} image ${i}`} width={100} key={i} />
                  ))}
                </td>
                <td>
                  <table border={1}>
                    <thead>
                      <tr>
                        <th>Rating</th>
                        <th>Reviewer Name</th>
                        <th>Comment</th>
                        <th>Date</th>
                        <th>Reviewer Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        p.reviews.map((r, i) => (
                          <tr key={i}>
                            <td>{r.rating}</td>
                            <td>{r.reviewerName}</td>
                            <td>{r.comment.slice(0, 40)}</td>
                            <td>{r.date}</td>
                            <td>{r.reviewerEmail}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </td>
                <td>{ratingSum}</td>
                <td>{ratingAverage}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
