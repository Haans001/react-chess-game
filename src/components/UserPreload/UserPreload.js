import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import setPlayer from '../../store/actions/playerActions';

export default function UserPreload({ children, gameID }) {
  const userLoaded = useSelector(state => state.playerController.userLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPlayer(gameID));
  });
  return <>{userLoaded ? <>{children}</> : null}</>;
}
