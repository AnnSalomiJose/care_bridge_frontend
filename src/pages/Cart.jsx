
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiShoppingBag,
  FiPlus,
  FiMinus,
  FiTrash2,
  FiArrowLeft,
  FiTruck,
  FiShield,
} from "react-icons/fi";

const initialItems = [
  {
    id: 1,
    name: "Digital BP Monitor",
    category: "Health Monitoring",
    price: 1499,
    quantity: 1,
    image: "🩺",
  },
  {
    id: 2,
    name: "Digital Thermometer",
    category: "Healthcare",
    price: 299,
    quantity: 2,
    image: "🌡️",
  },
];

function Cart() {
  const [items, setItems] = useState(initialItems);
  const [payment, setPayment] = useState("upi");
  const [orderPreview, setOrderPreview] = useState(false);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryCharge =
    subtotal === 0 || subtotal >= 1000 ? 0 : 50;

  const total = subtotal + deliveryCharge;

  const updateQuantity = (id, amount) => {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

    setOrderPreview(false);
  };

  const removeItem = (id) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );

    setOrderPreview(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPreview(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Back to Shopping */}
        <Link
          to="/shop"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900"
        >
          <FiArrowLeft />
          Continue Shopping
        </Link>

        {/* Page Heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            CareBridge Medical Store
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Shopping Cart
          </h1>

          <p className="mt-2 text-slate-500">
            Review your products and enter your delivery details.
          </p>
        </div>

        {items.length === 0 ? (
          /* Empty Cart */
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <FiShoppingBag className="mx-auto text-5xl text-slate-300" />

            <h2 className="mt-5 text-xl font-bold text-slate-800">
              Your cart is empty
            </h2>

            <p className="mt-2 text-slate-500">
              Explore our medical products and add items to your cart.
            </p>

            <Link
              to="/shop"
              className="mt-6 inline-flex rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">

            {/* Cart Items and Checkout Form */}
            <div className="space-y-5 lg:col-span-2">

              {/* Cart Items */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-800">
                    Cart Items
                  </h2>

                  <span className="rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700">
                    {items.length} products
                  </span>
                </div>

                <div className="space-y-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col gap-4 border-b border-slate-100 pb-6 last:border-0 last:pb-0 sm:flex-row sm:items-center"
                    >
                      {/* Product Image */}
                      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-4xl">
                        {item.image}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <p className="text-xs font-medium text-teal-600">
                          {item.category}
                        </p>

                        <h3 className="mt-1 font-bold text-slate-800">
                          {item.name}
                        </h3>

                        <p className="mt-2 font-semibold text-slate-700">
                          ₹{item.price.toLocaleString("en-IN")}
                        </p>
                      </div>

                      {/* Quantity and Remove */}
                      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                        <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="rounded-md p-2 text-slate-600 hover:bg-slate-100"
                            aria-label="Decrease quantity"
                          >
                            <FiMinus />
                          </button>

                          <span className="min-w-5 text-center font-semibold">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="rounded-md p-2 text-slate-600 hover:bg-slate-100"
                            aria-label="Increase quantity"
                          >
                            <FiPlus />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-1 text-sm font-medium text-red-500 hover:text-red-700"
                        >
                          <FiTrash2 />
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Details and Payment */}
              <form
                id="checkout-form"
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
              >
                <h2 className="mb-6 text-xl font-bold text-slate-800">
                  Delivery Details
                </h2>

                <div className="grid gap-5 sm:grid-cols-2">

                  {/* Full Name */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    />
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    />
                  </div>

                  {/* Address */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Delivery Address
                    </label>

                    <textarea
                      required
                      rows="3"
                      placeholder="House name, street, city, district and PIN code"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <h3 className="mb-4 mt-8 font-bold text-slate-800">
                  Payment Method
                </h3>

                <div className="space-y-3">

                  {/* UPI Payment */}
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-teal-500">
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={payment === "upi"}
                      onChange={(e) => {
                        setPayment(e.target.value);
                        setOrderPreview(false);
                      }}
                      className="mt-1 accent-teal-600"
                    />

                    <div className="flex-1">
                      <p className="font-semibold text-slate-800">
                        UPI Payment
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Google Pay, PhonePe, Paytm, BHIM UPI
                      </p>

                      <p className="mt-2 text-xs font-medium text-teal-700">
                        Pay using UPI through a payment gateway.
                      </p>
                    </div>
                  </label>

                  {/* Cash on Delivery */}
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-teal-500">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={payment === "cod"}
                      onChange={(e) => {
                        setPayment(e.target.value);
                        setOrderPreview(false);
                      }}
                      className="mt-1 accent-teal-600"
                    />

                    <div>
                      <p className="font-semibold text-slate-800">
                        Cash on Delivery
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Pay when your order is delivered.
                      </p>
                    </div>
                  </label>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-800">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4 text-sm">

                {/* Subtotal */}
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>

                  <span>
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Delivery Charge */}
                <div className="flex justify-between text-slate-600">
                  <span>Delivery Charge</span>

                  <span>
                    {deliveryCharge === 0
                      ? "Free"
                      : `₹${deliveryCharge}`}
                  </span>
                </div>

                {/* Total */}
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex justify-between text-base font-bold text-slate-900">
                    <span>Total</span>

                    <span>
                      ₹{total.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Place Order */}
              <button
                type="submit"
                form="checkout-form"
                className="mt-7 w-full rounded-xl bg-teal-600 px-5 py-3.5 font-semibold text-white transition hover:bg-teal-700"
              >
                {payment === "upi"
                  ? "Continue to UPI Payment"
                  : "Place Order"}
              </button>

              {/* Payment Preview Message */}
              {orderPreview && (
                <div className="mt-4 rounded-xl bg-amber-50 p-4 text-sm text-amber-800">
                  {payment === "upi"
                    ? "UPI payment selected. Payment gateway integration is pending. No payment has been charged."
                    : "Cash on Delivery selected. This is only a frontend preview. No real order has been placed."}
                </div>
              )}

              {/* Information */}
              <div className="mt-6 space-y-4 border-t border-slate-100 pt-5">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <FiTruck className="text-xl text-teal-600" />
                  Delivery details
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <FiShield className="text-xl text-teal-600" />
                  Payment gateway integration planned
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
