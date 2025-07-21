import { Star, MessageSquare, Filter } from 'lucide-react';

// Reusable MatchCard component (can be in its own file)
function MatchCard({ match }) {
  return (
    <div className="flex flex-col space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 font-semibold text-slate-500">
            {match.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <h3 className="text-xl font-bold text-slate-800">{match.name}</h3>
        </div>
        <div className="w-full sm:w-auto">
          <span className="text-sm font-medium text-slate-500">Match Score</span>
          <div className="mt-1 flex items-center gap-2">
            <div className="h-2 w-full rounded-full bg-slate-200 sm:w-32">
              <div className="h-2 rounded-full bg-green-500" style={{ width: `${match.matchScore}%` }}></div>
            </div>
            <span className="font-semibold text-slate-700">{match.matchScore}%</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-sm font-semibold text-slate-600">Top Skills</h4>
        <div className="flex flex-wrap gap-2">
          {match.skills.map((skill) => (
            <span key={skill} className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">{skill}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
        <button className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:w-auto">
          <Star size={16} />
          Shortlist
        </button>
        <button className="flex w-full items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 sm:w-auto">
          <MessageSquare size={16} />
          Message
        </button>
      </div>
    </div>
  );
}


// Main Page Component
export default function MatchResultsPage() {
  const matches = [
    { id: 1, name: "Riya Sharma", matchScore: 95, skills: ["React", "TypeScript", "Next.js"] },
    { id: 2, name: "Ben Carter", matchScore: 88, skills: ["React", "JavaScript", "CSS"] },
    { id: 3, name: "Chloe Kim", matchScore: 82, skills: ["Python", "Flask", "SQL"] },
    { id: 4, name: "David Lee", matchScore: 79, skills: ["UI/UX", "Figma", "User Research"] },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Matches for "Frontend Developer Intern"</h1>
          <p className="mt-1 text-slate-600">Showing the top 5 candidates based on your requirements.</p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap items-center gap-4">
            <h3 className="text-sm font-semibold text-slate-800 flex items-center gap-2"><Filter size={16} /> Filter by:</h3>
            <select className="rounded-md border-slate-300 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option>Role</option>
            </select>
            <select className="rounded-md border-slate-300 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option>Tech Skill</option>
            </select>
             <select className="rounded-md border-slate-300 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option>Availability</option>
            </select>
        </div>

        {/* Match Cards */}
        <div className="grid grid-cols-1 gap-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </div>
  );
}