// import React, { useEffect, useState } from "react";
// import axios from "axios";

// interface Campaign {
//   id: string;
//   title: string;
//   description: string;
// }

// export const CampaignList: React.FC = () => {
//   const [campaigns, setCampaigns] = useState<Campaign[]>([]);

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       const response = await axios.get("/api/campaigns");
//       setCampaigns(response.data);
//     };

//     fetchCampaigns();
//   }, []);

//   return (
//     <div>
//       <h1>Campaigns</h1>
//       <ul>
//         {campaigns.map((campaign) => (
//           <li key={campaign.id}>
//             <h2>{campaign.title}</h2>
//             <p>{campaign.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


// src/components/CampaignList.tsx

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Campaign {
  id: string;
  title: string;
  description: string;
}

interface CampaignListProps {
  endpoint: string;
}

export const CampaignList: React.FC<CampaignListProps> = ({ endpoint }) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get(`${endpoint}/api/campaigns`);
        setCampaigns(response.data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchCampaigns();
  }, [endpoint]); 

  return (
    <div>
      <h1>Campaigns</h1>
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign.id}>
            <h2>{campaign.title}</h2>
            <p>{campaign.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
