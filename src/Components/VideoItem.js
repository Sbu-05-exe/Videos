import './VideoItem.css'
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {

	const {thumbnails, title} = video.snippet;

	return (
		<div className="item video-item" onClick={()=> {onVideoSelect(video)}}>
			<img className="ui image" src={thumbnails.medium.url} alt={title}/>
			<div className="content">
				<div className="header">{title}</div>
			</div>
			
		</div>
	);
}

export default VideoItem;