//React
import React from 'react';
import { SearchPropType } from '../utils/propTypes'
//Components
import { getIcon } from '../assets/icons/Icon';

const Search = ({ searchString, searchRows, clearSearch }) => {
    const icon = getIcon({ name: "search", size: 24 });
    return (
        <div className="react-collapsible-search">
            <input onChange={ searchRows } value={ searchString } placeholder="search"/>
            { icon }
            <button className="react-collapsible-clear" onClick={ clearSearch }>&#9587;</button>
        </div>
    );
};

Search.propTypes = SearchPropType;

export default Search
