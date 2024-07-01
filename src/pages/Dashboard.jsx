import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function Dashboard() {
  const [prompts, setPrompts] = useState([]);
  const navigate = useNavigate();

  const handleAddPrompt = () => {
    navigate('/add');
  };

  const handleEditPrompt = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDeletePrompt = (id) => {
    setPrompts(prompts.filter(prompt => prompt.id !== id));
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Prompt Manager Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={handleAddPrompt} className="mb-4">Add New Prompt</Button>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Prompt ID</th>
                <th className="py-2">Prompt Text</th>
                <th className="py-2">Date Created</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {prompts.map(prompt => (
                <tr key={prompt.id}>
                  <td className="py-2">{prompt.id}</td>
                  <td className="py-2">{prompt.text}</td>
                  <td className="py-2">{prompt.dateCreated}</td>
                  <td className="py-2">
                    <Button onClick={() => handleEditPrompt(prompt.id)} className="mr-2">Edit</Button>
                    <Button onClick={() => handleDeletePrompt(prompt.id)} variant="destructive">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;