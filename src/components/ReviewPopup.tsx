import { useState } from "react";

interface ReviewPopupProps {
  onClose: () => void;
  onSubmit: (review: string) => void;
}

const ReviewPopup = ({ onClose, onSubmit }: ReviewPopupProps) => {
  const [review, setReview] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
        <h3 className="text-xl font-bold mb-4">Add Your Review</h3>
        <textarea
          className="w-full border rounded p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          rows={4}
          placeholder="Share your experience or special instructions..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSubmit(review);
              onClose();
            }}
            className="px-4 py-2 bg-[#0c831f] text-white rounded hover:bg-green-700"
            disabled={!review.trim()}
          >
            Submit & Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPopup;
