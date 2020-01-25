import { machineIdSync } from 'node-machine-id';

const tokenConfig = () => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  config.headers['x-auth-token'] = machineIdSync();

  return config;
};

export default tokenConfig;
