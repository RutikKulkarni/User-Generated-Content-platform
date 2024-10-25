import React, { useState } from 'react';

interface User {
  name: string;
  email: string;
  role: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'User',
  });

  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newRole, setNewRole] = useState(user.role);
  const [newPassword, setNewPassword] = useState('');

  const handleSave = () => {
    setUser({
      ...user,
      name: newName,
      role: newRole,
    });
    setNewPassword('');
    setEditing(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Profile Details</h1>
      <div className="mb-4">
        <strong>Name:</strong> {editing ? (
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="border p-2 rounded mt-1 w-full"
          />
        ) : (
          <span>{user.name}</span>
        )}
      </div>
      <div className="mb-4">
        <strong>Email:</strong> <span>{user.email}</span>
      </div>
      <div className="mb-4">
        <strong>Role:</strong> {editing ? (
          <select
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            className="border p-2 rounded mt-1 w-full"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
            <option value="Moderator">Moderator</option>
          </select>
        ) : (
          <span>{user.role}</span>
        )}
      </div>
      {editing && (
        <div className="mb-4">
          <strong>New Password:</strong>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border p-2 rounded mt-1 w-full"
          />
        </div>
      )}
      <div className="flex space-x-4">
        {editing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(false)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
