import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {searchBar} from "../const/const";

const SearchBar = () => {
    const [allSearchTerm, setAllSearchTerm] = useState('');
    const navigate = useNavigate();

    const onHandleSubmit = () => {
        if (allSearchTerm) {
            navigate(`/search/${allSearchTerm}`);
            setAllSearchTerm('');
        }
    };

    return (
        <div
            style={searchBar.paper}
            className={'search-container'}
        >
            <input
                style={searchBar.input}
                placeholder='Search...'
                value={allSearchTerm}
                onChange={(e) => setAllSearchTerm(e.target.value)}
                className={'txt-search'}
            />
            <IconButton style={searchBar.iconButton} onClick={onHandleSubmit}>
                <SearchIcon/>
            </IconButton>
        </div>
    );
};

export default SearchBar;
