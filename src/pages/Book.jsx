import { useState } from 'react';
import {
  FiBookOpen,
  FiSearch,
  FiBookmark,
  FiHeart,
  FiClock,
  FiArrowRight,
  FiX,
  FiCheckCircle,
  FiBook,
} from 'react-icons/fi';

const resources = [
  {
  id: 1,
  title: 'Understanding Your Emotions',
  author: 'CareBridge Wellness Team',
  category: 'Mental Wellbeing',
  type: 'Self-help Guide',
  duration: '10 min read',
  description: 'Explore different emotions and self-awareness.',
  image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/e309e8199707299.Y3JvcCwxMjAwLDkzOCwwLDEwNg.jpg?utm_source=chatgpt.com',
  color: 'from-violet-100 to-purple-50',
  iconColor: 'text-violet-700',
  label: 'Popular',
},
  {
    id: 2,
    title: 'Everyday Stress Management',
    author: 'CareBridge Wellness Team',
    category: 'Stress Management',
    type: 'Wellbeing Guide',
    duration: '12 min read',
    description:
      'Discover general strategies for managing everyday pressure, organizing tasks and making time for relaxation.',
      image:'https://mastershee.com/data/images/mastering-stress-cover.webp?utm_source=chatgpt.com',
    color: 'from-teal-100 to-emerald-50',
    iconColor: 'text-teal-700',
    label: 'Recommended',
  },
  {
    id: 3,
    title: 'A Guide to Better Sleep',
    author: 'CareBridge Wellness Team',
    category: 'Healthy Lifestyle',
    type: 'Health Guide',
    duration: '8 min read',
    description:
      'Learn about sleep routines, healthy habits and creating a comfortable environment for rest.',
    image:'https://christinaribel.com/_next/image?q=75&url=%2Fimages%2Fbook%2Fcover.jpg&w=3840&utm_source=chatgpt.com',
      color: 'from-blue-100 to-indigo-50',
    iconColor: 'text-blue-700',
    label: 'New',
  },
  {
    id: 4,
    title: 'Building Self Confidence',
    author: 'CareBridge Wellness Team',
    category: 'Personal Growth',
    type: 'Self-help Guide',
    duration: '15 min read',
    description:
      'Explore practical ideas for self-awareness, positive habits and developing confidence in everyday situations.',
    image:'https://public-files.gumroad.com/dl6y2q1swg1gl2579juky7mb7q9z?utm_source=chatgpt.com',
      color: 'from-amber-100 to-yellow-50',
    iconColor: 'text-amber-700',
    label: 'Popular',
  },
  {
    id: 5,
    title: 'Mindfulness for Everyday Life',
    author: 'CareBridge Wellness Team',
    category: 'Mental Wellbeing',
    type: 'Mindfulness Guide',
    duration: '10 min read',
    description:
      'An introduction to mindfulness, present-moment awareness and simple everyday reflection practices.',
    image:'https://cdn.dribbble.com/userupload/46452631/file/883a8834b41d7db9ef205c44e394a3f2.jpg?format=webp&resize=1200x900&vertical=center&utm_source=chatgpt.com',
      color: 'from-pink-100 to-rose-50',
    iconColor: 'text-rose-700',
    label: 'Recommended',
  },
  {
    id: 6,
    title: 'Healthy Habits for a Better Life',
    author: 'CareBridge Wellness Team',
    category: 'Healthy Lifestyle',
    type: 'Lifestyle Guide',
    duration: '12 min read',
    description:
      'Explore general information about balanced routines, physical activity, hydration and daily wellbeing.',
      image:'https://store.theselfspace.com/cdn/shop/products/IMG_0006.jpg?v=1679046900&utm_source=chatgpt.com',
      color: 'from-green-100 to-lime-50',
    iconColor: 'text-green-700',
    label: 'New',
  },
  {
    id: 7,
    title: 'Managing Study and Work Pressure',
    author: 'CareBridge Wellness Team',
    category: 'Stress Management',
    type: 'Self-help Guide',
    duration: '9 min read',
    description:
      'Explore simple planning techniques, healthy boundaries and ways to manage everyday study or work demands.',
    image:'https://s3.us-east-1.amazonaws.com/contents.newzenler.com/176/library/yesha-ilton-3-ockup-xample-19641fb2b73f7f8_lg.png?utm_source=chatgpt.com',
      color: 'from-orange-100 to-amber-50',
    iconColor: 'text-orange-700',
    label: 'Recommended',
  },
  {
    id: 8,
    title: 'Small Steps Towards Personal Growth',
    author: 'CareBridge Wellness Team',
    category: 'Personal Growth',
    type: 'Personal Development',
    duration: '11 min read',
    description:
      'Learn about setting realistic goals, building useful habits and reflecting on personal progress.',
    image:'https://public-files.gumroad.com/x5zx3qo2fj7zgrq8j583oyo9dfw7?utm_source=chatgpt.com',
      color: 'from-cyan-100 to-sky-50',
    iconColor: 'text-cyan-700',
    label: 'Popular',
  },
];

