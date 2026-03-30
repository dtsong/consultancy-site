"use client";

import { useState } from "react";
import {
  questions,
  calculateScores,
  getRecommendedUseCases,
  getScoreTier,
  type AssessmentScores,
  type UseCase,
} from "@/lib/assessment-data";
import { submitLead } from "@/app/actions/submit-lead";

type Phase = "intro" | "questions" | "results";

export function AssessmentFlow() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [scores, setScores] = useState<AssessmentScores | null>(null);
  const [recommendations, setRecommendations] = useState<UseCase[]>([]);

  function handleStart() {
    setPhase("questions");
  }

  function handleAnswer(questionId: string, value: string | string[]) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function handleNext() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Calculate results
      const calculated = calculateScores(answers);
      const industry = (answers.industry as string) || "other";
      const recs = getRecommendedUseCases(industry, calculated);
      setScores(calculated);
      setRecommendations(recs);
      setPhase("results");
    }
  }

  function handleBack() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }

  if (phase === "intro") {
    return <IntroScreen onStart={handleStart} />;
  }

  if (phase === "questions") {
    const q = questions[currentQuestion];
    const answer = answers[q.id];
    const canProceed = q.type === "multi"
      ? Array.isArray(answer) && answer.length > 0
      : !!answer;

    return (
      <QuestionScreen
        question={q}
        answer={answer}
        onAnswer={(val) => handleAnswer(q.id, val)}
        onNext={handleNext}
        onBack={handleBack}
        canProceed={canProceed}
        current={currentQuestion + 1}
        total={questions.length}
        isFirst={currentQuestion === 0}
      />
    );
  }

  return (
    <ResultsScreen
      scores={scores!}
      recommendations={recommendations}
      answers={answers}
    />
  );
}

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-2 text-sm font-medium text-teal mb-8">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="8" cy="8" r="6" />
          <path d="M8 5v3l2 2" />
        </svg>
        Takes about 4 minutes
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy leading-tight">
        Discover Your AI Opportunities
      </h1>
      <p className="text-lg text-slate-mid mt-6 max-w-xl mx-auto leading-relaxed">
        Answer 8 questions about your organization and get personalized AI use
        case recommendations tailored to your industry and regulatory environment.
      </p>
      <div className="mt-10">
        <button
          onClick={onStart}
          className="bg-teal text-white font-heading font-semibold py-4 px-8 rounded-lg hover:bg-teal-dark transition-colors text-lg cursor-pointer"
        >
          Start Assessment
        </button>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {[
          { title: "Industry-Specific", desc: "Recommendations aligned to your regulatory frameworks and compliance requirements." },
          { title: "Actionable Results", desc: "Get specific AI use cases with complexity estimates and implementation timelines." },
          { title: "No Commitment", desc: "Free assessment with immediate results. No email required to see your score." },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-lg p-6 border border-gray-100">
            <h3 className="font-heading font-semibold text-navy">{item.title}</h3>
            <p className="text-sm text-slate-mid mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuestionScreen({
  question,
  answer,
  onAnswer,
  onNext,
  onBack,
  canProceed,
  current,
  total,
  isFirst,
}: {
  question: typeof questions[number];
  answer: string | string[] | undefined;
  onAnswer: (val: string | string[]) => void;
  onNext: () => void;
  onBack: () => void;
  canProceed: boolean;
  current: number;
  total: number;
  isFirst: boolean;
}) {
  const groupLabel = question.group === "context" ? "Your Context" : "Your AI Readiness";
  const progress = (current / total) * 100;

  function handleSelect(value: string) {
    if (question.type === "multi") {
      const current = Array.isArray(answer) ? answer : [];
      if (current.includes(value)) {
        onAnswer(current.filter((v) => v !== value));
      } else {
        onAnswer([...current, value]);
      }
    } else {
      onAnswer(value);
    }
  }

  const selectedValues = Array.isArray(answer) ? answer : answer ? [answer] : [];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-slate-mid mb-2">
          <span className="font-medium text-teal">{groupLabel}</span>
          <span>Question {current} of {total}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy">
        {question.question}
      </h2>
      {question.subtitle && (
        <p className="text-slate-mid mt-2">{question.subtitle}</p>
      )}

      {/* Options */}
      <div className="mt-8 space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedValues.includes(option.value);
          return (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`w-full text-left px-5 py-4 rounded-lg border-2 transition-all cursor-pointer ${
                isSelected
                  ? "border-teal bg-teal/5 text-navy"
                  : "border-gray-200 bg-white text-slate-dark hover:border-teal/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex-shrink-0 w-5 h-5 rounded-${question.type === "multi" ? "sm" : "full"} border-2 flex items-center justify-center ${
                    isSelected ? "border-teal bg-teal" : "border-gray-300"
                  }`}
                >
                  {isSelected && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className="font-medium">{option.label}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        {!isFirst ? (
          <button
            onClick={onBack}
            className="text-slate-mid hover:text-navy font-medium transition-colors cursor-pointer"
          >
            &larr; Back
          </button>
        ) : (
          <div />
        )}
        <button
          onClick={onNext}
          disabled={!canProceed}
          className="bg-teal text-white font-heading font-semibold py-3 px-8 rounded-lg hover:bg-teal-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          {current === total ? "See Results" : "Next"}
        </button>
      </div>
    </div>
  );
}

