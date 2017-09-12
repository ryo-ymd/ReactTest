import React, {Component} from 'react'

export class ArticleList extends Component {
	constructor() {
		super();
		this.state = {
			testData: [1, 2, 3, 4, 5, 6]
		}
	}

	render() {
		var testData = this.state.testData;
		return (
			<div className="row">
				{testData.map((i) => {
					return <Article key={i} title={"記事" + i} description="説明文です"/>;
				})}
			</div>
		);
	}
}

class Article extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="col-md-4">
				<h2>{this.props.title}</h2>
				<p>{this.props.description}</p>
				<GoodButton />
			</div>
		);
	}
}

class GoodButton extends Component {
	constructor() {
		super();
		this.state = {
			count: 0
		}
	}

	onClick() {
		this.setState({
			count: this.state.count + 1
		});
	}

	render() {
		return (
			<p>
				<button className="btn" onClick={this.onClick.bind(this)}>
					いいね! <span className="badge badge-secondary">{this.state.count}</span>
				</button>
			</p>
		);
	}
}
