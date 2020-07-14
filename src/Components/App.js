import React from 'react';
import youtube from '../api/youtube.js';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyDcVLbAkJwycHiIa-x9acenjV3bWY12-xc'; 

class App extends React.Component {
	state = {
		videos: [],
		selectedVideo:null

	}
	componentDidMount = () => {
		this.onTermSubmit('Favi sosa')
	}

	onVideoSelect = (video) => {
		const selectedVideo = video
		this.setState({selectedVideo})
	}

	onTermSubmit = async term => {
		const response = await youtube.get('/search', {
			params: {
				part: 'snippet',
				maxResults: 5,
				key: KEY,
				q: term
			}
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		})
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} /> 
				<div className="ui grid">
					<div className="ui row">

						<div className="eleven wide column"> 
							<VideoDetail 
								video={this.state.selectedVideo}
							/>
						</div>
						<div className="five wide column">
							<VideoList 
								videos={this.state.videos} 
								onVideoSelect={this.onVideoSelect}
							/>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default App;