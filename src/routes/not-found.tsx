import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <main className="app-not-found">
      <title>Michael Levesque - Page Not Found</title>
      <h1>Page not found</h1>
      <Link to="/">Back to home</Link>
    </main>
  );
}