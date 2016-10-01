var React = require("react");

var ResumeBodyRight = React.createClass({
	render: function(){
		return (
			<div>
				<article className="column-6 last column">
					<Skill />
					{/*
						ContactMe
						QRCodeSrc="你的二维码地址"
					*/}
					<ContactMe Title="与我联系" EngTitle="ContactMe" QRCodeSrc="static/jackli_qr.png" Alt="ooJacklioO" />
				</article>
			</div>
		);
	}
});

var Skill = React.createClass({
	render: function(){
		return (
			<div>
			<section className="skills">
				<SkillTitle 
					Title="技能" 
					EngTitle="skill" />
				<div className="timeline-wrapper">
					<ul className="sec-content timeline">
						<li className="timeline-item skills-frontend">
						<SkillType1 
							TypeName="Web前端" />
						{/*
							技能描述需直接在dt和dd标签中更改，需要加粗的部分用strong标签包起
						*/}
						<dl className="skills-description timeline-content">
							<dt className="skills-item-summary"><strong>HTML</strong><span className="spaceFix"></span>/<span className="spaceFix"></span><strong>CSS</strong></dt>
							<dd className="skills-item-description"><span>能够编写符合语义的<strong>HTML</strong>，模块化，高复用性的<strong>CSS</strong>并注重代码<strong>整洁和可读性</strong></span></dd><dd className="skills-item-description"><span>对于<strong>HTML5</strong>/<strong>CSS3</strong>的新特性有一定了解，并在以往项目中有使用经验</span></dd>
							<dt className="skills-item-summary"><strong>JavaScript</strong></dt>
							<dd className="skills-item-description"><span>熟悉<strong>Javascript</strong>语法规则，对<strong>JavaScript编译技术</strong>有基本的了解，大学所修编译原理课程中参与过<strong>JavaScript编译器</strong>DEMO（团队作业）的编写</span></dd>
							<dt className="skills-item-summary"><strong>DOM</strong><span className="spaceFix"></span>/<span className="spaceFix"></span><strong>BOM</strong><span className="spaceFix"></span>及常见<span className="spaceFix"></span><strong>Web<span className="spaceFix"></span>API</strong></dt>
							<dd className="skills-item-description"><span>熟悉原生<strong>DOM</strong>与<strong>BOM</strong>常见方法，并能根据实际情况分析，以<strong>性能</strong>为最高优先级挑选出<strong>最优方法</strong>，具有基于热门<strong>JS框架</strong>的<strong>WEB<span className="spaceFix"></span>APP</strong>以及<strong>手机端APP</strong>的开发经验</span></dd>
							<dt className="skills-item-summary">前端工程实践</dt>
							<dd className="skills-item-description"><span>使用<strong>Bootstrap</strong>+<strong>AngularJS</strong>编写过具有用户验证，用户分级，CRUD功能的单页应用，熟悉<strong>MVC</strong>模型并具有相关项目开发经验</span></dd><dd className="skills-item-description"><span>熟悉<strong>ng-Cordova</strong>/<strong>Ionic</strong>手机端框架的使用和定制，对于手机端/网页端应用的特性差异以及UI组件使用有自己的见解，具有混合类手机应用的项目开发经验</span></dd><dd className="skills-item-description"><span>对于<strong>Less</strong>/<strong>Sass</strong>等样式预处理语言有基本了解</span></dd><dd className="skills-item-description"><span>日常使用<strong>npm</strong>模块打包工具通过云端获取所需模块，提升开发效率</span></dd><dd className="skills-item-description"><span>对于网页<strong>兼容性处理</strong>、前端<strong>性能优化</strong>具有基本的了解并乐于在项目中尝试使用</span></dd>
						</dl>
						</li>
						<li className="timeline-item skills-backend">
						<SkillType2 
							TypeName="Web后端" />
						<dl className="skills-description timeline-content">
							<dt className="skills-item-summary"><strong>后端云数据库（FireBase）</strong></dt>
							<dd className="skills-item-description"><span>具有多次以<strong>Firebase</strong>作为云数据库的项目<strong>开发经验</strong></span></dd><dd className="skills-item-description"><span>能够使用<strong>Firebase官方API</strong>实现前端页面与后端数据库的<strong>基本交互</strong>，并可根据所需要的数据形式确定合适的数据类型并提出<strong>数据存取方案建议</strong></span></dd><dd className="skills-item-description"><span>对于相类似的后端云服务可以<strong>迅速上手</strong></span></dd>
						</dl>
						</li>
						<li className="timeline-item skills-miscellaneous">
						<SkillType3 
							TypeName="其他" />
						<ul className="skills-description skills-miscellaneous timeline-content">
							<li className="skills-item-description"><span>熟悉<strong>敏捷开发</strong>流程并具有相关项目管理经验</span></li>
							<li className="skills-item-description"><span>代码<strong>缩进强迫症</strong>患者</span></li>
							<li className="skills-item-description"><span>对于<strong>面向对象编程</strong>及相关编程语言（C#,PYTHON）具有一定程度的了解和实践</span></li>
							<li className="skills-item-description"><span>具备基本的<strong>Web安全</strong>知识和防范意识</span></li>
							<li className="skills-item-description"><span>日常使用<strong>Git</strong>和<strong>Sublime<span className="spaceFix"></span>Text</strong>作为开发工具</span></li>
							<li className="skills-item-description"><span>能够使用<strong>Photoshop</strong>完成切图任务，并可实现基本的网页设计，具有一定的审美能力</span></li>
							<li className="skills-item-description"><span>2008年开始<strong>自学吉他</strong>，2009年开始接触<strong>词曲创作</strong>，现创作歌曲超过<strong>20首</strong>，优秀作品已在热门音乐平台上线</span></li>
							<li className="skills-item-description"><span>素食主义者+基督徒</span></li>
						</ul>
						</li>
					</ul>
				</div>
			</section>
			</div>
		);
	}
});

var SkillTitle = React.createClass({
	render: function(){
		return (
			<div className="sec-title-wrapper">
				<h3 className="sec-title">
					<span className="sec-title-ch">{this.props.Title}</span>
					<span className="sec-title-en">{this.props.EngTitle}</span>
				</h3>
			</div>
		);
	}
});

var SkillType1 = React.createClass({
	render: function(){
		return(
			<h3 className="timeline-title">
				<span className="skills-type">{this.props.TypeName}</span>
			</h3>
		);
	}
});

var SkillType2 = React.createClass({
	render: function(){
		return(
			<h3 className="timeline-title">
				<span className="skills-type">{this.props.TypeName}</span>
			</h3>
		);
	}
});

var SkillType3 = React.createClass({
	render: function(){
		return(
			<h3 className="timeline-title">
				<span className="skills-type">{this.props.TypeName}</span>
			</h3>
		);
	}
});

var ContactMe = React.createClass({
	render: function(){
		return(
			<div>
			<section className="language">
				<div className="sec-title-wrapper">
					<h3 className="sec-title">
						<span className="sec-title-ch">{this.props.Title}</span>
						<span className="sec-title-en">{this.props.EngTitle}</span>
					</h3>
				</div>
				<figure className="footer-qr"><img src={this.props.QRCodeSrc} alt={this.props.alt} className="qr-img visible-print" /></figure>
			</section>
			</div>
		);
	}
});

module.exports = ResumeBodyRight;