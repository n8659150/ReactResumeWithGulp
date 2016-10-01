var React = require("react");

var ResumeFooter = React.createClass({
	render: function(){
		return (
		<div>
			<footer>
			<div align={this.props.align}>
			<img border={this.props.border} src={this.props.YourAmazingCounterURL} alt="AmazingCounters.com" />
			</div>
			</footer>
		</div>
		);
	}
});

module.exports = ResumeFooter;