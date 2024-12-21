import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FamilyTree = () => {
    const [familyMembers, setFamilyMembers] = useState([]);

    useEffect(() => {
        const fetchFamilyTree = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/family-tree/');
                setFamilyMembers(response.data);
            } catch (error) {
                console.error('Error fetching family tree:', error);
            }
        };

        fetchFamilyTree();
    }, []);

    const renderTree = (member) => (
        <li key={member.id}>
            {member.name} ({member.birthdate})
            {member.children && member.children.length > 0 && (
                <ul>
                    {member.children.map((child) => renderTree(child))}
                </ul>
            )}
        </li>
    );

    return (
        <div>
            <h2>Family Tree</h2>
            <ul>{familyMembers.map((member) => renderTree(member))}</ul>
        </div>
    );
};

export default FamilyTree;