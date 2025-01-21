import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  console.log(location.state);

  return (
    <div>
      {/* ... */}
    </div>
  );
}

export default MyComponent;