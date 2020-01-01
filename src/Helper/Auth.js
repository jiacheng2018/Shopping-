import decode from 'jwt-decode';
const JWT = 'store_token_id';

const setToken = token => {
          localStorage.setItem(JWT, token);
};
const getToken = token => {
          const tokens = localStorage.getItem(JWT);
          return tokens;
};
const isLogin = () => {
          const jwtToken = getToken();
          return !!jwtToken && isTokenExpred;
};
const getUser = () => {
          const jwToken = getToken();
          if (isLogin()) {
                    const user = decode(jwToken);
                    return user;
          } else {
                    return null;
          }
};
const isTokenExpred = token => {
          try {
                    const _info = decode(token);
                    if (_info.exp < Date.now() / 1000) {
                              return true;
                    } else return false;
          } catch (error) {
                    return false;
          }
};
global.auth = {
          setToken,
          getUser
};
