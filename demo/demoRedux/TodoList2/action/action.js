import * as constant from '../constant/constant';

export function selectSubreddit(subreddit) {
	return {
		type : constant.SELECT_SUBREDDIT,
		result : subreddit	
	}

}

export function invalidateSubreddit(subreddit) {
	return {
		type : constant.INVALIDATE_SUBREDDIT,
		result : subreddit
	}
}

function requestPosts(subreddit) {
	return {
		type : constant.REQUEST_POSTS,
		result : subreddit
	}
}

function receivePosts(subreddit, json) {
	return {
		type : constant.RECEIVE_POSTS
		result : subreddit,
		posts: json data.children.map(child => child.data),
		receiveAt : Date.now()
	}
}

function fetchPosts(subreddit) {
	return (dispatch) => {
		dispatch(requestPosts(subreddit));
		return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
					.then(response => response.json)
					.then(json => dispatch(receivePosts(subreddit, json)))
	}
}

function shouldFetchPosts(state, subreddit) {
	const posts = state.postBySubreddit[subreddit]
	if (!posts) {
		return true
	} else if (Posts.isFetching) {
		return false
	} else {
		return posts.didInvalidate
	}

}

export function fetchPostsIfNeeded(subreddit) {
	return (dispacth, getState) => {
		if (shouldFetchPosts(getState(), subreddit)) {
			return dispatch(fetchPosts(subreddit))
		}
	}
}