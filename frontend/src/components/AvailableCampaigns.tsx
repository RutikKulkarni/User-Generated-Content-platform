import React, { useState } from "react";

interface Campaign {
  id: number;
  title: string;
  description: string;
  deadline: string;
}

const campaigns: Campaign[] = [
  {
    id: 1,
    title: "Spring Campaign",
    description: "Promote our new spring line.",
    deadline: "2024-05-01",
  },
  {
    id: 2,
    title: "Summer Campaign",
    description: "Share your summer adventures with us!",
    deadline: "2024-06-15",
  },
];

const AvailableCampaigns: React.FC = () => {
  const [appliedCampaigns, setAppliedCampaigns] = useState<number[]>([]);

  const handleApply = (id: number) => {
    if (!appliedCampaigns.includes(id)) {
      setAppliedCampaigns([...appliedCampaigns, id]);
      alert(`Applied to campaign: ${id}`);
    }
  };

  return (
    <div className="mt-5 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-semibold text-gray-800">Available Campaigns</h2>
      <div className="mt-4 space-y-4">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="border rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800">{campaign.title}</h3>
              <p className="mt-1 text-gray-600">{campaign.description}</p>
              <p className="mt-2 text-sm text-gray-500">Deadline: {campaign.deadline}</p>
            </div>
            <button
              onClick={() => handleApply(campaign.id)}
              className="mt-4 sm:mt-0 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableCampaigns;
