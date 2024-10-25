import React from "react";
import AvailableCampaigns from "./AvailableCampaigns";
import AppliedCampaigns from "./AppliedCampaigns";

const CreatorDashboard: React.FC = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
        Creator Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-5">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Available Campaigns
          </h2>
          <AvailableCampaigns />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Applied Campaigns
          </h2>
          <AppliedCampaigns />
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;
