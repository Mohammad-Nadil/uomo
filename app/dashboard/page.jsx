import React from 'react';

const page = () => {
  const username = 'alifn58';
  return (
    <div>
      <div className="">
      

        <div className="">
          <div className="flex-1 pt-0.5">
            <p className="text-sm text-gray-700 leading-relaxed">
              Hello <span className="font-bold text-gray-900">{username}</span>{' '}
              <span>(not</span>
              <span className="font-bold text-gray-900"> {username}?</span>{' '}
              <button className="text-gray-500 underline hover:text-red-600 transition-colors text-sm">
                Log out
              </button>
              <span className="text-gray-400">)</span>
            </p>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-xl">
              From your account dashboard you can view your{' '}
              <a
                href="#"
                className="underline text-gray-700 hover:text-red-600 transition-colors"
              >
                recent orders
              </a>
              , manage your{' '}
              <a
                href="#"
                className="underline text-gray-700 hover:text-red-600 transition-colors"
              >
                shipping and billing addresses
              </a>
              , and{' '}
              <a
                href="#"
                className="underline text-gray-700 hover:text-red-600 transition-colors"
              >
                edit your password and account details
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
