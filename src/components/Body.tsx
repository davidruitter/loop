import React from 'react';

function Body({ isLoggedIn, recordings }: { isLoggedIn: boolean, recordings: any[] }) {
  return (
    <div className="container mx-auto py-4 px-6">
      {isLoggedIn ? (
        <>
          <h1 className="text-2xl font-bold mb-4">My loops</h1>
          {recordings.length > 0 ? (
            <ul className="space-y-2">
              {recordings.map((recording) => (
                <li key={recording.id}>
                  <a href={`/recording/${recording.id}`} className="hover:text-blue-500">{recording.title}</a>
                </li>
              ))}
            </ul>
          ) : (
            <p>You have no loops yet.</p>
          )}
        </>
      ) : (
        <p>Please sign in to view your loops.</p>
      )}
    </div>
  );
}

export default Body;