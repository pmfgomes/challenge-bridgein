import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen justify-top items-center bg-gray-100 dark:bg-gray-900 text-center px-4 sm:px-6 lg:px-8">
      <div className="py-16">
        <h1 className="text-9xl font-extrabold text-gray-400 dark:text-gray-600">404</h1>
        <h2 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-100">Page Not Found</h2>
        <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          Oops! The page you are looking for does not exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="w-full sm:w-auto text-md font-bold">
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}