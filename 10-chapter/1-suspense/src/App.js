import React, { lazy, Suspense } from 'react';
import Loading from './Loading';
// import Profile from './Profile';

const VideoPlayer = lazy(() => import('./VideoPlayer'));

export default function App() {
  return (
    <div>
      <h1>suspense example</h1>
      <Suspense fallback={<Loading />}>
        <h3>watch video</h3>
        <VideoPlayer />
        {/* <Profile /> */}
      </Suspense>
    </div>
  );
}
