import io from 'socket.io-client';

function createSocketClient(gameID, dispatch) {
  return new Promise((resolve, reject) => {
    const socket = io(`http://localhost:5000/${gameID}`);
    socket.on('connect', () => {
      socket.on('get_game', data => {
        dispatch({ type: 'SET_GAME', payload: data });
      });
      resolve(socket);
    });
    socket.on('connect_error', error => reject(error));
  });
}
export default createSocketClient;
