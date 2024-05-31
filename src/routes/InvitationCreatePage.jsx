import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImagePreview);

function CreatePage() {
  const [formData, setFormData] = useState({
    inviteDescription: "",
    weddingDateTime: "",
    locationName: "",
    locationAddress: "",
    locationContact: "",
    themeId: "",
    person1: "",
    person2: "",
  });
  const [mainPhoto, setMainPhoto] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert themeId to integer
    const updatedFormData = {
      ...formData,
      themeId: parseInt(formData.themeId),
    };

    // Handle file uploads for mainPhoto and galleryImages
    const mainPhotoFile = mainPhoto[0]?.file;
    const galleryImageFiles = galleryImages.map((fileItem) => fileItem.file);

    const formDataToSend = new FormData();
    formDataToSend.append(
      "inviteDescription",
      updatedFormData.inviteDescription
    );
    formDataToSend.append("weddingDateTime", updatedFormData.weddingDateTime);
    formDataToSend.append("locationName", updatedFormData.locationName);
    formDataToSend.append("locationAddress", updatedFormData.locationAddress);
    formDataToSend.append("locationContact", updatedFormData.locationContact);
    formDataToSend.append("themeId", updatedFormData.themeId);
    formDataToSend.append("person1", updatedFormData.person1);
    formDataToSend.append("person2", updatedFormData.person2);
    formDataToSend.append("mainPhoto", mainPhotoFile);
    galleryImageFiles.forEach((file, index) => {
      formDataToSend.append(`galleryImage${index}`, file);
    });

    try {
      const response = await axios.post("/api/invitations", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(`Invitation created successfully with ID: ${response.data._id}`);
      navigate(`/invitations/${response.data._id}`);
    } catch (error) {
      alert("Error creating invitation");
      console.error("Error creating invitation:", error);
    }
  };

  return (
    <div className="max-w-md bg-white p-10 mx-auto shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-5">Create Invitation</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="inviteDescription"
            value={formData.inviteDescription}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows="4"
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
            Main Photo
          </label>
          <FilePond
            files={mainPhoto}
            onupdatefiles={setMainPhoto}
            allowMultiple={false}
            acceptedFileTypes={["image/*"]}
            labelIdle='Drag & Drop your main photo or <span class="filepond--label-action">Browse</span>'
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gallery Images (up to 10)
          </label>
          <FilePond
            files={galleryImages}
            onupdatefiles={setGalleryImages}
            allowMultiple={true}
            maxFiles={10}
            acceptedFileTypes={["image/*"]}
            labelIdle='Drag & Drop your gallery images or <span class="filepond--label-action">Browse</span>'
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
            person1 (bride)
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
            person2 (groom)
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
