'use client';
import Container from '@/components/Container';
import Link from 'next/link';
import React, { useState } from 'react';

const navItems = [
  { label: 'DASHBOARD', id: 'dashboard' },
  { label: 'ORDERS', id: 'orders' },
  { label: 'DOWNLOADS', id: 'downloads' },
  { label: 'ADDRESSES', id: 'addresses' },
  { label: 'ACCOUNT DETAILS', id: 'account-details' },
  { label: 'WISHLIST', id: 'wishlist' },
  { label: 'LOGOUT', id: 'logout' },
];

export default function layout({ children }) {
  const [active, setActive] = useState('dashboard');
  return (
    <div className="h-dvh bg-white py-20">
      <Container>
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-10 uppercase">
          My Account
        </h1>
        <div className="flex gap-16">
          {' '}
          <nav className="w-1/5 shrink-0">
            <ul className="space-y-4">
              {navItems.map(item => (
                <li key={item.id}>
                  <Link
                    onClick={() => setActive(item.id)}
                    href={`dashboard/${item.id}`}
                    className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-150 text-left
                      ${
                        active === item.id
                          ? 'text-red-600 border-b-2 border-red-600 pb-0.5 '
                          : 'text-gray-500 hover:text-gray-900'
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex-1"> {children}</div>
        </div>
      </Container>
    </div>
  );
}
