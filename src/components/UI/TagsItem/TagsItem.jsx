import React, { useEffect, useState } from 'react';
import classes from './TagsItem.module.scss';

const TagsItem = ({ name, value, selectedTags, setSelectedTags }) => {
  const
    [isActive, setIsActive] = useState(false),
    rootClasses = [classes['tags-button']]

  const chooseTag = () => {
    setIsActive(!isActive)
  }

  // useEffect(() => {
  //   console.log(isActive, name);
  // }, [isActive])

  if (isActive) {
    rootClasses.push(classes['active'])
  }

  return (
    <button
      className={rootClasses.join(' ')}
      value={value}
      onClick={chooseTag}
    >
      <span className={classes["tags-button__text"]}>{name}</span>
    </button>
  );
};

export default TagsItem;