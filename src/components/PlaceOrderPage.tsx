import { useLocation } from "react-router-dom";

interface LocationState {
  review?: string;
  orderDetails?: {
    items: any[]; // Replace 'any' with your actual cart item type if available
    total: number;
    date: string;
  };
}

const PlaceOrderPage = () => {
  const { state } = useLocation() as { state: LocationState };
  const review = state?.review || "No review provided";

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Order Confirmed! 🎉</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <p className="mb-4">Thank you for your purchase!</p>
        {review && (
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <h3 className="font-semibold mb-2">Your Review:</h3>
            <p className="italic">"{review}"</p>
          </div>
        )}
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 px-4 py-2 bg-[#0c831f] text-white rounded hover:bg-green-700"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default PlaceOrderPage;
