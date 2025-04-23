import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FiChevronRight } from "react-icons/fi";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { hideCart } from "../../store/ui";
import { CartItem, ProductItem } from "../../utils/types";
import AddToCartButton from "../shared/AddToCartButton";
import Misc from "../../lib/data/layout.json";
import SuggestedItems from "./SuggestedItems";
import { shuffleItems } from "../../utils/helper";

const ReviewPopup = ({
  onClose,
  onSubmit,
  isSubmitting,
}: {
  onClose: () => void;
  onSubmit: (review: string) => Promise<void>;
  isSubmitting: boolean;
}) => {
  const [review, setReview] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
        <h3 className="text-xl font-bold mb-4">Almost there!</h3>
        <p className="text-sm text-gray-600 mb-4">
          Share your feedback or special instructions for this order
        </p>
        <textarea
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          rows={4}
          placeholder="E.g., Package carefully, leave at front door..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          disabled={isSubmitting}
        />
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={isSubmitting}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={() => onSubmit(review)}
            disabled={!review.trim() || isSubmitting}
            className={`px-4 py-2 rounded-lg transition-colors ${
              !review.trim() || isSubmitting
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#0c831f] text-white hover:bg-green-700"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Confirm Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

const CartPanelItem = (props: CartItem) => {
  const { image, title, subTitle, price, mrp } = props.product;
  return (
    <div className="flex p-4 gap-4 border-t border-gray-200">
      <div className="min-w-[72px]">
        <div className="h-[72px] w-[72px] border rounded-md overflow-hidden">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="text-gray-900 text-[15px] font-medium mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-1">{subTitle}</p>
        <div className="flex items-center justify-between mt-auto">
          <div>
            {mrp ? (
              <div className="flex items-center gap-2">
                <span className="text-gray-900 font-bold">₹{price}</span>
                <del className="text-gray-400 text-sm">₹{mrp}</del>
              </div>
            ) : (
              <span className="text-gray-900 font-medium">₹{price}</span>
            )}
          </div>
          <div className="w-[90px]">
            <AddToCartButton product={props.product} variant="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

const CartPanel = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { totalAmount, totalQuantity, cartItems, billAmount, discount } =
    useAppSelector((state) => state.cart);

  // Get suggested products
  const productItems = Misc.filter((item) => item.type === 77).map(
    (el) => el.objects
  );
  const allProducts: ProductItem[] = [];

  productItems.forEach((obj: any) => {
    const items = obj[0].data.products.map((product: any) => product[0]);
    allProducts.push(...items);
  });

  const addedProductIds = cartItems.map((item) => item.product.id);
  const otherProducts = allProducts.filter(
    (item) => !addedProductIds.includes(item.product_id.toString())
  );
  const suggestedProducts = shuffleItems(otherProducts).slice(0, 4);

  const handleProceedClick = () => {
    setShowReviewPopup(true);
  };

  const handleReviewSubmit = async (review: string) => {
    setIsSubmitting(true);
    try {
      // Save review to backend
      const response = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          review,
          orderDetails: {
            items: cartItems,
            total: billAmount,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save review");
      }

      // Close cart and redirect to home
      dispatch(hideCart());
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      // Optionally show error to user
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay - Clicking outside closes cart */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60"
        onClick={() => dispatch(hideCart())}
      />

      {/* Cart Panel */}
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between z-10">
          <h2 className="text-xl font-extrabold text-gray-900">
            My Cart ({totalQuantity})
          </h2>
          <button
            onClick={() => dispatch(hideCart())}
            className="text-gray-500 hover:text-gray-700"
            disabled={isSubmitting}
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Empty State */}
        {totalQuantity === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <img
              src="/empty-cart.webp"
              alt="Empty cart"
              className="h-40 w-40 mb-4"
            />
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Your cart is empty
            </h3>
            <p className="text-gray-500 mb-6">
              Looks like you haven't added anything to your cart yet
            </p>
            <button
              onClick={() => dispatch(hideCart())}
              className="bg-[#0c831f] text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto">
              <div className="space-y-4 p-4">
                {/* Delivery Info */}
                <div className="bg-white rounded-lg">
                  <div className="flex flex-col px-4 pt-3 pb-1">
                    <div className="flex justify-between text-gray-500 text-xs">
                      <span>Shipment 1 of 1</span>
                      <span>{totalQuantity} items</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900 mt-1">
                      Estimated delivery: 2-3 business days
                    </p>
                  </div>

                  {/* Cart Items List */}
                  <div className="divide-y divide-gray-100">
                    {cartItems.map((item) => (
                      <CartPanelItem key={item.product.id} {...item} />
                    ))}
                  </div>
                </div>

                {/* Suggested Items */}
                <div className="bg-white rounded-lg">
                  <h3 className="font-bold text-lg px-4 pt-4 pb-2">
                    Frequently bought together
                  </h3>
                  <div className="px-2 pb-4">
                    <SuggestedItems items={suggestedProducts} />
                  </div>
                </div>

                {/* Bill Summary */}
                <div className="bg-white rounded-lg">
                  <h3 className="font-bold text-lg px-4 pt-4 pb-2">
                    Order Summary
                  </h3>
                  <div className="px-4 py-2 space-y-3 text-sm">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span>₹{totalAmount}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Discount</span>
                      <span className="text-green-600">- ₹{discount}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <div>
                        <span>Delivery</span>
                        <p className="text-green-600 text-xs">
                          Free delivery on this order
                        </p>
                      </div>
                      <span>
                        <span className="text-gray-400 line-through mr-1">
                          ₹40
                        </span>
                        <span className="text-green-600">FREE</span>
                      </span>
                    </div>
                    <div className="flex justify-between font-bold text-gray-900 pt-2 border-t border-gray-200">
                      <span>Total</span>
                      <span>₹{billAmount}</span>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-xs text-gray-500 border-t border-gray-200">
                    Apply promo codes at checkout
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
              <button
                onClick={handleProceedClick}
                disabled={isSubmitting}
                className="w-full bg-[#0c831f] text-white py-3 rounded-lg font-bold flex items-center justify-center hover:bg-green-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>Proceed to Checkout</span>
                <FiChevronRight className="ml-1" size={18} />
              </button>
            </div>
          </>
        )}

        {/* Review Popup */}
        {showReviewPopup && (
          <ReviewPopup
            onClose={() => setShowReviewPopup(false)}
            onSubmit={handleReviewSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </aside>
    </div>
  );
};

export default CartPanel;
