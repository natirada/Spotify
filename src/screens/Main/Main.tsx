import React from 'react';
// @ts-ignore
import useAuth from '../../hooks/useAuth';

interface Props {
  code: string;
}

const Main = ({ code }: Props) => {
  const { accessToken } = useAuth(code);
  return <div>Connected!!</div>;
};

export default Main;
