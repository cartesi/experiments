import React, { useEffect, useState } from 'react';
import { useDatabase } from '../hooks/useDatabase';

import IconHeart from '@site/src/components/ui/IconHeart';

type LikesProps = {
  path: string;
  active: boolean;
};

const Likes = ({ path, active = false }: LikesProps) => {
  const id = path.replaceAll('/', '');
  const { fetchProject, upsertProject } = useDatabase();
  const [likes, setLikes] = useState<number>(0);
  var localData = JSON.parse(localStorage.getItem('cartesiRolluplabLikes'));
  if (localData == null) localData = [];
  const [liked, setLiked] = useState<boolean>(localData.includes(id));

  useEffect(() => {
    (async () => {
      const result = await fetchProject(id);
      if (result) setLikes(result.likes);
    })();
  }, []);

  const handleUpsert = async () => {
    if (localData.includes(id) === false) {
      const result = await upsertProject({
        id: id,
      });
      if (result) {
        localData.push(id);
        localStorage.setItem(
          'cartesiRolluplabLikes',
          JSON.stringify(localData)
        );
        setLiked(true);
        setLikes(result);
      }
    }
  };

  if (active)
    return (
      <button
        onClick={handleUpsert}
        disabled={liked}
        className='group disabled:cursor-not-allowed'
      >
        <span className='flex flex-col bg-white/10 px-5 py-3 border border-solid border-white/70 rounded-lg group-hover:bg-primary group-disabled:bg-white/10'>
          <IconHeart
            variant={liked ? 'filled' : 'outline'}
            style='fill-secondary w-6'
          />
          <span className='text-white text-sm'>{likes}</span>
        </span>
      </button>
    );
  else
    return (
      <span className='flex flex-col items-center px-5 py-2 border border-solid border-primary/20 rounded-lg shrink-0'>
        <IconHeart
          variant={liked ? 'filled' : 'outline'}
          style='fill-tertiary w-6'
        />
        <span className='text-primary text-sm'>{likes}</span>
      </span>
    );
};

export default Likes;
