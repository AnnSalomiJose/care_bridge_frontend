
import { useState } from "react";
import {
  FiSearch,
  FiPlus,
  FiBookOpen,
  FiEdit2,
  FiTrash2,
  FiX,
  FiExternalLink,
} from "react-icons/fi";

const initialResources = [
  {
    id: 1,
    title: "The Anxiety and Phobia Workbook",
    author: "Edmund J. Bourne",
    type: "Book",
    category: "Mental Health",
    description: "A self-help resource for understanding and managing anxiety.",
    resourceUrl: "",
    status: "Active",
  },
  {
    id: 2,
    title: "Managing Everyday Stress",
    author: "CareBridge Team",
    type: "Guide",
    category: "Stress Management",
    description: "Simple techniques to manage everyday stress.",
    resourceUrl: "",
    status: "Active",
  },
  {
    id: 3,
    title: "A Guide to Better Sleep",
    author: "CareBridge Team",
    type: "Article",
    category: "Self Care",
    description: "Helpful information about healthy sleeping habits.",
    resourceUrl: "",
    status: "Active",
  },
  {
    id: 4,
    title: "Understanding Mental Wellness",
    author: "CareBridge Team",
    type: "Guide",
    category: "Mental Health",
    description: "Basic information about mental wellbeing.",
    resourceUrl: "",
    status: "Inactive",
  },
];

const emptyResource = {
  title: "",
  author: "",
  type: "Book",
  category: "Mental Health",
  description: "",
  resourceUrl: "",
  status: "Active",
};

function AdminBooksResources() {
  const [resources, setResources] = useState(initialResources);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [resourceForm, setResourceForm] = useState(emptyResource);

  const categories = [
    "Mental Health",
    "Stress Management",
    "Self Care",
    "General Health",
    "Healthy Lifestyle",
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(search.toLowerCase()) ||
      resource.author.toLowerCase().includes(search.toLowerCase()) ||
      resource.category.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      resource.type === filter ||
      resource.status === filter;

    return matchesSearch && matchesFilter;
  });

  const openAddModal = () => {
    setEditingId(null);
    setResourceForm(emptyResource);
    setShowModal(true);
  };

  const openEditModal = (resource) => {
    setEditingId(resource.id);
    setResourceForm({
      title: resource.title,
      author: resource.author,
      type: resource.type,
      category: resource.category,
      description: resource.description,
      resourceUrl: resource.resourceUrl,
      status: resource.status,
    });
    setShowModal(true);
  };

  const handleSaveResource = (e) => {
    e.preventDefault();

    const resourceData = {
      ...resourceForm,
      title: resourceForm.title.trim(),
      author: resourceForm.author.trim(),
      description: resourceForm.description.trim(),
      resourceUrl: resourceForm.resourceUrl.trim(),
    };

    if (editingId) {
      setResources((prev) =>
        prev.map((resource) =>
          resource.id === editingId
            ? { ...resource, ...resourceData }
            : resource
        )
      );
    } else {
      setResources((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...resourceData,
        },
      ]);
    }

    setShowModal(false);
    setEditingId(null);
    setResourceForm(emptyResource);
  };

  const handleDeleteResource = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resource?"
    );

    if (confirmDelete) {
      setResources((prev) =>
        prev.filter((resource) => resource.id !== id)
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Books & Resources
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage health books, articles and self-care resources.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          <FiPlus size={18} />
          Add Resource
        </button>
      </div>

      {/* Statistics */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Resources</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-800">
            {resources.length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Books</p>
          <h2 className="mt-2 text-2xl font-bold text-blue-600">
            {resources.filter((item) => item.type === "Book").length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Active Resources</p>
          <h2 className="mt-2 text-2xl font-bold text-green-600">
            {resources.filter((item) => item.status === "Active").length}
          </h2>
        </div>

      </div>

      {/* Search and Filter */}
      <div className="mb-5 flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">

        <div className="relative w-full sm:max-w-sm">
          <FiSearch className="absolute left-3 top-3.5 text-gray-400" />

          <input
            type="text"
            placeholder="Search title, author or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {["All", "Book", "Article", "Guide", "Active", "Inactive"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  filter === item
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>

      {/* Resources Table */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">

            <thead className="bg-gray-100 text-sm text-gray-600">
              <tr>
                <th className="px-5 py-4">Resource</th>
                <th className="px-5 py-4">Author</th>
                <th className="px-5 py-4">Type</th>
                <th className="px-5 py-4">Category</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredResources.length > 0 ? (
                filteredResources.map((resource) => (
                  <tr key={resource.id} className="hover:bg-gray-50">

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                          <FiBookOpen size={20} />
                        </div>

                        <div>
                          <p className="font-semibold text-gray-800">
                            {resource.title}
                          </p>
                          <p className="mt-1 max-w-xs text-xs text-gray-500">
                            {resource.description}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {resource.author}
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {resource.type}
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {resource.category}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          resource.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {resource.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">

                        <button
                          onClick={() => openEditModal(resource)}
                          title="Edit resource"
                          className="rounded-lg bg-blue-50 p-2 text-blue-600 hover:bg-blue-100"
                        >
                          <FiEdit2 size={17} />
                        </button>

                        <button
                          onClick={() => handleDeleteResource(resource.id)}
                          title="Delete resource"
                          className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100"
                        >
                          <FiTrash2 size={17} />
                        </button>

                        {resource.resourceUrl && (
                          <a
                            href={resource.resourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            title="Open resource"
                            className="rounded-lg bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
                          >
                            <FiExternalLink size={17} />
                          </a>
                        )}

                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-5 py-10 text-center text-gray-500"
                  >
                    No resources found.
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>

      {/* Add / Edit Resource Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xl bg-white p-6 shadow-xl">

            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-800">
                {editingId ? "Edit Resource" : "Add New Resource"}
              </h2>

              <button
                onClick={() => setShowModal(false)}
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
              >
                <FiX size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveResource} className="space-y-4">

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  required
                  value={resourceForm.title}
                  onChange={(e) =>
                    setResourceForm({
                      ...resourceForm,
                      title: e.target.value,
                    })
                  }
                  placeholder="Enter book or resource title"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Author
                </label>
                <input
                  type="text"
                  required
                  value={resourceForm.author}
                  onChange={(e) =>
                    setResourceForm({
                      ...resourceForm,
                      author: e.target.value,
                    })
                  }
                  placeholder="Enter author name"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Resource Type
                </label>
                <select
                  value={resourceForm.type}
                  onChange={(e) =>
                    setResourceForm({
                      ...resourceForm,
                      type: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                >
                  <option value="Book">Book</option>
                  <option value="Article">Article</option>
                  <option value="Guide">Guide</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  value={resourceForm.category}
                  onChange={(e) =>
                    setResourceForm({
                      ...resourceForm,
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
                  Description
                </label>
                <textarea
                  required
                  rows="3"
                  value={resourceForm.description}
                  onChange={(e) =>
                    setResourceForm({
                      ...resourceForm,
                      description: e.target.value,
                    })
                  }
                  placeholder="Enter a short description"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Resource Link (Optional)
                </label>
                <input
                  type="url"
                  value={resourceForm.resourceUrl}
                  onChange={(e) =>
                    setResourceForm({
                      ...resourceForm,
                      resourceUrl: e.target.value,
                    })
                  }
                  placeholder="https://example.com/resource"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  value={resourceForm.status}
                  onChange={(e) =>
                    setResourceForm({
                      ...resourceForm,
                      status: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
              >
                {editingId ? "Update Resource" : "Save Resource"}
              </button>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default AdminBooksResources;
