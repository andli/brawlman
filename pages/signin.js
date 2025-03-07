import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  if (!providers) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Sign In</h1>
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="mb-4">
            <button
              onClick={() => signIn(provider.id)}
              className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
