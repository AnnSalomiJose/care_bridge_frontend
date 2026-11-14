
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiActivity,
  FiAlertCircle,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiHeart,
  FiInfo,
  FiShield,
  FiRefreshCw,
  FiUser,
  FiCalendar,
} from "react-icons/fi";

// Symptom follow-up questions
const followUpQuestions = {
  Headache: [
    {
      key: "headacheLocation",
      label: "Where do you feel the headache?",
      type: "select",
      options: [
        "Forehead",
        "One side of the head",
        "Back of the head",
        "Whole head",
        "Around the eyes",
      ],
    },
    {
      key: "headacheType",
      label: "How does the headache feel?",
      type: "select",
      options: [
        "Throbbing or pulsing",
        "Tightness or pressure",
        "Sharp or stabbing",
        "Dull or aching",
        "Not sure",
      ],
    },
    {
      key: "headacheAssociated",
      label: "Do you experience any of these along with it?",
      type: "multiple",
      options: [
        "Nausea",
        "Sensitivity to light",
        "Sensitivity to sound",
        "Dizziness",
        "Eye strain",
      ],
    },
  ],

  Fever: [
    {
      key: "temperature",
      label: "Have you measured your body temperature?",
      type: "select",
      options: [
        "Not measured",
        "Below 38°C",
        "38°C – 39°C",
        "Above 39°C",
      ],
    },
    {
      key: "feverAssociated",
      label: "Are you experiencing any other symptoms?",
      type: "multiple",
      options: [
        "Chills",
        "Sweating",
        "Body aches",
        "Sore throat",
        "Skin rash",
      ],
    },
  ],

  Cough: [
    {
      key: "coughType",
      label: "What type of cough do you have?",
      type: "select",
      options: [
        "Dry cough",
        "Cough with mucus",
        "Occasional cough",
        "Frequent cough",
        "Not sure",
      ],
    },
    {
      key: "coughAssociated",
      label: "Do you experience any of these?",
      type: "multiple",
      options: [
        "Sore throat",
        "Runny nose",
        "Chest discomfort",
        "Wheezing",
      ],
    },
  ],

  Cold: [
    {
      key: "coldSymptoms",
      label: "What symptoms are you experiencing?",
      type: "multiple",
      options: [
        "Runny nose",
        "Blocked nose",
        "Sneezing",
        "Sore throat",
        "Watery eyes",
      ],
    },
  ],

  "Body Pain": [
    {
      key: "bodyPainLocation",
      label: "Where do you experience body pain?",
      type: "select",
      options: [
        "Back",
        "Neck",
        "Shoulder",
        "Legs",
        "Arms",
        "Multiple body parts",
        "Whole body",
      ],
    },
    {
      key: "bodyPainType",
      label: "How does the pain feel?",
      type: "select",
      options: [
        "Muscle soreness",
        "Sharp pain",
        "Dull pain",
        "Stiffness",
        "Not sure",
      ],
    },
  ],

  Tiredness: [
    {
      key: "tirednessPattern",
      label: "When do you feel tired?",
      type: "select",
      options: [
        "Throughout the day",
        "Mostly in the morning",
        "Mostly in the evening",
        "After physical activity",
        "Occasionally",
      ],
    },
  ],

  "Stomach Pain": [
    {
      key: "stomachLocation",
      label: "Where do you feel stomach pain?",
      type: "select",
      options: [
        "Upper abdomen",
        "Lower abdomen",
        "Right side",
        "Left side",
        "Around the navel",
        "Whole abdomen",
      ],
    },
    {
      key: "stomachType",
      label: "How does the pain feel?",
      type: "select",
      options: [
        "Cramping",
        "Burning",
        "Sharp pain",
        "Dull pain",
        "Bloating or pressure",
        "Not sure",
      ],
    },
    {
      key: "stomachAssociated",
      label: "Do you experience any other symptoms?",
      type: "multiple",
      options: [
        "Vomiting",
        "Diarrhoea",
        "Constipation",
        "Bloating",
        "Loss of appetite",
      ],
    },
  ],

  Nausea: [
    {
      key: "vomitingFrequency",
      label: "How often do you feel nauseated or vomit?",
      type: "select",
      options: [
        "Nausea without vomiting",
        "Vomiting once",
        "Vomiting several times",
        "Comes and goes",
      ],
    },
  ],

  "Sleep Problems": [
    {
      key: "sleepType",
      label: "What kind of sleep problem do you have?",
      type: "select",
      options: [
        "Difficulty falling asleep",
        "Waking up frequently",
        "Waking up too early",
        "Sleeping too much",
        "Poor sleep quality",
      ],
    },
  ],

  Other: [
    {
      key: "otherDetails",
      label: "Please describe your concern",
      type: "text",
    },
  ],
};

