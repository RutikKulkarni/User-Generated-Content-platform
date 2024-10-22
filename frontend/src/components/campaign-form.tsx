import React, { useState } from 'react';
import axios from 'axios';

interface CampaignFormProps {
  endpoint: string;
}

export const CampaignForm: React.FC<CampaignFormProps> = ({ endpoint }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await axios.post(`${endpoint}/api/campaigns`, { title, description });
    } catch (error) {
      console.error('Error creating campaign:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Create Campaign</button>
    </form>
  );
};
