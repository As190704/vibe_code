import { useState } from 'react';
import { Upload, Plus, Search } from 'lucide-react';

export default function StudentDashboard() {
  const [availability, setAvailability] = useState(15);
  const skills = ["React", "Python", "UI/UX", "Figma", "Node.js", "Analytics"];
  const interests = ["FinTech", "EdTech", "SaaS", "HealthTech", "AI"];

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-slate-900">Your Dashboard</h1>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <img
                src="https://placehold.co/100x100" // Placeholder for profile picture
                alt="Profile"
                className="mx-auto h-24 w-24 rounded-full"
              />
              <h2 className="mt-4 text-xl font-bold text-slate-800">Alex Chen</h2>
              <p className="text-slate-500">Stanford University</p>
              <p className="text-sm text-slate-500">Class of 2026</p>
              <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
                <Upload size={16} />
                Upload Resume
              </button>
            </div>
          </div>

          {/* Right Column: Skills, Interests, Availability */}
          <div className="space-y-8 lg:col-span-2">
            {/* Skills */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">My Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">{skill}</span>
                ))}
                <button className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-200">
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Interests */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">My Interests</h3>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {interests.map(interest => (
                  <label key={interest} className="flex items-center space-x-2">
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-slate-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold text-slate-900">Weekly Availability</h3>
                <span className="font-medium text-indigo-600">{availability} hours/week</span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                step="1"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-indigo-600"
              />
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500">
              <Search size={18} />
              See My Matches
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}