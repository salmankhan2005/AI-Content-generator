import { UserProfile } from '@clerk/nextjs';
import React from 'react';

function Settings() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-5 sm:p-10">
      <div className="w-full max-w-4xl">
        <UserProfile routing="hash" />
      </div>
    </div>
  );
}

export default Settings;
