import React from "react";
import AvailableCampaigns from "./AvailableCampaigns";
import AppliedCampaigns from "./AppliedCampaigns";

const CreatorDashboard: React.FC = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Creator Dashboard</h1>
      <AvailableCampaigns />
      <AppliedCampaigns />
    </div>
  );
};

export default CreatorDashboard;
