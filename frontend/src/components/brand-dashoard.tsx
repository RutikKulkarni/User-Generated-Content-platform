import React, { useEffect, useState } from "react";
import { CampaignList } from "./Campaign-list";
import { CreateCampaignModal } from "./Campaign-modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BrandDashboard: React.FC<{ endpoint: string }> = ({ endpoint }) => {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      console.log("executed");
      navigate("/login");
    }
  });

  const fetchCampaigns = async () => {
    try {
      const response = await axios.get(`${endpoint}/api/campaign`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });

      setCampaigns(response.data.campaigns);
    } catch (err: any) {
      console.log("Error " + err.message);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState("");

  const handleCreateCampaign = async (
    title: string,
    description: string,
    deadline: string
  ) => {
    try {
      const response = await axios.post(
        `${endpoint}/api/campaign/create`,
        {
          title,
          description,
          deadline,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      fetchCampaigns();
    } catch (err: any) {
      console.log("Error: " + err.message);
    }
    setNotification(`Campaign "${title}" created successfully!`);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800">Brand Dashboard</h1>
        {notification && (
          <p className="mt-2 text-green-500 font-semibold">{notification}</p>
        )}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Create New Campaign
        </button>
        <div className="mt-6">
          <CampaignList campaigns={campaigns} />
        </div>
      </div>
      <CreateCampaignModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateCampaign}
      />
    </div>
  );
};

export default BrandDashboard;
