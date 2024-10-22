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
    <div className="mt-5">
      <h2 className="text-xl font-semibold">Available Campaigns</h2>
      <div className="mt-2">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="border p-4 mb-2 flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{campaign.title}</h3>
              <p>{campaign.description}</p>
              <p>Deadline: {campaign.deadline}</p>
            </div>
            <button
              onClick={() => handleApply(campaign.id)}
              className="bg-blue-500 text-white p-2 rounded"
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
