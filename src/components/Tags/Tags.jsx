import React, { useState } from 'react';
import './Tags.scss';
import TagsItem from '../UI/TagsItem/TagsItem';

const Tags = ({ tags }) => {
  const [selectedTags, setSelectedTags] = useState([])

  return (
    <ul className='tags'>
      {tags.map((tag, index) =>
        <li
          key={index}
          className="tags-item"
        >
          <TagsItem
            name={tag.name}
            value={tag.value}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        </li>
      )}
    </ul>
  );
};

export default Tags;