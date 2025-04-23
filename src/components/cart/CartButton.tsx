import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { showCart } from "../../store/ui";

const CartButton = () => {
  const { billAmount, totalQuantity } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  // Format currency for better readability
  const formattedAmount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(billAmount);

  return (
    <button
      aria-label="Cart"
      className={`
        flex items-center rounded-[6px] min-w-[112px] h-[50px] py-2 px-3 gap-2 
        font-bold text-sm bg-[#0c831f] hover:bg-green-700 transition-colors
        text-white focus:outline-none focus:ring-2 focus:ring-green-500
        focus:ring-offset-2
      `}
      onClick={() => dispatch(showCart())}
    >
      <div className="relative">
        <FaShoppingCart size={20} className="_wiggle" />
        {totalQuantity > 0 && (
          <span
            className="
            absolute -top-2 -right-2 bg-white text-green-700 text-xs 
            font-bold rounded-full w-5 h-5 flex items-center justify-center
          "
          >
            {totalQuantity}
          </span>
        )}
      </div>

      <div className="flex flex-col font-bold text-[14px] leading-none">
        {totalQuantity === 0 ? (
          <span>My Cart</span>
        ) : (
          <>
            <span className="tracking-tight">
              {totalQuantity} {totalQuantity === 1 ? "item" : "items"}
            </span>
            <span className="tracking-tight mt-0.5">{formattedAmount}</span>
          </>
        )}
      </div>
    </button>
  );
};

export default CartButton;
