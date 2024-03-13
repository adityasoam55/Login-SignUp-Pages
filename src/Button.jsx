import React, { memo } from 'react';

function Button(props) {
    console.log('Button Re-running',props.children);
  return (
    <button
    {...props} 
    className='bg-blue-700 rounded-md text-white px-2 py-1'
    >
    </button>
  )
}

const newButton = memo(Button);

export default newButton;
