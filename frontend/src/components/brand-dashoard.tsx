// import React, { useState } from "react";
// import { CampaignList } from "./campaign-list";
// import { CreateCampaignModal } from "./campaign-modal";

// const BrandDashboard: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [notification, setNotification] = useState("");

//   const handleCreateCampaign = (
//     title: string,
//     description: string,
//     deadline: string
//   ) => {
//     setNotification(`Campaign "${title}" created successfully!`);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold">Brand Dashboard</h1>
//       {notification && <p className="text-green-500">{notification}</p>}
//       <button
//         onClick={() => setIsModalOpen(true)}
//         className="mt-4 bg-blue-500 text-white p-2 rounded"
//       >
//         Create New Campaign
//       </button>
//       <CampaignList />
//       <CreateCampaignModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onCreate={handleCreateCampaign}
//       />
//     </div>
//   );
// };

// export default BrandDashboard;

import React, { useEffect, useState } from "react";
import { CampaignList } from "./campaign-list";
import { CreateCampaignModal } from "./campaign-modal";
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
    <div className="p-5">
      <h1 className="text-2xl font-bold">Brand Dashboard</h1>
      {notification && <p className="text-green-500">{notification}</p>}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Create New Campaign
      </button>
      <CampaignList campaigns={campaigns} />
      <CreateCampaignModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateCampaign}
      />
    </div>
  );
};

export default BrandDashboard;
