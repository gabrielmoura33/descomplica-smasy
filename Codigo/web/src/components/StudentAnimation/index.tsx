import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/animations/student.json';

const StudentAnimation: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} height={556} width={538} />;
};

export default StudentAnimation;
