import { useDispatch } from "react-redux";

import Button from "../../ui/Button";

import { deleteItem } from "./cartSlice";

function DeleteItem({ oizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteItem(pizzaId) {
    dispatch(deleteItem);
  }

  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}
export default DeleteItem;
