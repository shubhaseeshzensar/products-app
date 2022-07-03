import "./Products.css";

const Products = (props) => {
  return (
    <div>
      <table className="table table-horizontal">
        <thead>
          <tr>
            <td>S/N</td>
            <td>Name</td>
            <td>Product Description</td>
            <td>Price</td>
          </tr>
        </thead>
          {props.products.length === 0 ? (<p>Products Not Available !</p>) : (
          <tbody>
            {props.products.map((e,i) => {
            return (
              <tr key={e.id}>
                <td>{i+1}</td>
                <td>{e.name}</td>
                <td>{e.description}</td>
                <td>{e.price}</td>
              </tr>
            );
          })}
          </tbody>)}
      </table>
    </div>
  );
};

export default Products;
