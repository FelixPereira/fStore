import React from 'react';
import { useParams } from 'react-router-dom';

const SectionOverview = () => {
  const params = useParams();
  console.log(params)
  return(
    <div>Olá mundo</div>
  )
};

export default SectionOverview;