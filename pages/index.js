import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Welcome to Brawlman</h1>
        <p className="mt-4 text-lg">Manage your Blood Bowl-style teams and simulate matches.</p>
        <div className="mt-6">
          <a href="/teams" className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            View Teams
          </a>
          <a href="/matches" className="ml-4 px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
            Simulate Matches
          </a>
        </div>
      </div>
    </Layout>
  );
}