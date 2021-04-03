import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);

  return { user, setUser };
};

export default useAuth;
