import React, { useContext } from 'react';
import { LawsListContext } from '../../../context/context';
import PostsList from '../../Posts/PostsList/PostsList';

const LawsList = () => {
  const { lawsList } = useContext(LawsListContext)
  
  return (
    <div className="laws-list">
      <PostsList posts={lawsList} />
    </div>
  );
};

export default LawsList;