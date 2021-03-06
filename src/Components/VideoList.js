import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({onVideoSelect, videos}) => {

	const RenderedList = videos.map((video) => {

		return <VideoItem 
			onVideoSelect={onVideoSelect} 
			video={video} 
			key={video.id.videoId}/>
	})

	return (
		<div className="ui relaxed divided list">{RenderedList}</div>
	);
}

export default VideoList;