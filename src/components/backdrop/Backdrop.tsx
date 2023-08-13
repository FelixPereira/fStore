import { Container } from './backdrop-style';

const Backdrop = ({ ...props }) => {
  return <Container {...props} className='backdrop' />;
};

export default Backdrop;
