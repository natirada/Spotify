import React from 'react';
// @ts-ignore
import useAuth from '../../hooks/useAuth';
import Drawer from '../../components/Drawer/Drawer';

interface Props {
  code: string;
}

const Main = ({ code }: Props) => {
  const { accessToken } = useAuth(code);
  return (
    <div>
      <Drawer />
    </div>
  );
};

export default Main;
