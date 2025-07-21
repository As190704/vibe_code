import { Users, BarChart2, CheckCircle, XCircle } from 'lucide-react';

export default function AdminPanel() {
  const metrics = [
    { title: "Total Users", value: "452", icon: Users },
    { title: "Total Matches Made", value: "1,203", icon: CheckCircle },
    { title: "Match Success %", value: "78%", icon: BarChart2 },
  ];

  const users = [
    { name: "Riya Sharma", email: "riya@example.com", role: "Student", joined: "2025-07-20", status: "Active" },
    { name: "Acme Inc.", email: "contact@acme.com", role: "Startup", joined: "2025-07-19", status: "Active" },
    { name: "Ben Carter", email: "ben@example.com", role: "Student", joined: "2025-07-17", status: "Inactive" },
    { name: "Innovate LLC", email: "hello@innovate.io", role: "Startup", joined: "2025-07-16", status: "Active" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">📊 Admin Dashboard</h1>
          <p className="mt-1 text-slate-600">Platform overview and user management.</p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <item.icon className="h-6 w-6 text-slate-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-slate-500">{item.title}</dt>
                    <dd className="text-2xl font-bold text-slate-900">{item.value}</dd>
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Users Table */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="p-6">
             <h2 className="text-xl font-semibold text-slate-800">User Management</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Role</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Joined Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
                  <th scope="col" className="relative px-6 py-3"><span className="sr-only">Edit</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {users.map((user) => (
                  <tr key={user.email}>
                    <td className="whitespace-nowrap px-6 py-4">
                        <div className="font-medium text-slate-900">{user.name}</div>
                        <div className="text-slate-500">{user.email}</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-slate-500">{user.role}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-slate-500">{user.joined}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                          user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                        {user.status === 'Active' ? <CheckCircle size={12}/> : <XCircle size={12}/>}
                        {user.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}