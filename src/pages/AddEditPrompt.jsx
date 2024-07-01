import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

function AddEditPrompt() {
  const [promptText, setPromptText] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Fetch the prompt details and set the promptText state
      // For now, we'll just simulate this with a placeholder
      setPromptText('Sample prompt text');
    }
  }, [id]);

  const handleSave = () => {
    // Save the prompt (either add new or update existing)
    // For now, we'll just log the prompt text
    console.log('Saved prompt:', promptText);
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{id ? 'Edit Prompt' : 'Add New Prompt'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <label htmlFor="promptText" className="block text-sm font-medium text-gray-700">Prompt Text</label>
            <Input
              id="promptText"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              className="mt-1 block w-full"
            />
          </div>
          <div className="flex justify-end">
            <Button onClick={handleCancel} className="mr-2">Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddEditPrompt;