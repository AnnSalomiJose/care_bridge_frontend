
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHeart,
  FiMoon,
  FiBookOpen,
  FiUsers,
  FiActivity,
  FiSmile,
  FiShield,
  FiPlayCircle,
  FiClock,
  FiArrowRight,
  FiCheckCircle,
  FiAlertCircle,
  FiMessageCircle,
  FiVideo,
  FiX,
} from "react-icons/fi";

// Available concerns
const concerns = [
  {
    name: "Stress",
    description: "Feeling stressed or overwhelmed",
    icon: FiActivity,
  },
  {
    name: "Anxiety",
    description: "Worry, nervousness or fear",
    icon: FiActivity,
  },
  {
    name: "Low Mood",
    description: "Feeling sad or emotionally low",
    icon: FiHeart,
  },
  {
    name: "Sleep Problems",
    description: "Difficulty sleeping or relaxing",
    icon: FiMoon,
  },
  {
    name: "Relationship Issues",
    description: "Personal or family relationship concerns",
    icon: FiUsers,
  },
  {
    name: "Study / Work Pressure",
    description: "Pressure from studies or work",
    icon: FiBookOpen,
  },
  {
    name: "Anger Management",
    description: "Difficulty managing anger",
    icon: FiActivity,
  },
  {
    name: "Self Confidence",
    description: "Building confidence and self-esteem",
    icon: FiSmile,
  },
];

// Educational video resources
// YouTube videos are embedded directly inside CareBridge.
const resourceLibrary = [
  {
    id: 1,
    category: "Stress",
    title: "Understanding and Managing Stress",
    description:
      "A World Health Organization educational video introducing practical skills for coping with stress.",
    duration: "Educational Video",
    type: "Stress Management",
    videoId: "E3Cts45FNrk",
    provider: "World Health Organization",
  },
  {
    id: 2,
    category: "Stress",
    title: "Simple Relaxation Techniques",
    description:
      "Explore general relaxation and self-care ideas.",
    duration: "Guided Resource",
    type: "Guided Practice",
    videoId: null,
    provider: "CareBridge Resource",
  },
  {
    id: 3,
    category: "Anxiety",
    title: "Understanding Mental Health Concerns",
    description:
      "A UNICEF video where a mental health expert answers questions from young people.",
    duration: "Educational Video",
    type: "Mental Wellbeing",
    videoId: "fcf95TcgP30",
    provider: "UNICEF",
  },
  {
    id: 4,
    category: "Anxiety",
    title: "Calming Breathing Practice",
    description:
      "A general introduction to calming breathing and relaxation.",
    duration: "Guided Resource",
    type: "Guided Practice",
    videoId: null,
    provider: "CareBridge Resource",
  },
  {
    id: 5,
    category: "Low Mood",
    title: "What's on Your Mind?",
    description:
      "A UNICEF mental wellbeing video encouraging young people to talk about their feelings and seek support.",
    duration: "Educational Video",
    type: "Emotional Wellbeing",
    videoId: "xW5bkXtxsrs",
    provider: "UNICEF",
  },
  {
    id: 6,
    category: "Low Mood",
    title: "Understanding Emotional Wellbeing",
    description:
      "Educational material about recognising and understanding emotions.",
    duration: "Educational Video",
    type: "Emotional Wellbeing",
    videoId: "mw3BLjsjA90",
    provider: "WHO and UNICEF Learning Series",
  },
  {
    id: 7,
    category: "Sleep Problems",
    title: "Guided Sleep Meditation",
    description:
      "A guided meditation intended for relaxation and bedtime preparation.",
    duration: "Guided Meditation",
    type: "Sleep & Relaxation",
    videoId: "fSMwBpOlBek",
    provider: "Meditation Vacation",
  },
  {
    id: 8,
    category: "Sleep Problems",
    title: "Healthy Sleep Habits",
    description:
      "Explore general sleep routines and healthy bedtime habits.",
    duration: "Reading Resource",
    type: "Self-Care",
    videoId: null,
    provider: "CareBridge Resource",
  },
  {
    id: 9,
    category: "Relationship Issues",
    title: "Healthy Communication",
    description:
      "Educational material about empathy, communication and supportive relationships.",
    duration: "Educational Video",
    type: "Communication",
    videoId: "xB1fBH00BxY",
    provider: "WHO and UNICEF Learning Series",
  },
  {
    id: 10,
    category: "Study / Work Pressure",
    title: "Managing Study and Work Pressure",
    description:
      "Educational content about recognising stress and managing everyday pressure.",
    duration: "Educational Video",
    type: "Stress Management",
    videoId: "2idNCqccCgE",
    provider: "WHO and UNICEF Learning Series",
  },
  {
    id: 11,
    category: "Anger Management",
    title: "Understanding and Managing Emotions",
    description:
      "Educational material about understanding emotions and responding in helpful ways.",
    duration: "Educational Video",
    type: "Emotional Wellbeing",
    videoId: "mw3BLjsjA90",
    provider: "WHO and UNICEF Learning Series",
  },
  {
    id: 12,
    category: "Self Confidence",
    title: "Building Self-Esteem",
    description:
      "Educational material about recognising personal strengths and building self-esteem.",
    duration: "Educational Video",
    type: "Self Confidence",
    videoId: "ynbwL0-sE3E",
    provider: "WHO and UNICEF Learning Series",
  },
];

