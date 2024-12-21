import React, { useState } from 'react';
import axios from 'axios';

const PhotoUpload = () => {
    const [memberId, setMemberId] = useState('');
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('member', memberId);
        formData.append('file_path', file);
        formData.append('description', description);

        try {
            const response = await axios.post('http://localhost:8000/api/upload-photo/', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Photo uploaded successfully!');
        } catch (error) {
            console.error('Error uploading photo:', error);
            alert('Failed to upload photo.');
        }
    };

    return (
        <div>
            <h2>Upload Photo</h2>
            <input type="text" placeholder="Member ID" onChange={(e) => setMemberId(e.target.value)} />
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default PhotoUpload;