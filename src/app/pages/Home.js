import NavBar from '../components/NavBar';
import NowPlaying from '../components/NowPlaying';
import Queue from '../components/Queue';
import Singles from '../components/Singles';

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <NavBar />
      <NowPlaying />
      <Queue />
      <Singles />
    </div>
  );
}
