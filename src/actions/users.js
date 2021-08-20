import { auth } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = (email, password) => {
    return () => {
        return auth.signInWithEmailAndPassword(email,password);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return () => {
        return auth.signOut();
    }
}

export const setUsers = (users) => ({
    type: 'SET_USERS',
    users
});