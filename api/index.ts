import changePassword from './auth/changePassword';
import forgotPassword from './auth/forgotPassword';
import login from './auth/login';
import register from './auth/register';
import getAllInstitutions from './institution/getAllInstitutions';
import createImagedPost from './post/createImagedPost';
import createNotificationPost from './post/createNotificationPost';
import deletePost from './post/deletePost';
import getLatestPosts from './post/getLatestPosts';
import updateUser from './user/updateUser';

export default {
    auth: {
        changePassword,
        forgotPassword,
        login,
        register
    },
    institution: {
        getAllInstitutions
    },
    post: {
        createImagedPost,
        createNotificationPost,
        deletePost,
        getLatestPosts
    },
    user: {
        updateUser
    }
}