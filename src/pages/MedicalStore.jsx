import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiSearch,
  FiShoppingBag,
  FiShoppingCart,
  FiPackage,
  FiHeart,
  FiArrowRight,
  FiX,
  FiShield,
  FiTruck,
  FiInfo,
  FiActivity,
  FiFilter,
} from 'react-icons/fi';

const products = [
  {
  id: 1,
  name: 'Digital Blood Pressure Monitor',
  category: 'Monitoring Devices',
  price: 1499,
  image: 'https://images.openai.com/static-rsc-4/-9u_hc5AiTPnwo7kmi4ly1Uo5pazfSsZ8y59qvMqfA2ApZwmwM1PsrrV1Qb1ZDHwqdoBzMmvoOsu2b9Rvn96aAOs5xL3wQy-2NGfmOxcEk0H0sLmeQduOdcripezOse_CCB027qQpA1bHDIpbpxVt9vUzFqWWwy54x3X1XgoShtBjdxCdNt-arL2WS-sC4aW?purpose=fullsize',
  description: 'Digital blood pressure monitoring device.',
  badge: 'Popular',
},
  {
    id: 2,
    name: 'Digital Thermometer',
    category: 'Monitoring Devices',
    price: 299,
    image:'https://images.openai.com/static-rsc-4/fHywXrs6qSVibU2zA52vDnba8UapEJU2yQuU_227gsMWcATp3-AXs7Z-Bxcn64m2WHcYGR_gyqneZzR6CiEiPCPPeAAd8GFeSI4zrVIY5l67UHKT_UYpbgTorIuZV5cr_cqP9RP1izl4TPcGjwNSEy2hUPMfRTzGgC3mFacQOK644vfAlCcXnybstPOX-GoR?purpose=fullsize',
    description:
      'A digital thermometer for measuring body temperature.',
    badge: 'Essential',
  },
  {
    id: 3,
    name: 'Pulse Oximeter',
    category: 'Monitoring Devices',
    price: 899,
    image:'https://images.openai.com/static-rsc-4/smdasUZR_RGp8WZ5PPFDTIpSTeQyEfOTPwpHddXCw-q2JtFIe14mqrtxhZUuOMv7XsC6eGlHV5ukeRagbhCwOuELAWvCdZQxXcUhAk0LzdAA3rBvHpFiLbWcMyjIyCBkXN5Pgz3b7Yp0GqYMEWheZjcAFC0YRDui0MwJdiCpNjducUWIYOOcgRdlKSz_Ge7R?purpose=fullsize',
    description:
      'A fingertip device that displays estimated blood oxygen saturation and pulse rate.',
  
    badge: 'Popular',
  },
  {
    id: 4,
    name: 'First Aid Kit',
    category: 'First Aid',
    price: 599,
    image:'https://images.openai.com/static-rsc-4/CmoeBEXKRVw5t1CK457AsH8iVeRP8LqTWXbcBZ0-hS0u8jvyc8pgjRY5vdRkGOTjWM-SLXXiYSmASXjNatDiZFsxHIyxRf1weC3R5nGWtW0ZTQqEmdYumr8NOoI_KEqSPx1tutAZLxaf1EfXS0WhUTMp1mxj134h--iF2M2GFpNvHk3CbzaDzeFvq1pYVdSv?purpose=fullsize',
    description:
      'A compact first aid kit for keeping basic first aid supplies organized.',
  
    badge: 'Useful',
  },
  {
    id: 5,
    name: 'Digital Weighing Scale',
    category: 'Monitoring Devices',
    price: 999,
    image:'https://images.openai.com/static-rsc-4/9kJYDC0TR7kGmvSUJJEImnJEs7NMLhnaYfavZjEUTEBJdGs1UHjYTLLEQ6P7XBzTSIANjZ3itQPd2YfptPD8XYoY2FeTQJEv2moVmBVtBYQyVQJVv0aFm-tXmdQEPmKTvWhuXIQZHBqWqepK6RWMlO78uQc9x3NML15IrKXLmf6g0Q6tEL1btWWvFUsJ4OuX?purpose=fullsize',
    description:
      'A digital weighing scale for tracking body weight at home.',
    
    badge: 'New',
  },
  {
    id: 6,
    name: 'Hot Water Bag',
    category: 'Daily Care',
    price: 349,
    image:'https://images.openai.com/static-rsc-4/qLJ2GAQ3Jd-turD3aAXvTcLIqjPLDRqOoHAi-VjDMWqmIG6WOEwx1UYwHtBdWv5Dy7CVOXxAb6WXbLXNvXWs0cC6ExR2TpqAMWWt3Ha3qC2jOZ8uWYlgtbhv-_SLUffjjGwg2d7pD9uJwbERgw9k_5vUYzMNU60tQDrx3DR1FMJ1uMgwDhKoLg8VMih1u57W?purpose=fullsize',
    description:
      'A reusable hot water bag intended for external warmth and comfort.',
   
    badge: 'Useful',
  },
  {
    id: 7,
    name: 'Knee Support',
    category: 'Daily Care',
    price: 499,
    image:'https://images.openai.com/static-rsc-4/YdMqL73MSRjwTU4NqQ9wk9WJdGyzavDst8N5-rCxTbqkyMX1975arI-UDlQTHLgUvHs8Qdh5094BjPbYwcK1vOwioqsn7OHamrTkqbxqku3yrXYgF7okQ-7fI2_jS40ClykfxUQixlaxa4Z6HlRNs_-pZxz27J8DiNN4mBRyNn-HihjA4SIe_VIm9SniQYkt?purpose=fullsize',
    description:
      'A supportive knee sleeve designed for everyday movement and comfort.',
   
    badge: 'New',
  },
  {
    id: 8,
    name: 'Walking Stick',
    category: 'Mobility Aids',
    price: 699,
    image:'https://images.openai.com/static-rsc-4/ybr-GDiRv6CPTnq3u7KYNxwkHjAEYq9vWqNtssYmej1BwDRgMa869SLoccds-on9oT_kD0d5liBifVLf2ZBuqFcriEkEgBMrjt3m2cKQKLkcJkFXki0qGsJDRQFTpqWAf2DDsjoPl56t3EHAcuJl3Mw7wCCcM47poKWZeaDY6FZZ0YGqMzmONZxhlrPJNPJZ?purpose=fullsize',
    description:
      'A walking aid designed to provide additional support while moving.',
    badge: 'Useful',
  },
];

