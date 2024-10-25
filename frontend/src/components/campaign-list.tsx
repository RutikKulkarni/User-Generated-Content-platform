import React from "react";
import { FaTrash } from "react-icons/fa";

interface Campaign {
  id: string;
  title: string;
  description: string;
}

interface CampaignListProps {
  campaigns: Campaign[];
}

export const CampaignList: React.FC<CampaignListProps> = ({ campaigns }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Campaigns</h1>
      <ul className="space-y-4">
        {campaigns?.map((campaign) => (
          <li
            key={campaign.id}
            className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900">{campaign.title}</h2>
              <p className="mt-2 text-gray-600">{campaign.description}</p>
            </div>
            <button
              className="mt-4 md:mt-0 md:ml-4 p-2 text-red-500 hover:text-red-700 transition duration-200"
              aria-label="Delete Campaign"
            >
              <FaTrash className="w-5 h-5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