const categories = [
  'All Resources',
  'Mental Wellbeing',
  'Stress Management',
  'Healthy Lifestyle',
  'Personal Growth',
];

function Books() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Resources');
  const [savedItems, setSavedItems] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  const filteredResources = resources.filter((resource) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      resource.title.toLowerCase().includes(searchText) ||
      resource.author.toLowerCase().includes(searchText) ||
      resource.category.toLowerCase().includes(searchText);

    const matchesCategory =
      category === 'All Resources' || resource.category === category;

    const matchesSaved =
      !showSavedOnly || savedItems.includes(resource.id);

    return matchesSearch && matchesCategory && matchesSaved;
  });

  const toggleSave = (id) => {
    setSavedItems((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-600 px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <FiBookOpen size={30} />
          </div>

          <p className="mt-5 text-sm font-bold tracking-widest text-teal-200 uppercase">
            CareBridge Knowledge Centre
          </p>

          <h1 className="mt-3 max-w-2xl text-3xl leading-tight font-bold sm:text-5xl">
            Learn, Grow and Take Care of Yourself
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-teal-50 sm:text-base">
            Discover self-help resources, mental wellbeing guides and
            educational materials to support your everyday health journey.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
              Self-help Resources
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
              Mental Wellbeing
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
              Healthy Lifestyle
            </span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">

        {/* Heading */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold tracking-widest text-teal-700 uppercase">
              Explore Resources
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Books & Helpful Resources
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Find useful learning materials for your wellbeing.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowSavedOnly(!showSavedOnly)}
            className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
              showSavedOnly
                ? 'border-teal-600 bg-teal-50 text-teal-700'
                : 'border-slate-200 bg-white text-slate-600 hover:border-teal-300'
            }`}
          >
            <FiBookmark />
            {showSavedOnly ? 'Show All' : `Saved (${savedItems.length})`}
          </button>
        </div>

        {/* Search */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <label
            htmlFor="resource-search"
            className="mb-3 block text-sm font-semibold text-slate-700"
          >
            Search Books and Resources
          </label>

          <div className="relative">
            <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />

            <input
              id="resource-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, author or category..."
              className="w-full rounded-xl border border-slate-200 py-3.5 pr-4 pl-11 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          {/* Categories */}
          <div className="mt-5">
            <p className="mb-3 text-xs font-semibold text-slate-500">
              Browse by Category
            </p>

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

        {/* Resource count */}
        <div className="mb-6 mt-9 flex items-center justify-between">
          <h3 className="font-bold text-slate-900">
            {showSavedOnly ? 'Your Saved Resources' : 'Available Resources'}
          </h3>

          <span className="text-xs font-medium text-slate-500">
            {filteredResources.length} resources found
          </span>
        </div>

        {/* Resource cards */}
        {filteredResources.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource) => (
              <article
                key={resource.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Book cover visual */}
                {/* Actual Book Cover Image */}
<div className="relative flex h-56 items-center justify-center overflow-hidden bg-slate-50">

  <img
    src={resource.image}
    alt={resource.title}
    loading="lazy"
    className="h-full w-full object-contain p-3"
  />

  <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-teal-700 shadow-sm">
    {resource.label}
  </span>

  <button
    type="button"
    onClick={() => toggleSave(resource.id)}
    aria-label="Save resource"
    className={`absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full shadow-sm transition ${
      savedItems.includes(resource.id)
        ? 'bg-teal-600 text-white'
        : 'bg-white text-slate-600 hover:text-teal-700'
    }`}
  >
    <FiBookmark
      size={18}
      className={
        savedItems.includes(resource.id) ? 'fill-current' : ''
      }
    />
  </button>

</div>

                {/* Card content */}
                <div className="p-5">
                  <span className="text-xs font-semibold text-teal-700">
                    {resource.category}
                  </span>

                  <h3 className="mt-2 text-lg font-bold leading-6 text-slate-900">
                    {resource.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-500">
                    By {resource.author}
                  </p>

                  <p className="mt-4 min-h-16 text-sm leading-6 text-slate-600">
                    {resource.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="flex items-center gap-2 text-xs text-slate-500">
                      <FiClock />
                      {resource.duration}
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedResource(resource)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
                    >
                      View Details
                      <FiArrowRight />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <FiBookOpen className="mx-auto text-slate-400" size={35} />

            <h3 className="mt-4 font-bold text-slate-800">
              No resources found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another search or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch('');
                setCategory('All Resources');
                setShowSavedOnly(false);
              }}
              className="mt-5 font-semibold text-teal-700 hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Counseling banner */}
      <section className="px-5 pb-16">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 rounded-3xl bg-violet-50 p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <div className="flex items-center gap-2 text-violet-700">
              <FiHeart size={21} />
              <span className="text-sm font-bold">Mental Wellbeing</span>
            </div>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              Looking for emotional support?
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
              Explore our personalized mental wellbeing and counseling
              resources.
            </p>
          </div>

          <a
            href="/counseling"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-violet-700 px-5 py-3 font-semibold text-white transition hover:bg-violet-800"
          >
            Explore Counseling
            <FiArrowRight />
          </a>
        </div>
      </section>

      {/* Resource details modal */}
      {selectedResource && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-5"
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="resource-modal-title"
            className="my-auto w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <FiBookOpen size={25} />
              </div>

              <button
                type="button"
                onClick={() => setSelectedResource(null)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                aria-label="Close details"
              >
                <FiX size={22} />
              </button>
            </div>

            <p className="mt-5 text-xs font-bold tracking-widest text-teal-700 uppercase">
              {selectedResource.category}
            </p>

            <h2
              id="resource-modal-title"
              className="mt-2 text-2xl font-bold text-slate-900"
            >
              {selectedResource.title}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              By {selectedResource.author}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-500">
              <span className="rounded-full bg-slate-100 px-3 py-2">
                {selectedResource.type}
              </span>

              <span className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                <FiClock />
                {selectedResource.duration}
              </span>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-600">
              {selectedResource.description}
            </p>

            <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
              <div className="flex items-center gap-2 text-blue-800">
                <FiCheckCircle />
                <h3 className="font-semibold">Resource Information</h3>
              </div>

              <p className="mt-2 text-xs leading-6 text-blue-900">
                This is a sample resource preview for the CareBridge frontend.
                Full reading content and verified book details will be added
                during the content management stage.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedResource(null)}
              className="mt-7 w-full rounded-xl bg-teal-600 px-5 py-3.5 font-semibold text-white transition hover:bg-teal-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-5 py-7 text-center text-xs leading-6 text-slate-500">
        © {new Date().getFullYear()} CareBridge. Your health, our care.
        <p className="mt-1">
          Educational resources are for general information and do not replace
          professional healthcare advice.
        </p>
      </footer>
    </main>
  );
}

export default Books;