import React from "react";

function HeaderList({ name, Icon }) {
  return (
    <div className='flex gap-2  cursor-pointer hover:underline underline-offset-8 '>
      <div className='flex items-center'>
        <Icon className='text-end' />
      </div>

      <h2>{name}</h2>
    </div>
  );
}

export default HeaderList;
