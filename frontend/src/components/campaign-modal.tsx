import React, { useState } from "react";

interface CreateCampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (title: string, description: string, deadline: string) => void;
}

export const CreateCampaignModal: React.FC<CreateCampaignModalProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !deadline) {
      setError("All fields are required.");
      return;
    }
    onCreate(title, description, deadline);
    setTitle("");
    setDescription("");
    setDeadline("");
    setError("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded shadow-lg w-96">
        <h2 className="text-xl mb-4">Create New Campaign</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Campaign Title"
            className="border p-2"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="border p-2"
            required
          />
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="border p-2"
            required
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 p-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Create Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
