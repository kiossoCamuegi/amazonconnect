import React from 'react';
import ImageLazyLoading from './ImageLazyLoading';

const Logos = [
    "https://zeevector.com/wp-content/uploads/Amazon-Logo-White@zeevector.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
];

function Logo({index}) {
  return (
    <div>
        <ImageLazyLoading source={Logos[index]} height={60}   />
    </div>
  )
}

export default Logo