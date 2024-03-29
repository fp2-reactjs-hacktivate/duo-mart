import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  addCart,
  addCheckout,
  removeCartItem,
} from "../../redux/ProductsSlice";
import Swal from "sweetalert2";
import Table from "react-bootstrap/Table";

const CartTable = ({ headers }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cart = useSelector((state) => state.products.cart);

  let isOverStockFound = false;
  let totalPrice = 0;

  const handleChange = (data, value) => {
    dispatch(
      addCart({
        cartData: data,
        qty: value,
        isCart: true,
      })
    );
  };

  const handleCheckout = () => {
    Swal.fire({
      title: "Are you sure want to checkout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Checkout!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (isOverStockFound) {
          Swal.fire({
            title: "Not enough stock!",
            icon: "error",
          });
        } else {
          dispatch(addCheckout());
          navigate("/");
          Swal.fire({
            title: "Checkout success!",
            icon: "success",
          });
        }
      }
    });
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeCartItem(itemId));
  };

  if (cart.length >= 1) {
    return (
      <Table className="m-4" style={{ width: "95%" }}>
        <thead className="table-dark">
          <tr>
            {headers.map((header, headerIdx) => {
              return (
                <th key={headerIdx} className="text-center">
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {cart?.map((data) => {
            totalPrice += data.cartQuantity * data.price;
            isOverStockFound = data.isOverStock || isOverStockFound;
            return (
              <tr key={data.id}>
                <td>
                  <img
                    src={data.image}
                    alt={data.image}
                    style={{ width: "75px", height: "auto" }}
                  />
                </td>
                <td>
                  <h5>{data.title}</h5>
                  <small>{data.category}</small>
                </td>
                <td>${data.price.toFixed(2)}</td>
                <td>
                  <Form.Control
                    type="number"
                    value={data.cartQuantity}
                    min={1}
                    onChange={(e) => handleChange(data, e.target.value)}
                  />
                  {data.isOverStock && <p>Not enough stock!</p>}
                </td>
                <td className="text-end">
                  ${(data.cartQuantity * data.price).toFixed(2)}
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveItem(data.id)}
                  >
                    Hapus
                  </Button>
                </td>
              </tr>
            );
          })}

          <tr className="table-light">
            <td colSpan={5} className="text-center">
              <strong>TOTAL</strong>
            </td>
            <td className="text-end">
              <strong>${totalPrice.toFixed(2)}</strong>
            </td>
          </tr>
          <tr>
            <td style={{ border: "none" }} colSpan={6} className="text-end">
              <Button variant="primary" onClick={handleCheckout}>
                Checkout
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  } else {
    return <h3>Anda belum memilih item!</h3>;
  }
};

export default CartTable;