// Emergency warning signs
const emergencyOptions = [
  "Sudden, extremely severe headache",
  "Chest pain or pressure",
  "Severe difficulty breathing",
  "Sudden weakness or numbness on one side",
  "Sudden difficulty speaking or confusion",
  "Fainting or seizure",
  "Severe abdominal pain",
  "Vomiting blood or severe bleeding",
  "High fever with stiff neck",
];

// General possible explanations.
// These are informational examples, not diagnoses.
const possibleExplanations = {
  Headache:
    "Headaches can be associated with stress, dehydration, lack of sleep, eye strain or different headache patterns. A healthcare professional can assess the cause.",

  Fever:
    "Fever can occur with infections and other health conditions. Temperature, duration and accompanying symptoms help a clinician decide what evaluation is needed.",

  Cough:
    "Cough can occur with respiratory infections, allergies or airway irritation. Persistent or worsening cough should be assessed by a healthcare professional.",

  Cold:
    "Cold-like symptoms can occur with viral infections, allergies or irritation. A clinician can assess symptoms that persist or become worse.",

  "Body Pain":
    "Body pain can be associated with physical strain, muscle problems, infections or other conditions. An examination may be needed to understand the cause.",

  Tiredness:
    "Tiredness can be associated with poor sleep, stress, physical activity, infections or other health factors. Persistent tiredness deserves medical review.",

  "Stomach Pain":
    "Abdominal discomfort can have digestive, infectious and other causes. The location, severity and duration of pain are important for medical assessment.",

  Nausea:
    "Nausea can occur with digestive problems, infections, medication effects and several other conditions. Persistent vomiting needs medical assessment.",

  "Sleep Problems":
    "Sleep difficulties can be associated with stress, irregular sleep routines, lifestyle factors or medical conditions.",

  Other:
    "Your concern needs individual assessment by a healthcare professional. The information provided is not enough to identify a specific cause.",
};

