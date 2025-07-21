import { useState } from 'react';
import { Briefcase, GraduationCap, Chrome } from 'lucide-react';

export default function LoginPage() {
  const [role, setRole] = useState('student'); // 'student' or 'startup'

  const activeTabClass = 'border-indigo-600 text-indigo-600';
  const inactiveTabClass = 'border-transparent text-slate-500 hover:text-slate-700';

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Skill-to-Startup Matcher 🚀</h1>
          <p className="mt-2 text-slate-600">Find your next opportunity or talent.</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          {/* Role Selection Tabs */}
          <div className="grid grid-cols-2 gap-2 border-b border-slate-200">
            <button
              onClick={() => setRole('student')}
              className={`flex items-center justify-center gap-2 border-b-2 p-3 font-semibold transition ${role === 'student' ? activeTabClass : inactiveTabClass}`}
            >
              <GraduationCap size={18} />
              Student
            </button>
            <button
              onClick={() => setRole('startup')}
              className={`flex items-center justify-center gap-2 border-b-2 p-3 font-semibold transition ${role === 'startup' ? activeTabClass : inactiveTabClass}`}
            >
              <Briefcase size={18} />
              Startup
            </button>
          </div>

          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••••"
                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign In with Email
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-slate-300"></div>
            <span className="mx-4 flex-shrink text-sm text-slate-500">OR</span>
            <div className="flex-grow border-t border-slate-300"></div>
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
          >
            <Chrome size={16} />
            Sign In with Google
          </button>
        </div>
        <p className="text-center text-sm text-slate-500">
          Don't have an account?{' '}
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Sign Up</a>
        </p>
      </div>
    </div>
  );
}