function Counseling() {
  const location = useLocation();

  const [selectedConcerns, setSelectedConcerns] = useState([]);
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("Recently");
  const [needImmediateHelp, setNeedImmediateHelp] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Selected video for the in-page player
  const [selectedVideo, setSelectedVideo] = useState(null);

  const recommendedResources = resourceLibrary.filter((resource) =>
    selectedConcerns.includes(resource.category)
  );

  const handleConcernChange = (concern) => {
    setSelectedConcerns((previous) =>
      previous.includes(concern)
        ? previous.filter((item) => item !== concern)
        : [...previous, concern]
    );

    setSubmitted(false);
    setSelectedVideo(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      selectedConcerns.length === 0 &&
      !description.trim() &&
      !needImmediateHelp
    ) {
      return;
    }

    setSubmitted(true);

    // Automatically select the first available video.
    if (!needImmediateHelp) {
      const firstVideo = recommendedResources.find(
        (resource) => resource.videoId
      );

      setSelectedVideo(firstVideo || null);
    } else {
      setSelectedVideo(null);
    }

    setTimeout(() => {
      document
        .getElementById("counseling-results")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  const handleReset = () => {
    setSelectedConcerns([]);
    setDescription("");
    setDuration("Recently");
    setNeedImmediateHelp(false);
    setSubmitted(false);
    setSelectedVideo(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePlayVideo = (resource) => {
    if (!resource.videoId) return;

    setSelectedVideo(resource);

    setTimeout(() => {
      document
        .getElementById("counseling-video-player")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 100);
  };

  const professionalSupportLink = location.pathname.startsWith(
    "/user-dashboard"
  )
    ? "/user-dashboard/doctors"
    : "/doctors";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

      {/* Hero */}
      <section className="relative overflow-hidden bg-violet-950 px-5 py-16 text-white sm:py-20">
        <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-violet-600/30 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
            <FiHeart size={32} />
          </div>

          <p className="mt-5 text-sm font-bold uppercase tracking-widest text-violet-200">
            CareBridge Mental Wellbeing
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
            Your Feelings Matter
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-violet-100 sm:text-base">
            Share what you are going through and explore educational
            videos, self-care resources and professional support options.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {[
              "Mental Wellbeing",
              "Counseling Resources",
              "Self-Care",
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form */}
      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-8 lg:grid-cols-3">

            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">

                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-violet-700">
                    Personal Wellbeing Check-in
                  </p>

                  <h2 className="mt-3 text-2xl font-bold text-slate-900">
                    How are you feeling today?
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Choose the concerns you would like to explore.
                    You can select more than one.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-8">

                  {/* Concern Selection */}
                  <div>
                    <label className="mb-4 block text-base font-semibold text-slate-800">
                      What would you like support with?
                    </label>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {concerns.map((concern) => {
                        const Icon = concern.icon;
                        const isSelected = selectedConcerns.includes(
                          concern.name
                        );

                        return (
                          <button
                            type="button"
                            key={concern.name}
                            onClick={() =>
                              handleConcernChange(concern.name)
                            }
                            className={`flex items-start gap-3 rounded-xl border p-4 text-left transition ${
                              isSelected
                                ? "border-violet-500 bg-violet-50"
                                : "border-slate-200 hover:border-violet-300 hover:bg-violet-50/40"
                            }`}
                          >
                            <div
                              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                                isSelected
                                  ? "bg-violet-600 text-white"
                                  : "bg-violet-50 text-violet-700"
                              }`}
                            >
                              <Icon size={21} />
                            </div>

                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-semibold text-slate-800">
                                {concern.name}
                              </p>

                              <p className="mt-1 text-xs leading-5 text-slate-500">
                                {concern.description}
                              </p>
                            </div>

                            {isSelected && (
                              <FiCheckCircle
                                className="shrink-0 text-violet-700"
                                size={19}
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label
                      htmlFor="counseling-description"
                      className="mb-3 block text-base font-semibold text-slate-800"
                    >
                      Would you like to share more?
                    </label>

                    <textarea
                      id="counseling-description"
                      rows="5"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                        setSubmitted(false);
                        setSelectedVideo(null);
                      }}
                      placeholder="You can describe your feelings or what has been troubling you. Share only what you feel comfortable sharing..."
                      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm leading-7 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                    />

                    <p className="mt-2 text-xs text-slate-500">
                      Sharing more details is optional.
                    </p>
                  </div>

                  {/* Duration */}
                  <div>
                    <label
                      htmlFor="concern-duration"
                      className="mb-3 block text-sm font-semibold text-slate-800"
                    >
                      How long have you been feeling this way?
                    </label>

                    <select
                      id="concern-duration"
                      value={duration}
                      onChange={(e) => {
                        setDuration(e.target.value);
                        setSubmitted(false);
                        setSelectedVideo(null);
                      }}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                    >
                      <option value="Recently">Recently</option>
                      <option value="A few days">A few days</option>
                      <option value="A few weeks">A few weeks</option>
                      <option value="Several months">Several months</option>
                      <option value="Comes and goes">It comes and goes</option>
                    </select>
                  </div>

                  {/* Immediate Support */}
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        checked={needImmediateHelp}
                        onChange={(e) => {
                          setNeedImmediateHelp(e.target.checked);
                          setSubmitted(false);
                          setSelectedVideo(null);
                        }}
                        className="mt-1 h-4 w-4 accent-red-600"
                      />

                      <span className="text-sm leading-6 text-red-800">
                        I feel unsafe right now, or I may hurt myself
                        or someone else.
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={
                      selectedConcerns.length === 0 &&
                      !description.trim() &&
                      !needImmediateHelp
                    }
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-700 px-6 py-4 font-semibold text-white transition hover:bg-violet-800 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Explore Support Resources
                    <FiArrowRight />
                  </button>
                </form>

                {/* Results Message */}
                {submitted && (
                  <div
                    aria-live="polite"
                    className={`mt-8 rounded-2xl border p-5 ${
                      needImmediateHelp
                        ? "border-red-200 bg-red-50"
                        : "border-violet-200 bg-violet-50"
                    }`}
                  >
                    {needImmediateHelp ? (
                      <div className="flex items-start gap-3">
                        <FiAlertCircle
                          className="mt-1 shrink-0 text-red-600"
                          size={24}
                        />

                        <div>
                          <h3 className="font-bold text-red-800">
                            Immediate support is important
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-red-800">
                            Please contact local emergency services
                            or go to the nearest emergency department
                            if you are in immediate danger. Reach out
                            to a trusted person who can stay with you.
                            Do not rely on videos or this website for
                            urgent help.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-3">
                        <FiCheckCircle
                          className="mt-1 shrink-0 text-violet-700"
                          size={23}
                        />

                        <div>
                          <h3 className="font-bold text-violet-900">
                            Your wellbeing check-in is ready
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-slate-700">
                            Based on the concerns you selected,
                            explore the educational videos and
                            resources below. These are general
                            wellbeing resources, not a diagnosis
                            or a substitute for professional
                            counseling.
                          </p>

                          <p className="mt-3 text-xs text-slate-600">
                            Selected topics:{" "}
                            {selectedConcerns.join(", ") ||
                              "Not specified"}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Information Panel */}
            <aside className="space-y-5">

              <div className="rounded-2xl border border-violet-100 bg-violet-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-violet-700">
                  <FiHeart size={25} />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  You Are Not Alone
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Everyone experiences difficult emotions at times.
                  Seeking support is a positive step towards wellbeing.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-2 text-violet-700">
                  <FiVideo size={21} />

                  <h3 className="font-bold text-slate-900">
                    Counseling Videos
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Choose your concern to explore educational videos
                  directly inside the CareBridge website.
                </p>
              </div>

              <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6">
                <div className="flex items-center gap-2 text-teal-700">
                  <FiMessageCircle size={21} />

                  <h3 className="font-bold text-slate-900">
                    Professional Support
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Videos cannot replace personal support from
                  a qualified mental health professional.
                </p>

                <Link
                  to={professionalSupportLink}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:underline"
                >
                  Explore Professionals
                  <FiArrowRight />
                </Link>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-2 text-slate-700">
                  <FiShield size={21} />

                  <h3 className="font-bold text-slate-900">
                    Your Privacy
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Share only information you are comfortable
                  providing. Secure storage will be implemented
                  during the backend stage.
                </p>
              </div>
            </aside>
          </div>

          {/* Recommended Resources */}
          {submitted && !needImmediateHelp && (
            <section
              id="counseling-results"
              className="mt-12 scroll-mt-24"
            >
              <div className="mb-6">
                <p className="text-sm font-bold uppercase tracking-widest text-violet-700">
                  Your Selected Topics
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Recommended Wellbeing Resources
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Select a video to play it directly on this page.
                </p>
              </div>

              {/* Selected Video Player */}
              {selectedVideo && (
                <div
                  id="counseling-video-player"
                  className="mb-8 overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-sm scroll-mt-24"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 bg-violet-950 px-5 py-4 text-white">
                    <div className="flex items-center gap-2">
                      <FiPlayCircle size={21} />

                      <div>
                        <p className="text-sm font-bold">
                          Now Playing
                        </p>

                        <p className="text-xs text-violet-200">
                          {selectedVideo.category}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedVideo(null)}
                      className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold hover:bg-white/20"
                    >
                      <FiX />
                      Close Player
                    </button>
                  </div>

                  {/* Embedded YouTube Video */}
                  <div className="aspect-video w-full bg-black">
                    <iframe
                      key={selectedVideo.videoId}
                      src={`https://www.youtube-nocookie.com/embed/${selectedVideo.videoId}?rel=0`}
                      title={selectedVideo.title}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-900">
                      {selectedVideo.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {selectedVideo.description}
                    </p>

                    <p className="mt-3 text-xs text-slate-400">
                      Video source: {selectedVideo.provider}
                    </p>
                  </div>
                </div>
              )}

              {/* Video Cards */}
              {recommendedResources.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2">

                  {recommendedResources.map((resource) => {
                    const isPlaying =
                      selectedVideo?.id === resource.id;

                    return (
                      <article
                        key={resource.id}
                        className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                          isPlaying
                            ? "border-violet-500 ring-2 ring-violet-100"
                            : "border-slate-200"
                        }`}
                      >
                        {/* Thumbnail / Video Preview */}
                        <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-violet-100 via-purple-50 to-teal-50">
                          {resource.videoId ? (
                            <>
                              <img
                                src={`https://img.youtube.com/vi/${resource.videoId}/hqdefault.jpg`}
                                alt={resource.title}
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover"
                              />

                              <div className="absolute inset-0 bg-slate-950/30" />

                              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-violet-700 shadow-lg">
                                <FiPlayCircle size={38} />
                              </div>
                            </>
                          ) : (
                            <div className="flex flex-col items-center gap-2 text-violet-600">
                              <FiBookOpen size={35} />
                              <span className="text-xs font-semibold">
                                Resource
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="p-5">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                              {resource.category}
                            </span>

                            <span className="flex items-center gap-1 text-xs text-slate-500">
                              <FiClock />
                              {resource.duration}
                            </span>
                          </div>

                          <h3 className="mt-4 font-bold text-slate-900">
                            {resource.title}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {resource.description}
                          </p>

                          <p className="mt-3 text-xs text-slate-400">
                            {resource.provider}
                          </p>

                          <div className="mt-5 border-t border-slate-100 pt-4">
                            {resource.videoId ? (
                              <button
                                type="button"
                                onClick={() =>
                                  handlePlayVideo(resource)
                                }
                                className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                                  isPlaying
                                    ? "bg-violet-100 text-violet-800"
                                    : "bg-violet-700 text-white hover:bg-violet-800"
                                }`}
                              >
                                <FiPlayCircle size={19} />

                                {isPlaying
                                  ? "Playing on this page"
                                  : "Watch Video Here"}
                              </button>
                            ) : (
                              <span className="block rounded-xl bg-slate-50 px-4 py-3 text-center text-xs font-medium text-slate-500">
                                Additional resource coming soon
                              </span>
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
                  <FiBookOpen
                    className="mx-auto text-slate-400"
                    size={32}
                  />

                  <h3 className="mt-3 font-bold text-slate-800">
                    General Wellbeing Resources
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Choose one of the topics above to see related videos.
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={handleReset}
                className="mt-7 rounded-xl border border-violet-200 bg-white px-5 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-50"
              >
                Start a New Check-in
              </button>
            </section>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-5 py-7 text-center text-xs leading-6 text-slate-500">
        © {new Date().getFullYear()} CareBridge. Your wellbeing matters.

        <p className="mt-1">
          These videos are educational resources and are not a
          substitute for professional mental health care.
        </p>
      </footer>
    </main>
  );
}

export default Counseling;
