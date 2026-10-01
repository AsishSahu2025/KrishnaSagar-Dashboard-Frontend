
import React, { useEffect, useState } from "react";
import axios from "axios";
import { mockContactDetails } from "../utils/mockData";
const baseUrl = import.meta.env.VITE_BASE_URL;

const ContactDetails = () => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const username = localStorage.getItem("Email") || localStorage.getItem("name") || "bariflolabs.deploy@gmail.com";
    const password = localStorage.getItem("password") || "Bariflo@2026";
    const mobileNumber = localStorage.getItem("Mob") || "9876543210";

    const fetchContact = async () => {
      try {
        const response = await axios.get(`${baseUrl}/contact_info/${mobileNumber}/`);
        if (response.data) {
          setContact({
            username: username,
            password: password,
            name: response.data.name || "Bariflo Labs Deploy",
            mobile: response.data.mobile || mobileNumber,
            email: response.data.email || username,
            address: response.data.address || mockContactDetails.address,
          });
        } else {
          setContact({
            username: username,
            password: password,
            name: "Bariflo Labs Deploy",
            mobile: mobileNumber,
            email: username,
            address: mockContactDetails.address,
          });
        }
      } catch (err) {
        console.warn("Using static contact details with login info:", err);
        setContact({
          username: username,
          password: password,
          name: "Bariflo Labs Deploy",
          mobile: mobileNumber,
          email: username,
          address: mockContactDetails.address,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-gray-500 text-lg">Loading contact details...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-12 p-6 bg-white rounded-xl shadow-lg ring-1 ring-indigo-100 w-[420px] text-center justify-center">
      <h2 className="text-2xl font-bold mb-6 text-indigo-600 border-b pb-2">Contact & Account Details</h2>

      <div className="space-y-4 text-gray-700 text-left px-2">
        <div className="flex items-center gap-3">
          <span className="font-semibold w-28 text-gray-900">Username:</span>
          <span className="text-blue-600 font-medium break-all">{contact.username}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-semibold w-28 text-gray-900">Password:</span>
          <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-800">{contact.password}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-semibold w-28 text-gray-900">Mobile:</span>
          <span>{contact.mobile}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-semibold w-28 text-gray-900">Email:</span>
          <span className="break-all">{contact.email}</span>
        </div>

        <div className="flex items-start gap-3">
          <span className="font-semibold w-28 text-gray-900">Address:</span>
          <span className="text-sm">{contact.address}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