const categories = [
  'All Products',
  'Monitoring Devices',
  'First Aid',
  'Daily Care',
  'Mobility Aids',
];

function ProductIllustration({ product }) {
  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden bg-white p-4">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="h-full w-full object-contain transition duration-300 hover:scale-105"
      />

      <span className="absolute top-3 left-3 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
        {product.badge}
      </span>
    </div>
  );
}

function MedicalStore() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Products');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === 'All Products' || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-600 px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <FiShoppingBag size={30} />
          </div>

          <p className="mt-5 text-sm font-bold tracking-widest text-teal-200 uppercase">
            CareBridge Medical Store
          </p>

          <h1 className="mt-3 max-w-2xl text-3xl leading-tight font-bold sm:text-5xl">
            Healthcare Essentials, All in One Place
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-teal-50 sm:text-base">
            Explore medical equipment, monitoring devices and everyday
            healthcare essentials through the CareBridge store.
          </p>
        </div>
      </section>

      {/* Store content */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">

        {/* Heading */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold tracking-widest text-teal-700 uppercase">
              Shop by Category
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Medical Equipment & Products
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Browse products before signing in to purchase.
            </p>
          </div>

          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-xl border border-teal-200 bg-white px-4 py-3 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
          >
            <FiShoppingCart />
            My Cart
          </Link>
        </div>

        {/* Search and filters */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <label
            htmlFor="product-search"
            className="mb-3 block text-sm font-semibold text-slate-700"
          >
            Search Products
          </label>

          <div className="relative">
            <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />

            <input
              id="product-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search medical equipment..."
              className="w-full rounded-xl border border-slate-200 py-3.5 pr-4 pl-11 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div className="mt-5">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <FiFilter />
              Categories
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                    category === item
                      ? 'bg-teal-600 text-white'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-teal-400 hover:text-teal-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product count */}
        <div className="mb-6 mt-9 flex items-center justify-between">
          <h3 className="font-bold text-slate-900">
            Available Products
          </h3>

          <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700">
            {filteredProducts.length} Products Found
          </span>
        </div>

        {/* Product grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <ProductIllustration product={product} />

                <div className="p-5">
                  <span className="text-xs font-semibold text-teal-700">
                    {product.category}
                  </span>

                  <h3 className="mt-2 min-h-12 font-bold leading-6 text-slate-900">
                    {product.name}
                  </h3>

                  <p className="mt-2 min-h-12 text-xs leading-5 text-slate-500">
                    {product.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div>
                      <p className="text-xs text-slate-500">Price</p>
                      <p className="mt-1 text-xl font-bold text-slate-900">
                        ₹{product.price.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className="rounded-lg border border-teal-600 px-3 py-2 text-xs font-semibold text-teal-700 transition hover:bg-teal-50"
                    >
                      Details
                    </button>
                  </div>

                  <Link
                    to="/login"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
                  >
                    <FiShoppingCart />
                    Add to Cart
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <FiPackage className="mx-auto text-slate-400" size={38} />

            <h3 className="mt-4 font-bold text-slate-800">
              No products found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another product name or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch('');
                setCategory('All Products');
              }}
              className="mt-5 font-semibold text-teal-700 hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Store information */}
      <section className="px-5 pb-16">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <FiTruck className="text-teal-700" size={26} />
            <h3 className="mt-4 font-bold text-slate-900">
              Order Tracking
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Order status and delivery tracking will be available after
              purchase.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <FiShield className="text-teal-700" size={26} />
            <h3 className="mt-4 font-bold text-slate-900">
              Secure Checkout
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Secure payment options will be integrated during the backend
              development stage.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <FiHeart className="text-teal-700" size={26} />
            <h3 className="mt-4 font-bold text-slate-900">
              Healthcare Essentials
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Browse general medical equipment and everyday healthcare
              products.
            </p>
          </div>
        </div>
      </section>

      {/* Product details modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-5"
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            className="my-auto w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <ProductIllustration product={selectedProduct} />

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-teal-700 uppercase">
                    {selectedProduct.category}
                  </p>

                  <h2
                    id="product-modal-title"
                    className="mt-2 text-2xl font-bold text-slate-900"
                  >
                    {selectedProduct.name}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                  aria-label="Close product details"
                >
                  <FiX size={22} />
                </button>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {selectedProduct.description}
              </p>

              <p className="mt-5 text-2xl font-bold text-slate-900">
                ₹{selectedProduct.price.toLocaleString('en-IN')}
              </p>

              <div className="mt-5 flex items-start gap-2 rounded-xl bg-blue-50 p-4 text-xs leading-6 text-blue-800">
                <FiInfo className="mt-1 shrink-0" />
                <p>
                  This is sample product information for the frontend
                  demonstration. Actual product specifications and prices
                  will be managed by the admin.
                </p>
              </div>

              <Link
                to="/login"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3.5 font-semibold text-white transition hover:bg-teal-700"
              >
                <FiShoppingCart />
                Login to Add to Cart
              </Link>

              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="mt-3 w-full rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-5 py-7 text-center text-xs leading-6 text-slate-500">
        © {new Date().getFullYear()} CareBridge Medical Store.
        <p className="mt-1">
          Product information shown here is demonstration content.
        </p>
      </footer>
    </main>
  );
}

export default MedicalStore;