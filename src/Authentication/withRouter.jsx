import { useparams, /* ...other hooks */ } from 'react-router-dom';

const withrouter = wrappedcomponent => props => {
  const params = useparams();

  return (
    <wrappedcomponent
      {...props}
      {...{ params}}
    />
  );
};

export default withrouter;