import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const ContactDetails = () => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const mobileNumber = localStorage.getItem("Mob");

    const fetchContact = async () => {
      if (!mobileNumber) {
        setError("Mobile number not found. Please sign in again.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `${baseUrl}/contact_info/${encodeURIComponent(mobileNumber)}/`
        );

        const data = response.data;

        setContact({
          name: data.name || "Not available",
          mobile: data.mobile ?? mobileNumber,
          email: data.email || "Not available",
          address: data.address || "Not available",
        });
      } catch (err) {
        console.error(
          "Failed to fetch contact details:",
          err.response?.data || err.message
        );

        setError("Unable to load contact details from the backend.");
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-gray-500 text-lg">
          Loading contact details...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto mt-12 p-6 text-center text-red-600">
        {error}
      </div>
    );
  }

  if (!contact) {
    return <p className="text-center mt-12">No contact details available.</p>;
  }


  return (
    <div className="mx-auto mt-12 p-6 bg-white rounded-xl shadow-lg ring-1 ring-indigo-100 w-full max-w-[420px] text-center">
      <h2 className="text-2xl font-bold mb-6 text-indigo-600 border-b border-indigo-500 pb-2">
        Contact Details
      </h2>

      <div className="grid grid-cols-[112px_minmax(0,1fr)] gap-x-3 gap-y-4 text-gray-700 text-left px-2">
        <span className="font-semibold text-gray-900">Name:</span>
        <span className="break-words">{contact.name}</span>

        <span className="font-semibold text-gray-900">Mobile:</span>
        <span className="break-words">{contact.mobile}</span>

        <span className="font-semibold text-gray-900">Email:</span>
        <span className="break-all">{contact.email}</span>

        <span className="font-semibold text-gray-900">Address:</span>
        <span className="text-sm leading-5 break-words">
          {contact.address}
        </span>
      </div>
    </div>
  );

};

export default ContactDetails;
