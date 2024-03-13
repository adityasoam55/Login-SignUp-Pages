import React from 'react';

function Message({ amount }) {
    console.group('Message Re-running')
  return (
    <p className='bg-green-600 px-5 py-0.5'>
      You are Donating ${amount}."Thank You..."
    </p>
  )
}

export default Message;
