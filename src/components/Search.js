//React
import React from 'react';
import { SearchPropType } from '../utils/propTypes'
//Components
import { getIcon } from '../assets/icons/Icon';

const Search = ({ searchString, searchRows, clearSearch, showSearchIcon, showClearIcon }) => {
    const icon = getIcon({ name: "search", size: 22 });
    return (
        <div className="react-collapsible-search">
            <div className="search-input">
              <input onChange={ searchRows } value={ searchString } placeholder="search"/>
              { showSearchIcon && icon }
              { showClearIcon && <button className="react-collapsible-clear" onClick={ clearSearch }>&#9587;</button> }
            </div>
        </div>
    );
};

Search.propTypes = SearchPropType;

export default Search
