import logo from "../../assets/logo.svg"
import ring from "../../assets/ring.svg"
import moon from "../../assets/icons/moon.svg"
import sun from "../../assets/icons/sun.svg"
import Cart from "../../assets/shopping-cart.svg"
import { useContext, useState } from "react";
import CartDetails from "../../utils/CartDetails";
import useCart from "../../utils/useCart";
import { ThemeContext } from "../../context"
const Header = () => {
    const [showCart, setShowCart] = useState(false)
    const { cartItems } = useCart()
    const { darkMode, setDarkMode } = useContext(ThemeContext)
    function handleShowCart() {
        setShowCart(true)
    }
    console.log(cartItems);
    return (
        <header>
            {showCart && <CartDetails onClose={() => setShowCart(false)} />}
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src={logo} width="139" height="26" alt="" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={ring} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#"
                            onClick={() => setDarkMode(prev => !prev)}
                        >
                            <img src={darkMode ? sun : moon} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#" onClick={handleShowCart}>
                            <img src={Cart} width="24" height="24" alt="" />
                            {
                                cartItems.length > 0 && <span className="absolute top-[-12px] right-[-12px] bg-green-300 text-white text-center p-0.5 w-7 h-7 rounded-full ">
                                    {cartItems.length}
                                </span>
                            }
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;