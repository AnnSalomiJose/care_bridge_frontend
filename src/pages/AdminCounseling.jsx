
import { useState } from "react";
import {
  FiSearch,
  FiPlus,
  FiVideo,
  FiEdit2,
  FiTrash2,
  FiX,
} from "react-icons/fi";

const initialVideos = [
  {
    id: 1,
    title: "Understanding and Managing Stress",
    category: "Stress",
    description: "Simple techniques to understand and manage daily stress.",
    videoUrl: "https://www.youtube.com/watch?v=inpok4MKVLM",
    status: "Active",
  },
  {
    id: 2,
    title: "Dealing with Anxiety",
    category: "Anxiety",
    description: "Helpful guidance for understanding anxiety.",
    videoUrl: "https://www.youtube.com/watch?v=O-6f5wQXSu8",
    status: "Active",
  },
  {
    id: 3,
    title: "Tips for Better Sleep",
    category: "Sleep Problems",
    description: "Healthy habits for improving sleep quality.",
    videoUrl: "https://www.youtube.com/watch?v=1ZYbU82GVz4",
    status: "Active",
  },
  {
    id: 4,
    title: "Building Self Confidence",
    category: "Self Confidence",
    description: "Learn simple ways to improve self confidence.",
    videoUrl: "https://www.youtube.com/watch?v=H14bBuluwB8",
    status: "Inactive",
  },
];

const emptyVideo = {
  title: "",
  category: "Stress",
  description: "",
  videoUrl: "",
  status: "Active",
};

function AdminCounseling() {
  const [videos, setVideos] = useState(initialVideos);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [videoForm, setVideoForm] = useState(emptyVideo);

  const categories = [
    "Stress",
    "Anxiety",
    "Low Mood",
    "Sleep Problems",
    "Relationship Issues",
    "Study / Work Pressure",
    "Anger Management",
    "Self Confidence",
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(search.toLowerCase()) ||
      video.category.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || video.status === filter;

    return matchesSearch && matchesFilter;
  });

  const openAddModal = () => {
    setEditingId(null);
    setVideoForm(emptyVideo);
    setShowModal(true);
  };

  const openEditModal = (video) => {
    setEditingId(video.id);
    setVideoForm({
      title: video.title,
      category: video.category,
      description: video.description,
      videoUrl: video.videoUrl,
      status: video.status,
    });
    setShowModal(true);
  };

  const handleSaveVideo = (e) => {
    e.preventDefault();

    const videoData = {
      ...videoForm,
      title: videoForm.title.trim(),
      description: videoForm.description.trim(),
      videoUrl: videoForm.videoUrl.trim(),
    };

    if (editingId) {
      setVideos((prev) =>
        prev.map((video) =>
          video.id === editingId
            ? { ...video, ...videoData }
            : video
        )
      );
    } else {
      setVideos((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...videoData,
        },
      ]);
    }

    setShowModal(false);
    setEditingId(null);
    setVideoForm(emptyVideo);
  };

  const handleDeleteVideo = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this video?"
    );

    if (confirmDelete) {
      setVideos((prev) => prev.filter((video) => video.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Counseling Videos
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage counseling videos and wellness resources.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          <FiPlus size={18} />
          Add Video
        </button>
      </div>

      {/* Statistics */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Videos</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-800">
            {videos.length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Active Videos</p>
          <h2 className="mt-2 text-2xl font-bold text-green-600">
            {videos.filter((video) => video.status === "Active").length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Inactive Videos</p>
          <h2 className="mt-2 text-2xl font-bold text-red-600">
            {videos.filter((video) => video.status === "Inactive").length}
          </h2>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="mb-5 flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search video or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {["All", "Active", "Inactive"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-lg px-4 py-2 text-sm font-medium ${
                filter === item
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Videos List */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left">
            <thead className="bg-gray-100 text-sm text-gray-600">
              <tr>
                <th className="px-5 py-4">Video</th>
                <th className="px-5 py-4">Category</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Video Link</th>
                <th className="px-5 py-4">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredVideos.length > 0 ? (
                filteredVideos.map((video) => (
                  <tr key={video.id} className="hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-purple-50 p-3 text-purple-600">
                          <FiVideo size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {video.title}
                          </p>
                          <p className="mt-1 max-w-xs text-xs text-gray-500">
                            {video.description}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {video.category}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          video.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {video.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <a
                        href={video.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-blue-600 hover:underline"
                      >
                        View Link
                      </a>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openEditModal(video)}
                          title="Edit video"
                          className="rounded-lg bg-blue-50 p-2 text-blue-600 hover:bg-blue-100"
                        >
                          <FiEdit2 size={17} />
                        </button>

                        <button
                          onClick={() => handleDeleteVideo(video.id)}
                          title="Delete video"
                          className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100"
                        >
                          <FiTrash2 size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-5 py-10 text-center text-gray-500"
                  >
                    No counseling videos found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Video Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-800">
                {editingId ? "Edit Counseling Video" : "Add Counseling Video"}
              </h2>

              <button
                onClick={() => setShowModal(false)}
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
              >
                <FiX size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveVideo} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Video Title
                </label>
                <input
                  type="text"
                  required
                  value={videoForm.title}
                  onChange={(e) =>
                    setVideoForm({
                      ...videoForm,
                      title: e.target.value,
                    })
                  }
                  placeholder="Enter video title"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  value={videoForm.category}
                  onChange={(e) =>
                    setVideoForm({
                      ...videoForm,
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
                  value={videoForm.description}
                  onChange={(e) =>
                    setVideoForm({
                      ...videoForm,
                      description: e.target.value,
                    })
                  }
                  placeholder="Enter a short description"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  YouTube Video URL
                </label>
                <input
                  type="url"
                  required
                  value={videoForm.videoUrl}
                  onChange={(e) =>
                    setVideoForm({
                      ...videoForm,
                      videoUrl: e.target.value,
                    })
                  }
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  value={videoForm.status}
                  onChange={(e) =>
                    setVideoForm({
                      ...videoForm,
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
                {editingId ? "Update Video" : "Save Video"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminCounseling;
