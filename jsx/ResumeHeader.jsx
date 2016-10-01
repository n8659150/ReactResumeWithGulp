var React = require("react");

var ResumeHeader = React.createClass({
	render: function(){
		return (
		<div>
			<header style={{backgroundColor:this.props.BGColor,color:this.props.TextColor}}>
			{/*
				HeaderProfile
				ProfileIMG="你的头像地址"
			*/}
			<HeaderProfile 
				ProfileIMG="static/jackli-profile.jpg" 
				Alt="ooJacklioO"/>
			{/*
				HeaderTitle
				HeaderContact
				按需更改即可
				如没有此项账号，直接去除即可
			*/}
		    <HeaderTitle 
		    	Name="李暘"
		    	Position="前端工程师" 
		    	TextColor="#f6fff6" />
			<HeaderContact 
				MailTo="mailto:jackli900421@hotmail.com" 
				EmailAddress="jackli900421@hotmail.com"
				Alt="ooJacklioO" 
				Phone="86-13585976350"
				Github="https://github.com/n8659150" 
				TextColor="#f6fff6" />
			</header>
		</div>
		);
	}
});

var HeaderProfile = React.createClass({
	render: function(){
		return (
			<div>
			<figure className="header-profile"><img src={this.props.ProfileIMG} alt={this.props.Alt} className="profile-img visible-print" />
			</figure>
			</div>
		)
	}
});

var HeaderTitle = React.createClass({
	render: function(){
		return (
			<div>
			<section className="title">
		    <h1 style={{color:this.props.TextColor}}>{this.props.Name}</h1>
			<h2>{this.props.Position}</h2>
			</section>
			</div>
		)
	}
});

var HeaderContact = React.createClass({
	render: function(){
		return (
			<div>
			<address>
				<ul className="contact">
					<li className="contact-email"><a style={{color:this.props.TextColor}} href={this.props.MailTo}>{this.props.EmailAddress}</a></li>
					<li className="contact-phone">{this.props.Phone}</li>
					<li className="contact-github"><a href={this.props.Github}></a>{this.props.Github}</li>
				</ul>
			</address>
			</div>
		);
	}
});

module.exports = ResumeHeader;