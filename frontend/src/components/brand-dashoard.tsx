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


import React, { useState } from "react";
import { CampaignList } from "./campaign-list";
import { CreateCampaignModal } from "./campaign-modal";

const BrandDashboard: React.FC<{ endpoint: string }> = ({ endpoint }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState("");

  const handleCreateCampaign = (
    title: string,
    description: string,
    deadline: string
  ) => {
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
      <CampaignList endpoint={endpoint} />
      <CreateCampaignModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateCampaign}
      />
    </div>
  );
};

export default BrandDashboard;
