import React, { useMemo } from 'react';
import Header from './Component/Header';
const Layout = props => {
          const user = useMemo(() => {
                    const user = global.auth.getUser() || {};
                    return user;
                    console.log('hello', user);
          }, []);
          return (
                    <div className="main">
                              <Header user={user} />
                              {props.children}
                    </div>
          );
};
export default Layout;
