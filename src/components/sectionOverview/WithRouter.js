import React, { useParams } from 'react';

const WithRouter = WrappedComponent => {
  const params = useParams();

  WithRouter = (props) => {
    return <WrappedComponent {...props} params={params} />
  }
  return WithRouter;
};

export default WithRouter;