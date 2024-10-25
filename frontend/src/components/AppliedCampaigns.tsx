import React from "react";

interface AppliedCampaign {
  id: number;
  title: string;
  status: "pending" | "approved" | "rejected";
}

const appliedCampaigns: AppliedCampaign[] = [
  { id: 1, title: "Spring Campaign", status: "pending" },
  { id: 2, title: "Summer Campaign", status: "approved" },
];

const AppliedCampaigns: React.FC = () => {
  return (
    <div className="mt-5">
      <h2 className="text-2xl font-semibold text-gray-800">Applied Campaigns</h2>
      <div className="mt-4 space-y-4">
        {appliedCampaigns.map((campaign) => (
          <div
            key={campaign.id}
            className={`border rounded-lg p-4 shadow-lg flex justify-between items-center transition-transform transform hover:scale-105 ${
              campaign.status === "pending"
                ? "border-yellow-500 bg-yellow-50"
                : campaign.status === "approved"
                ? "border-green-500 bg-green-50"
                : "border-red-500 bg-red-50"
            }`}
          >
            <div>
              <h3 className="text-lg font-bold text-gray-800">{campaign.title}</h3>
              <p className={`mt-1 font-medium ${
                campaign.status === "pending"
                  ? "text-yellow-600"
                  : campaign.status === "approved"
                  ? "text-green-600"
                  : "text-red-600"
              }`}>
                Status: {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
              </p>
              {campaign.status === "approved" && (
                <button className="mt-2 bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition duration-200">
                  Upload Content
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedCampaigns;
