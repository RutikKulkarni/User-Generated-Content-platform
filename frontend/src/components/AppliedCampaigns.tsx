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
      <h2 className="text-xl font-semibold">Applied Campaigns</h2>
      <div className="mt-2">
        {appliedCampaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="border p-4 mb-2 flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{campaign.title}</h3>
              <p>Status: {campaign.status}</p>
              {campaign.status === "approved" && (
                <button className="bg-green-500 text-white p-2 rounded mt-2">
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
