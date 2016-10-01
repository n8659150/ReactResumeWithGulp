var React = require("react");
var ResumeHeader = require("./ResumeHeader.jsx");
var ResumeBodyLeft = require("./ResumeBodyLeft.jsx");
var ResumeBodyRight = require("./ResumeBodyRight.jsx");
var ResumeFooter = require("./ResumeFooter.jsx");

var Resume = React.createClass({
	render: function(){
		return (
			<div>
				<main className="container" style={{backgroundColor:this.props.BGColor}}>
				{/*
					ResumeHeader
					BGColor="头部背景颜色"
					TextColor="头部文字颜色"(需同时更改HeaderTitle和HeaderContact中的文字颜色) 
				*/}
				<ResumeHeader BGColor="#00487e" TextColor="#f6fff6" />
				<article className="content row">
				<ResumeBodyLeft />
				<ResumeBodyRight />
				</article>
				</main>
				{/*
					底部计数器
					align,border无需更改
					YourAmazingCounterURL="你在amazingcounters.com上申请的地址"
				*/}
				<ResumeFooter 
					align="center" 
					border="0" 
					YourAmazingCounterURL="http://cc.amazingcounters.com/counter.php?i=3206089&c=9618580" />
			</div>
		);
	}
});

module.exports = Resume;