function HealthChecker() {
  const navigate = useNavigate();
  const location = useLocation();

  const [symptoms, setSymptoms] = useState([]);
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("Today");
  const [severity, setSeverity] = useState(5);
  const [details, setDetails] = useState({});
  const [emergencySigns, setEmergencySigns] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [assessment, setAssessment] = useState(null);
  const [error, setError] = useState("");

  const symptomOptions = [
    "Headache",
    "Fever",
    "Cough",
    "Cold",
    "Body Pain",
    "Tiredness",
    "Stomach Pain",
    "Nausea",
    "Sleep Problems",
    "Other",
    "Chest Pain",
    "Difficulty Breathing",
  ];

  const handleSymptomChange = (symptom) => {
    setSymptoms((previous) =>
      previous.includes(symptom)
        ? previous.filter((item) => item !== symptom)
        : [...previous, symptom]
    );

    setAssessment(null);
    setSubmitted(false);
    setError("");
  };

  const handleDetailChange = (key, value, multiple = false) => {
    setDetails((previous) => {
      if (!multiple) {
        return {
          ...previous,
          [key]: value,
        };
      }

      const current = previous[key] || [];

      return {
        ...previous,
        [key]: current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value],
      };
    });

    setAssessment(null);
    setSubmitted(false);
  };

  const handleEmergencyChange = (sign) => {
    setEmergencySigns((previous) =>
      previous.includes(sign)
        ? previous.filter((item) => item !== sign)
        : [...previous, sign]
    );

    setAssessment(null);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (symptoms.length === 0 && !description.trim()) {
      setError("Please select at least one symptom or describe your concern.");
      return;
    }

    const hasEmergencySymptom =
      symptoms.includes("Chest Pain") ||
      symptoms.includes("Difficulty Breathing") ||
      emergencySigns.length > 0;

    const severityHigh = severity >= 8;

    const symptomsText = symptoms.join(", ");

    // General Physician is the initial point of contact.
    // A specialist may be needed after medical evaluation.
    const additionalSpecialists = [];

    if (symptoms.includes("Headache")) {
      additionalSpecialists.push({
        name: "Neurologist",
        reason:
          "A neurologist may be considered for recurrent, unusual or persistent headache after an initial medical assessment.",
      });
    }

    if (
      symptoms.includes("Stomach Pain") ||
      symptoms.includes("Nausea")
    ) {
      additionalSpecialists.push({
        name: "Gastroenterologist",
        reason:
          "A gastroenterologist may be considered if digestive symptoms continue or need specialist evaluation.",
      });
    }

    if (
      symptoms.includes("Cough") &&
      duration === "More than a week"
    ) {
      additionalSpecialists.push({
        name: "Pulmonologist",
        reason:
          "A pulmonologist may be considered if cough persists or a respiratory condition needs specialist evaluation.",
      });
    }

    if (symptoms.includes("Sleep Problems")) {
      additionalSpecialists.push({
        name: "Mental Health Professional",
        reason:
          "A mental health professional may help when ongoing stress or emotional difficulties are affecting sleep.",
      });
    }

    let urgency = "routine";
    let urgencyTitle = "Routine medical consultation";
    let urgencyDescription =
      "Based on the information provided, you can consider arranging a routine medical consultation. Seek medical advice sooner if symptoms worsen or persist.";

    if (hasEmergencySymptom) {
      urgency = "emergency";
      urgencyTitle = "Urgent medical attention needed";
      urgencyDescription =
        "You reported a warning sign that may need urgent medical assessment. Please seek emergency medical care now. Do not wait for an online result or appointment.";
    } else if (severityHigh || duration === "More than a week") {
      urgency = "prompt";
      urgencyTitle = "Arrange medical review promptly";
      urgencyDescription =
        "Your reported symptom severity or duration suggests that you should arrange a medical review promptly, especially if the symptoms are getting worse.";
    }

    const explanationList = symptoms.map(
      (symptom) => ({
        symptom,
        explanation:
          possibleExplanations[symptom] ||
          possibleExplanations.Other,
      })
    );

    setAssessment({
      symptoms: symptomsText,
      description,
      duration,
      severity,
      details: { ...details },
      emergency: hasEmergencySymptom,
      emergencySigns: [...emergencySigns],
      urgency,
      urgencyTitle,
      urgencyDescription,
      primarySpecialty: "General Physician",
      primaryReason:
        "A General Physician is a suitable first point of contact to review your symptoms and decide whether tests or a specialist referral are needed.",
      additionalSpecialists,
      explanationList,
    });

    setSubmitted(true);

    // Bring the user to the assessment result.
    setTimeout(() => {
      document
        .getElementById("assessment-result")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleReset = () => {
    setSymptoms([]);
    setDescription("");
    setDuration("Today");
    setSeverity(5);
    setDetails({});
    setEmergencySigns([]);
    setSubmitted(false);
    setAssessment(null);
    setError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleFindDoctors = () => {
    const insideUserDashboard =
      location.pathname.startsWith("/user-dashboard");

    const doctorPath = insideUserDashboard
      ? "/user-dashboard/doctors"
      : "/doctors";

    navigate(
      `${doctorPath}?specialty=${encodeURIComponent(
        assessment.primarySpecialty
      )}`,
      {
        state: {
          recommendedSpecialty: assessment.primarySpecialty,
          assessmentSymptoms: assessment.symptoms,
        },
      }
    );
  };

  const renderFollowUpQuestion = (question) => {
    if (question.type === "text") {
      return (
        <textarea
          rows="3"
          value={details[question.key] || ""}
          onChange={(e) =>
            handleDetailChange(question.key, e.target.value)
          }
          placeholder="Enter more details..."
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
        />
      );
    }

    if (question.type === "multiple") {
      return (
        <div className="grid gap-2 sm:grid-cols-2">
          {question.options.map((option) => {
            const selected = (
              details[question.key] || []
            ).includes(option);

            return (
              <label
                key={option}
                className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 text-sm transition ${
                  selected
                    ? "border-teal-500 bg-teal-50 text-teal-800"
                    : "border-slate-200 text-slate-600 hover:border-teal-300"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() =>
                    handleDetailChange(
                      question.key,
                      option,
                      true
                    )
                  }
                  className="accent-teal-600"
                />
                {option}
              </label>
            );
          })}
        </div>
      );
    }

    return (
      <select
        value={details[question.key] || ""}
        onChange={(e) =>
          handleDetailChange(question.key, e.target.value)
        }
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
      >
        <option value="">Select an option</option>
        {question.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

      {/* Header */}
      <section className="bg-teal-700 px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
            <FiActivity size={32} />
          </div>

          <p className="mt-5 text-sm font-bold uppercase tracking-widest text-teal-200">
            CareBridge Health Checker
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
            Understand Your Health Better
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-teal-50 sm:text-base">
            Tell us how you are feeling. Answer a few questions and
            receive general health guidance and a suggested doctor
            specialty for your next step.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">

          {/* Health Assessment Form */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900">
                  Health Assessment
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Please provide information about your current
                  health concerns.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Step 1: Symptoms */}
                <div>
                  <label className="mb-4 block text-base font-semibold text-slate-800">
                    1. What symptoms are you experiencing?
                  </label>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {symptomOptions.map((symptom) => {
                      const selected = symptoms.includes(symptom);

                      return (
                        <button
                          key={symptom}
                          type="button"
                          onClick={() =>
                            handleSymptomChange(symptom)
                          }
                          className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
                            selected
                              ? "border-teal-600 bg-teal-50 text-teal-700"
                              : "border-slate-200 text-slate-600 hover:border-teal-300 hover:bg-teal-50/50"
                          }`}
                        >
                          {selected && (
                            <FiCheckCircle className="mr-1 inline" />
                          )}
                          {symptom}
                        </button>
                      );
                    })}
                  </div>

                  <p className="mt-3 text-xs text-slate-500">
                    You can select more than one symptom.
                  </p>
                </div>

                {/* Step 2: Detailed Questions */}
                {symptoms.length > 0 && (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-base font-semibold text-slate-800">
                        2. Tell us more about how you feel
                      </label>

                      <p className="mt-2 text-sm text-slate-500">
                        Additional questions are shown for the
                        symptoms you selected.
                      </p>
                    </div>

                    {symptoms.map((symptom) => {
                      const questions =
                        followUpQuestions[symptom] || [];

                      if (questions.length === 0) return null;

                      return (
                        <div
                          key={symptom}
                          className="rounded-2xl border border-teal-100 bg-teal-50/40 p-5"
                        >
                          <h3 className="mb-5 font-bold text-teal-800">
                            {symptom} Details
                          </h3>

                          <div className="space-y-5">
                            {questions.map((question) => (
                              <div key={question.key}>
                                <label className="mb-3 block text-sm font-semibold text-slate-700">
                                  {question.label}
                                </label>

                                {renderFollowUpQuestion(question)}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Step 3: Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="mb-3 block text-base font-semibold text-slate-800"
                  >
                    3. Describe anything else you are experiencing
                  </label>

                  <textarea
                    id="description"
                    rows="4"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                      setSubmitted(false);
                      setAssessment(null);
                    }}
                    placeholder="Share any additional details about your health concern..."
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm leading-6 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                {/* Step 4: Duration */}
                <div>
                  <label
                    htmlFor="duration"
                    className="mb-3 block text-base font-semibold text-slate-800"
                  >
                    4. How long have you experienced these symptoms?
                  </label>

                  <div className="relative">
                    <FiClock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                    <select
                      id="duration"
                      value={duration}
                      onChange={(e) => {
                        setDuration(e.target.value);
                        setSubmitted(false);
                        setAssessment(null);
                      }}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-11 py-3.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    >
                      <option value="Today">Started today</option>
                      <option value="1–3 days">1–3 days</option>
                      <option value="4–7 days">4–7 days</option>
                      <option value="More than a week">
                        More than a week
                      </option>
                      <option value="Comes and goes">
                        Comes and goes
                      </option>
                    </select>
                  </div>
                </div>

                {/* Step 5: Severity */}
                <div>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <label
                      htmlFor="severity"
                      className="text-base font-semibold text-slate-800"
                    >
                      5. How severe does it feel?
                    </label>

                    <span className="rounded-lg bg-teal-50 px-3 py-1.5 text-sm font-bold text-teal-700">
                      {severity}/10
                    </span>
                  </div>

                  <input
                    id="severity"
                    type="range"
                    min="1"
                    max="10"
                    value={severity}
                    onChange={(e) => {
                      setSeverity(Number(e.target.value));
                      setSubmitted(false);
                      setAssessment(null);
                    }}
                    className="w-full cursor-pointer accent-teal-600"
                  />

                  <div className="mt-2 flex justify-between text-xs text-slate-500">
                    <span>Less severe</span>
                    <span>Very severe</span>
                  </div>
                </div>

                {/* Emergency Warning Signs */}
                <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                  <div className="flex items-center gap-2 text-red-700">
                    <FiAlertCircle size={21} />

                    <h3 className="font-bold">
                      Important: Emergency Warning Signs
                    </h3>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-red-800">
                    Are you currently experiencing any of these
                    warning signs? Select all that apply.
                  </p>

                  <div className="mt-4 space-y-3">
                    {emergencyOptions.map((sign) => (
                      <label
                        key={sign}
                        className="flex cursor-pointer items-start gap-3 text-sm text-red-900"
                      >
                        <input
                          type="checkbox"
                          checked={emergencySigns.includes(sign)}
                          onChange={() =>
                            handleEmergencyChange(sign)
                          }
                          className="mt-0.5 accent-red-600"
                        />

                        {sign}
                      </label>
                    ))}
                  </div>

                  <p className="mt-4 text-xs leading-5 text-red-700">
                    If you have any of these warning signs,
                    seek emergency medical care immediately.
                    Do not wait for this form to assess your condition.
                  </p>
                </div>

                {/* Error */}
                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-4 font-semibold text-white transition hover:bg-teal-700"
                >
                  Submit & View Health Assessment
                  <FiArrowRight />
                </button>
              </form>

              {/* Assessment Results */}
              {submitted && assessment && (
                <div
                  id="assessment-result"
                  aria-live="polite"
                  className="mt-10 space-y-6 scroll-mt-24"
                >

                  {/* Result Heading */}
                  <div className="rounded-2xl border border-teal-200 bg-teal-50 p-5">
                    <div className="flex items-start gap-3">
                      <FiCheckCircle
                        className="mt-1 shrink-0 text-teal-700"
                        size={25}
                      />

                      <div>
                        <h2 className="text-xl font-bold text-teal-900">
                          Your Health Assessment
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-teal-800">
                          We have reviewed the information you
                          entered and prepared general guidance
                          for your next step.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Symptoms Summary */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <h3 className="font-bold text-slate-900">
                      Your Submitted Information
                    </h3>

                    <div className="mt-4 space-y-3 text-sm">
                      <p>
                        <span className="font-semibold">
                          Symptoms:
                        </span>{" "}
                        {assessment.symptoms || "Not specified"}
                      </p>

                      <p>
                        <span className="font-semibold">
                          Duration:
                        </span>{" "}
                        {assessment.duration}
                      </p>

                      <p>
                        <span className="font-semibold">
                          Severity:
                        </span>{" "}
                        {assessment.severity}/10
                      </p>

                      {assessment.description && (
                        <p>
                          <span className="font-semibold">
                            Additional details:
                          </span>{" "}
                          {assessment.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Possible Explanations */}
                  <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                    <div className="flex items-center gap-2 text-blue-800">
                      <FiInfo size={22} />

                      <h3 className="text-lg font-bold">
                        What Could Be Associated With Your Symptoms?
                      </h3>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-blue-700">
                      These are general possibilities, not a
                      diagnosis or confirmation of a disease.
                    </p>

                    <div className="mt-5 space-y-4">
                      {assessment.explanationList.map((item) => (
                        <div
                          key={item.symptom}
                          className="rounded-xl bg-white p-4"
                        >
                          <h4 className="font-semibold text-slate-800">
                            {item.symptom}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {item.explanation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Urgency */}
                  <div
                    className={`rounded-2xl border p-5 ${
                      assessment.urgency === "emergency"
                        ? "border-red-300 bg-red-50"
                        : assessment.urgency === "prompt"
                        ? "border-amber-300 bg-amber-50"
                        : "border-green-200 bg-green-50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <FiAlertCircle
                        size={22}
                        className={
                          assessment.urgency === "emergency"
                            ? "text-red-700"
                            : assessment.urgency === "prompt"
                            ? "text-amber-700"
                            : "text-green-700"
                        }
                      />

                      <h3 className="font-bold text-slate-900">
                        {assessment.urgencyTitle}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {assessment.urgencyDescription}
                    </p>

                    {assessment.urgency === "emergency" && (
                      <p className="mt-3 rounded-xl bg-white p-3 text-sm font-semibold text-red-700">
                        Please contact your local emergency
                        service or go to the nearest emergency
                        department now. Do not continue to
                        routine doctor booking.
                      </p>
                    )}
                  </div>

                  {/* Recommended Doctor */}
                  {assessment.urgency !== "emergency" && (
                    <>
                      <div className="rounded-2xl border border-teal-200 bg-white p-5">
                        <div className="flex items-center gap-2 text-teal-700">
                          <FiUser size={23} />

                          <h3 className="text-lg font-bold text-slate-900">
                            Recommended Doctor
                          </h3>
                        </div>

                        <div className="mt-5 rounded-xl bg-teal-50 p-5">
                          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                            Suggested first point of care
                          </p>

                          <h4 className="mt-2 text-2xl font-bold text-teal-900">
                            {assessment.primarySpecialty}
                          </h4>

                          <p className="mt-3 text-sm leading-6 text-slate-700">
                            {assessment.primaryReason}
                          </p>
                        </div>

                        {assessment.additionalSpecialists.length > 0 && (
                          <div className="mt-5">
                            <h4 className="font-semibold text-slate-800">
                              Other specialists that may be considered
                            </h4>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                              A clinician can decide whether a
                              specialist referral is appropriate.
                            </p>

                            <div className="mt-3 space-y-3">
                              {assessment.additionalSpecialists.map(
                                (specialist) => (
                                  <div
                                    key={specialist.name}
                                    className="rounded-xl border border-slate-200 p-4"
                                  >
                                    <h5 className="font-semibold text-slate-800">
                                      {specialist.name}
                                    </h5>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                      {specialist.reason}
                                    </p>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Booking Action */}
                      <div className="rounded-2xl bg-teal-700 p-6 text-white">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                            <FiCalendar size={25} />
                          </div>

                          <div>
                            <h3 className="text-lg font-bold">
                              Find a Doctor
                            </h3>

                            <p className="mt-1 text-sm text-teal-100">
                              Continue to the doctor directory
                              and choose an available doctor.
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={handleFindDoctors}
                          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 font-semibold text-teal-800 transition hover:bg-teal-50"
                        >
                          Find Recommended Doctors
                          <FiArrowRight />
                        </button>
                      </div>
                    </>
                  )}

                  {/* Start Again */}
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    <FiRefreshCw />
                    Start a New Assessment
                  </button>

                </div>
              )}
            </div>
          </div>

          {/* Information Panel */}
          <div className="space-y-5">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <FiHeart size={25} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                Your Wellbeing Matters
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Understanding your symptoms is a starting point
                for seeking appropriate healthcare support.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <div className="flex items-center gap-2 text-blue-800">
                <FiInfo size={21} />

                <h3 className="font-bold">
                  About Assessment
                </h3>
              </div>

              <p className="mt-3 text-sm leading-7 text-blue-900">
                CareBridge uses your selected symptoms to show
                general information and suggest an initial
                healthcare professional. It cannot confirm a
                disease or replace a medical examination.
              </p>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <div className="flex items-center gap-2 text-red-700">
                <FiAlertCircle size={21} />

                <h3 className="font-bold">
                  Emergency Support
                </h3>
              </div>

              <p className="mt-3 text-sm leading-7 text-red-800">
                For severe chest pain, difficulty breathing,
                signs of stroke, fainting or sudden extremely
                severe headache, seek emergency medical help
                immediately.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2 text-teal-700">
                <FiShield size={21} />

                <h3 className="font-bold text-slate-900">
                  Privacy Reminder
                </h3>
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Avoid entering unnecessary personal or highly
                sensitive information. Secure storage will be
                implemented during the Backend stage.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default HealthChecker;
