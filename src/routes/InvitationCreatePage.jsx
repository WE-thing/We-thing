import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const [formData, setFormData] = useState({
    inviteDescription: "",
    weddingDateTime: "",
    locationName: "",
    locationAddress: "",
    locationContact: "",
    galleryImageUrl: "",
    themeId: "",
    mainPhoto: "",
    person1: "",
    person2: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // galleryImageUrl을 쉼표로 구분된 문자열에서 배열로 변환
    const updatedFormData = {
      ...formData,
      themeId: parseInt(formData.themeId),
      galleryImageUrl: formData.galleryImageUrl
        .split(",")
        .map((url) => url.trim()),
    };

    axios
      .post("/api/invitations", updatedFormData)
      .then((response) => {
        alert(`Invitation created successfully with ID : ${response.data._id}`);
        navigate(`/invitations/${response.data._id}`);
      })
      .catch((error) => {
        alert("Error creating invitation");
        console.error("Error creating invitation:", updatedFormData);
      });
  };

  return (
    <div className="max-w-md bg-white p-10 mx-auto shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-5">Create Invitation</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            type="text"
            name="inviteDescription"
            value={formData.inviteDescription}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Wedding DateTime (YYYYMMDDHHMM)
          </label>
          <input
            type="text"
            name="weddingDateTime"
            value={formData.weddingDateTime}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location Name
          </label>
          <input
            type="text"
            name="locationName"
            value={formData.locationName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location Address
          </label>
          <input
            type="text"
            name="locationAddress"
            value={formData.locationAddress}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location Contact
          </label>
          <input
            type="text"
            name="locationContact"
            value={formData.locationContact}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gallery Image URLs (comma separated)
          </label>
          <input
            type="text"
            name="galleryImageUrl"
            value={formData.galleryImageUrl}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Theme ID
          </label>
          <input
            type="text"
            name="themeId"
            value={formData.themeId}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Main Photo URL
          </label>
          <input
            type="text"
            name="mainPhoto"
            value={formData.mainPhoto}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            person1(bride)
          </label>
          <input
            type="text"
            name="person1"
            value={formData.person1}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            person2(groom)
          </label>
          <input
            type="text"
            name="person2"
            value={formData.person2}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-gray bg-theme1-primary hover:bg-theme1-pink hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreatePage;
