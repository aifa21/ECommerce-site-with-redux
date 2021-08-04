import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

import { handleSignOut } from './LoginManager';

const LogOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); //------- global logged in user
    const history = useHistory()

    useEffect(()=>{
        handleSignOut()
        .then(res=>{
            setLoggedInUser(res);
            sessionStorage.clear();
            history.push('/login')
        })
    },[])
    
    return (
        <div>
            
        </div>
    );
};

export default LogOut;