import React from 'react';
import { unstable_createResource } from 'react-cache';

function fetchUser(userId) {
  return new Promise(resolve =>
    setTimeout(() => resolve({ userId, name: 'mike', age: 23 }), 2000),
  );
}

const UserCache = unstable_createResource(fetchUser);

function Profile() {
  const user = UserCache.read(123);
  return (
    <div>
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
    </div>
  );
}
export default Profile;
