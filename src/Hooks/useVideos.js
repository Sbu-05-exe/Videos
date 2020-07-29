import { useState, useEffect } from 'react';
import youtube from '../api/youtube'

const KEY = 'AIzaSyDcVLbAkJwycHiIa-x9acenjV3bWY12-xc';

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([])

	useEffect(() => {
		search(defaultSearchTerm)

	}, [defaultSearchTerm])

	const search = async term => {
		const response = await youtube.get('/search', {
			params: {
				part: 'snippet',
				maxResults: 5,
				key: KEY,
				q: term
			}
		});

		setVideos(response.data.items)
	}

	return [videos, search]
}

export default useVideos