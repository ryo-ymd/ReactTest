import React from 'react';
import ReactDom from 'react-dom';
import {ArticleList} from './articles.js'

window.App = {
	render:  () => {
		ReactDom.render(
			<div>
				<ArticleList></ArticleList>
			</div>,
			document.getElementById('articles')
		);
	}
};
