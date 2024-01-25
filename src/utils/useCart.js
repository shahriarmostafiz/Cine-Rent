import { useContext } from "react";
import { CartContext } from "../context";

export default function useCart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  return { cartItems, setCartItems };
}
