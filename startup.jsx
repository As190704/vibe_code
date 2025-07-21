import { Eye } from 'lucide-react';

export default function StartupDashboard() {
  const currentGigs = [
    { title: "UI/UX Design Intern", tech: ["Figma", "Webflow"], matches: 12 },
    { title: "Backend Developer", tech: ["Node.js", "AWS", "PostgreSQL"], matches: 8 },
    { title: "Marketing Associate", tech: ["HubSpot", "SEO"], matches: 21 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Startup Dashboard</h1>
          <p className="mt-1 text-slate-600">Create and manage your startup gigs.</p>
        </div>

        {/* Create Gig Form */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">✍️ Create a New Gig</h2>
          <form className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="role-title" className="block text-sm font-medium text-slate-700">Role Title</label>
              <input type="text" id="role-title" placeholder="e.g., Frontend Developer Intern" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="tech-stack" className="block text-sm font-medium text-slate-700">Tech Stack (comma-separated)</label>
              <input type="text" id="tech-stack" placeholder="e.g., React, TypeScript, Tailwind CSS" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-slate-700">Description</label>
              <textarea id="description" rows="4" placeholder="Describe the role and responsibilities..." className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
            </div>
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-slate-700">Duration</label>
              <input type="text" id="duration" placeholder="e.g., 3 Months" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label htmlFor="credits" className="block text-sm font-medium text-slate-700">Academic Credits (optional)</label>
              <input type="text" id="credits" placeholder="e.g., 2 Credits" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                Post Gig
              </button>
            </div>
          </form>
        </div>

        {/* Current Gigs List */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">📂 Current Gigs Posted</h2>
          <div className="mt-4 space-y-4">
            {currentGigs.map((gig, index) => (
              <div key={index} className="flex flex-col items-start justify-between gap-4 rounded-lg border border-slate-200 p-4 sm:flex-row sm:items-center">
                <div className="flex-grow">
                  <h3 className="font-semibold text-slate-800">{gig.title}</h3>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {gig.tech.map(t => <span key={t} className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">{t}</span>)}
                  </div>
                </div>
                <button className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 sm:w-auto">
                  <Eye size={16} />
                  See {gig.matches} Matches
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}