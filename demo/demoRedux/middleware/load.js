// action.js
// export function loadPosts(userId) {
//   return {
//     types: ['LOAD_POSTS_REQUEST', 'LOAD_POSTS_SUCCESS', 'LOAD_POSTS_FAILURE'],
//     shouldCallAPI: (state) => !state.users[userId],
//     callAPI: () => fetch(`http://myapi.com/users/${userId}/posts`),
//     payload: { userId }
//   };
// }
// 
// post
// fetch('/post/some/data', {  
//     method: 'post',
//     body: JSON.stringify({ user: 'lisposter', pwd: 'souche.com'})
// });
// 
// get
// fetch('https://nodejs.org/api/http.json').then(function(response) {  
//     return // 响应处理
// }).catch(function(err) {
//     // 捕获错误
// });

function loadDataMiddleware({dispatch, getState}) {
    return function(next) {
        return function (action) {
            let {

                types,
                url = "",
                success,
                fail,
                data = {},
                mode = "post"

            } = action;
            if (!types) {
                return next(action);
            }

            if (!Array.isArray(types) || types.length !== 3 || !types.every((type) => {typepf type === 'string'})) {
                throw new Error('Expected an array of three string types.')
            }

            const [requestType, successType, failureType] = types;

            dispatch({
                state,
                type: requestType
            });

            if ('post' === mode) {
                fetch(url, {
                    method: 'post',
                    body: JSON.stringify(requestData)
                }).then(response => {
                    dispatch({
                        ...data,
                        ...response,
                        type: successType  
                    });
                    if (success && typeof success === 'function') {
                        success();
                    }
                },error => {
                    dispatch({
                        {
                            ...data,
                            error: error,
                            type: failureType  
                        }
                    });
                    if (fail && typeof fail === 'function') {
                        fail();
                    }
                });
            }

            if ('get' === mode) {
                fetch(url).then(response => {
                    dispatch({
                        ...data,
                        ...response,
                        type: successType  
                    });
                    if (success && typeof success === 'function') {
                        success();
                    }
                },error => {
                    dispatch({
                        {
                            ...data,
                            error: error,
                            type: failureType  
                        }
                    });
                    if (fail && typeof fail === 'function') {
                        fail();
                    }
                });
            }
            

        }
    }
}