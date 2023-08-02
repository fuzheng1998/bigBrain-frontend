/**
 * @file This file is the home page of the application.
 */
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex h-screen">
      <div className="bg-amber-200 basis-1/2 flex justify-center items-center">
        <Link to="/admin"> admin? click here</Link>
      </div>
      <div className="bg-amber-700 basis-1/2 flex justify-center items-center">
        <Link to="/join">
          player? click here
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
