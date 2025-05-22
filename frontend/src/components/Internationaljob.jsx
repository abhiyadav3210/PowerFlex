import React from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

const fitnessVideos = [
  {
    id: 1,
    title: 'Full Body Home Workout',
    url: 'https://www.youtube.com/embed/UBMk30rjy0o',
  },
  {
    id: 2,
    title: '15 Min Fat Burning Workout',
    url: 'https://www.youtube.com/embed/ml6cT4AZdqI',
  },
  {
    id: 3,
    title: '30 Min Full Body Stretch',
    url: 'https://www.youtube.com/embed/qULTwquOuT4',
  },
  {
    id: 4,
    title: 'HIIT Workout for Beginners',
    url: 'https://www.youtube.com/embed/k-8x0_5c2a4',
  },
  {
    id: 5,
    title: 'Beginner Ab Workout',
    url: 'https://www.youtube.com/embed/1f8yoFFdkcY',
  },
  {
    id: 6,
    title: 'Mobility Routine',
    url: 'https://www.youtube.com/embed/PgkZf6jVdVg',
  },
];

const Internationaljob = () => {
  return (
    <div>
<Navbar/>
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Free Fitness Training Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {fitnessVideos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2 text-center">{video.title}</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="215"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default Internationaljob;
