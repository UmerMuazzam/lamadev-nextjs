import React from 'react' 
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Image 
        src={
          "https://cdn.pixabay.com/photo/2022/10/24/12/20/mountains-7543273_1280.jpg"
        } width={400} height={400}
        alt="hero image"
      />
    </div>
  );
}

export default page