function ResultsScreen({
  scores,
  recommendations,
  answers,
}: {
  scores: AssessmentScores;
  recommendations: UseCase[];
  answers: Record<string, string | string[]>;
}) {
  const [showCapture, setShowCapture] = useState(false);
  const [captured, setCaptured] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [captureData, setCaptureData] = useState({ name: "", email: "", company: "" });

  const overallTier = getScoreTier(scores.overall);

  const dimensions = [
    { label: "Data Readiness", score: scores.dataReadiness, tier: getScoreTier(scores.dataReadiness) },
    { label: "AI Maturity", score: scores.aiMaturity, tier: getScoreTier(scores.aiMaturity) },
    { label: "Compliance Posture", score: scores.compliancePosture, tier: getScoreTier(scores.compliancePosture) },
    { label: "Organizational Readiness", score: scores.orgReadiness, tier: getScoreTier(scores.orgReadiness) },
  ];

  async function handleCapture(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    await submitLead({
      name: captureData.name,
      email: captureData.email,
      company: captureData.company || undefined,
      source: "ASSESSMENT",
      metadata: {
        answers,
        scores,
        recommendations: recommendations.map((r) => r.id),
      },
    });

    setSubmitting(false);
    setCaptured(true);
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Overall Score */}
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-teal uppercase tracking-widest mb-4">
          Your AI Readiness Score
        </p>
        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-4 border-teal bg-teal/5">
          <span className="text-4xl font-heading font-bold text-navy">{scores.overall}</span>
        </div>
        <h2 className="text-2xl font-heading font-bold text-navy mt-4">
          {overallTier.label}
        </h2>
        <p className="text-slate-mid mt-2 max-w-lg mx-auto">{overallTier.description}</p>
      </div>

      {/* Dimension Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {dimensions.map((dim) => (
          <div key={dim.label} className="bg-white rounded-lg border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-navy">{dim.label}</span>
              <span className="text-sm font-bold text-teal">{dim.score}/100</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-teal rounded-full transition-all duration-500"
                style={{ width: `${dim.score}%` }}
              />
            </div>
            <p className="text-xs text-slate-mid">{dim.tier.label} — {dim.tier.description}</p>
          </div>
        ))}
      </div>

      {/* Recommended Use Cases */}
      <div className="mb-12">
        <h3 className="text-xl font-heading font-bold text-navy mb-6">
          Your Top AI Opportunities
        </h3>
        <div className="space-y-4">
          {recommendations.map((uc, i) => (
            <div key={uc.id} className="bg-white rounded-lg border border-gray-100 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center text-teal font-heading font-bold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-heading font-semibold text-navy text-lg">{uc.title}</h4>
                  <p className="text-slate-mid mt-2 text-sm leading-relaxed">{uc.description}</p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="inline-flex items-center gap-1 text-xs font-medium bg-gray-100 text-slate-dark rounded-full px-3 py-1">
                      Complexity: {uc.complexity}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium bg-gray-100 text-slate-dark rounded-full px-3 py-1">
                      Timeline: {uc.timeline}
                    </span>
                  </div>
                  {uc.impact && (
                    <p className="text-sm text-teal-dark mt-3 font-medium">{uc.impact}</p>
                  )}
                  {uc.regulatoryNote && (
                    <p className="text-xs text-slate-mid mt-2 italic">{uc.regulatoryNote}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy rounded-2xl p-8 md:p-10 text-center">
        {captured ? (
          <div>
            <svg className="w-12 h-12 mx-auto text-teal" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={2}>
              <circle cx="24" cy="24" r="20" />
              <path d="M15 25l6 6 12-12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="text-xl font-heading font-semibold text-white mt-4">
              We&apos;ll be in touch!
            </h3>
            <p className="text-slate-light mt-2">
              A Klearpath advisor will reach out within one business day to discuss your results.
            </p>
          </div>
        ) : showCapture ? (
          <form onSubmit={handleCapture} className="max-w-md mx-auto">
            <h3 className="text-xl font-heading font-semibold text-white mb-6">
              Get Your Full Report
            </h3>
            <div className="space-y-4 text-left">
              <input
                type="text"
                placeholder="Your name"
                required
                value={captureData.name}
                onChange={(e) => setCaptureData((p) => ({ ...p, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-light focus:outline-none focus:ring-2 focus:ring-teal"
              />
              <input
                type="email"
                placeholder="Work email"
                required
                value={captureData.email}
                onChange={(e) => setCaptureData((p) => ({ ...p, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-light focus:outline-none focus:ring-2 focus:ring-teal"
              />
              <input
                type="text"
                placeholder="Company (optional)"
                value={captureData.company}
                onChange={(e) => setCaptureData((p) => ({ ...p, company: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-light focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-6 bg-teal text-white font-heading font-semibold py-3 px-6 rounded-lg hover:bg-teal-dark transition-colors disabled:opacity-60 cursor-pointer"
            >
              {submitting ? "Sending..." : "Send My Full Report"}
            </button>
            <p className="text-xs text-slate-light mt-3">
              We&apos;ll email your detailed report with implementation roadmap and ROI estimates.
            </p>
          </form>
        ) : (
          <div>
            <h3 className="text-2xl font-heading font-bold text-white">
              Ready to act on these insights?
            </h3>
            <p className="text-slate-light mt-3 max-w-lg mx-auto">
              Get a detailed report with implementation roadmaps, ROI estimates, and
              a personalized strategy session with a Klearpath advisor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                onClick={() => setShowCapture(true)}
                className="bg-teal text-white font-heading font-semibold py-3 px-8 rounded-lg hover:bg-teal-dark transition-colors cursor-pointer"
              >
                Get Full Report
              </button>
              <a
                href="/contact"
                className="border border-white/30 text-white font-heading font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
              >
                Book a Strategy Session
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
