import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-9xl mb-4">404</h1>
        <h2 className="text-3xl mb-4">Page non trouvée</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Home size={20} />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
