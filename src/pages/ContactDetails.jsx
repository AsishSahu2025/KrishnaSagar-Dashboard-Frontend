
import React, { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

const ContactDetails = () => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const mobileNumber = localStorage.getItem("Mob");

    if (!mobileNumber) {
      setError("Mobile number not found in local storage.");
      setLoading(false);
      return;
    }

    const fetchContact = async () => {
      try {
        // const response = await axios.get(
        //   `http://192.168.31.104:8000/contact_info/${mobileNumber}/`
        // );

 const response = await axios.get(`${baseUrl}/contact_info/${mobileNumber}/`);

        setContact(response.data);
      } catch (err) {
        setError("Failed to fetch contact details.");
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

  if (error) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className=" mx-auto mt-12 p-6 bg-white rounded-xl shadow-lg ring-1 ring-indigo-100 w-[400px] h-70 text-center justify-center">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">Contact Details</h2>

      <div className="space-y-4 text-gray-700 ">
        <div className="flex items-center gap-3 ">
          <span className="font-semibold w-24">Name:</span>
          <span>{contact.name}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-semibold w-24">Mobile:</span>
          <span>{contact.mobile}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-semibold w-24">Email:</span>
          <span>{contact.email}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-semibold w-24">Address:</span>
          <span>{contact.address}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
