import React from 'react';
import { useLoading, useCurrentUser } from '../../hooks/AuthProvider';
import { useHistory, Link } from 'react-router-dom';

const Splash = () => {
  const user = useCurrentUser();
  const history = useHistory();
  const loading = useLoading();

  if(loading) return (
    <section>
      <h2>loading...</h2>
    </section>
  );

  if(user)
    history.push('/dashboard');

  return (
    <>
      <h2>Splash goes here</h2>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Login</Link>
    </>

  );

};
export default Splash;
