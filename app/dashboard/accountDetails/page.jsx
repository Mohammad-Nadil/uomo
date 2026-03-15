"use client";

import { useState } from "react";
import CustomInp from "@/components/CustomInp";

export default function AccountDetailsPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    displayName: "",
 
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Saving changes...", form);
  };

  return (
    <div className="w-full">

  
      <div className="flex gap-4 mb-4">
        <CustomInp
          label="First Name"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
        <CustomInp
          label="Last Name"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />
      </div>


      <div className="mb-4">
        <CustomInp
          label="Display Name"
          name="displayName"
          value={form.displayName}
          onChange={handleChange}
        />
      </div>

    
      <div className="mb-8">
        <CustomInp
          label="Email Address"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

  
      <p className="text-xs font-bold tracking-widest uppercase text-gray-900 mb-4">
        Password Change
      </p>

      <div className="mb-4">
        <CustomInp
          label="Current password (leave blank to leave unchanged)"
          type="password"
          name="currentPassword"
          value={form.currentPassword}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <CustomInp
          label="New password (leave blank to leave unchanged)"
          type="password"
          name="newPassword"
          value={form.newPassword}
          onChange={handleChange}
        />
      </div>

      <div className="mb-8">
        <CustomInp
          label="Confirm new password"
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
      </div>

    
      <button
        onClick={handleSubmit}
        className="bg-gray-900 text-white text-xs font-bold tracking-widest uppercase px-10 py-4 hover:bg-red-600 transition-colors duration-200"
      >
        Save Changes
      </button>

    </div>
  );
}
