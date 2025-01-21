import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MyComponent() {
  const location = useLocation();
  const params = useParams();
  const [state, setState] = useState(location.state);

  useEffect(() => {
    if (!state && location.state) {
      setState(location.state);
    }
  }, [location.state, state]);

  console.log('location.state:', state, 'params:', params);

  return (
    <div>
      {/* ... */}
      {state && <p>State: {JSON.stringify(state)}</p>}
      {params && <p>Params: {JSON.stringify(params)}</p>}
    </div>
  );
}

export default MyComponent;