
import { useState } from "react";
import {
  FiSearch,
  FiPlus,
  FiPackage,
  FiX,
  FiTrash2,
} from "react-icons/fi";

const initialProducts = [
  {
    id: 1,
    name: "Digital Thermometer",
    category: "Health Devices",
    price: 250,
    stock: 35,
  },
  {
    id: 2,
    name: "Pulse Oximeter",
    category: "Health Devices",
    price: 850,
    stock: 18,
  },
  {
    id: 3,
    name: "Blood Pressure Monitor",
    category: "Health Devices",
    price: 1200,
    stock: 0,
  },
  {
    id: 4,
    name: "Surgical Face Mask",
    category: "Safety Products",
    price: 100,
    stock: 50,
  },
  {
    id: 5,
    name: "Hand Sanitizer",
    category: "Personal Care",
    price: 150,
    stock: 12,
  },
];

function AdminProducts() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Health Devices",
    price: "",
    stock: "",
  });

  const categories = [
    "Health Devices",
    "Safety Products",
    "Personal Care",
    "Medical Equipment",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const handleAddProduct = (e) => {
    e.preventDefault();

    const product = {
      id: Date.now(),
      name: newProduct.name.trim(),
      category: newProduct.category,
      price: Number(newProduct.price),
      stock: Number(newProduct.stock),
    };

    setProducts((prev) => [...prev, product]);

    setNewProduct({
      name: "",
      category: "Health Devices",
      price: "",
      stock: "",
    });

    setShowModal(false);
  };

  const handleDeleteProduct = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      setProducts((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Products
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage CareBridge medical store products.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          <FiPlus size={18} />
          Add Product
        </button>
      </div>

      {/* Statistics */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Products</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-800">
            {products.length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Available Stock</p>
          <h2 className="mt-2 text-2xl font-bold text-green-600">
            {products.filter((item) => item.stock > 0).length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Out of Stock</p>
          <h2 className="mt-2 text-2xl font-bold text-red-600">
            {products.filter((item) => item.stock === 0).length}
          </h2>
        </div>
      </div>

      {/* Search and Category Filter */}
      <div className="mb-5 flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm sm:flex-row sm:items-center">
        <div className="relative w-full sm:max-w-sm">
          <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-600 outline-none focus:border-blue-500"
        >
          <option value="All">All Categories</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Products Table */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead className="bg-gray-100 text-sm text-gray-600">
              <tr>
                <th className="px-5 py-4">Product</th>
                <th className="px-5 py-4">Category</th>
                <th className="px-5 py-4">Price</th>
                <th className="px-5 py-4">Stock</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                          <FiPackage size={20} />
                        </div>
                        <span className="font-semibold text-gray-800">
                          {product.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {product.category}
                    </td>

                    <td className="px-5 py-4 text-sm font-medium text-gray-800">
                      ₹{product.price}
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-700">
                      {product.stock}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          product.stock > 0
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.stock > 0 ? "Available" : "Out of Stock"}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        title="Delete product"
                        className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100"
                      >
                        <FiTrash2 size={17} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-5 py-10 text-center text-gray-500"
                  >
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-800">
                Add New Product
              </h2>

              <button
                onClick={() => setShowModal(false)}
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
              >
                <FiX size={20} />
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Product Name
                </label>
                <input
                  type="text"
                  required
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      name: e.target.value,
                    })
                  }
                  placeholder="Enter product name"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  value={newProduct.category}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      category: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Price (₹)
                </label>
                <input
                  type="number"
                  min="1"
                  required
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      price: e.target.value,
                    })
                  }
                  placeholder="Enter price"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  min="0"
                  required
                  value={newProduct.stock}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      stock: e.target.value,
                    })
                  }
                  placeholder="Enter stock quantity"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Save Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminProducts;
