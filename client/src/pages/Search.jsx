// Search 컴포넌트
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (event) => {
        if (event.key === 'Enter' && searchInput.trim()) {
            // axios 호출에 POST 대신 GET 메서드를 사용하고, 쿼리 파라미터를 이용합니다.
            try {
                const response = await axios.get(`http://localhost:5050/api/search?query=${encodeURIComponent(searchInput)}`);
                const searchResults = response.data.results;

                if (searchResults.length > 0) {
                    navigate(`/league/${searchResults[0].id}`);
                } else {
                    alert("No matching leagues found.");
                }
            } catch (error) {
                console.error('Search error:', error);
                alert('Error performing the search. Please try again.');
            }
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for a league..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleSearch}
            />
        </div>
    );
};

export default Search;
