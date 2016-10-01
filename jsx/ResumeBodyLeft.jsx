var React = require("react");

var ResumeBodyLeft = React.createClass({
	render: function(){
		return (
			<div>
				<article className="column-6 first column">
					<Education />
					<Language />
					<Experience />
				</article>
			</div>
		);
	}
});

var Education = React.createClass({
	render: function(){
		return (
			<div>
				<section className="education">
				{/*
					以下各项按需更改即可
				*/}
				<EducationTitle 
					Title="教育经历" 
					EngTitle="Education" />
				<div className="timeline-wrapper">
					<ul className="sec-content timeline">
						{/*
						Unit1And2,3And4
						传入的是数组
						一组2门课程
						*/}
						<Postgraduate 
							TimeFrom="2015" 
							TimeTo="2016" 
							UniName="昆士兰科技大学"
							UniLogo="static/QUT-logo.png" 
							Major="数据科学" 
							Degree="硕士" 
							YourGPA="5.91" 
							TotalGPA="7.0" 
							WellDoneUnits="高分科目"
							Units1And2={['移动网络工程，','学术研究实践']}
							Units3And4={['普适移动系统开发，','毕业设计项目1，2']} />
						<Undergraduate 
							TimeFrom="2012" 
							TimeTo="2014" 
							UniName="昆士兰科技大学" 
							UniLogo="static/QUT-logo.png" 
							Major="信息科技" 
							Degree="学士" 
							YourGPA="5.91" 
							TotalGPA="7.0" 
							WellDoneUnits="高分科目"
							Units1And2={['电子商业网站开发，','网页设计与开发']}
							Units3And4={['数据库设计，','游戏产业入门']} />
					</ul>
				</div>
				</section>
			</div>
		);
	}
});

var EducationTitle = React.createClass({
	render: function(){
		return (
			<div>
			<div className="sec-title-wrapper">
				<h3 className="sec-title">
				<span className="sec-title-ch">{this.props.Title}</span>
				<span className="sec-title-en">{this.props.EngTitle}</span>
				</h3>
			</div>
			</div>
		)
	}
});

var Postgraduate = React.createClass({
	render: function(){
		return (
			<div>
				<li className="timeline-item education-undergraduate">
					<h3 className="timeline-title">
						<time className="education-time">{this.props.TimeFrom}<span className="spaceFix"></span>~<span className="spaceFix"></span>{this.props.TimeTo}
						</time>
					</h3>
					<dl className="education-description timeline-content">
						<dt className="education-name" style={{backgroundImage:'url(' + this.props.UniLogo + ')'}}>{this.props.UniName}</dt>
						<dd className="education-major">{this.props.Major}<span className="spaceFix"></span>{this.props.Degree}</dd>
						<dd className="education-honor"><strong>{this.props.YourGPA}</strong><span className="spaceFix"></span>/<span className="spaceFix"></span>7.0<span className="spaceFix"></span>GPA</dd>
						<dd className="education-hiscore">{this.props.WellDoneUnits}<span><span className="spaceFix"></span>(6.0以上)</span></dd>
						<dd style={{marginLeft:'28px'}}>{this.props.Units1And2}</dd>
						<dd style={{marginLeft:'28px'}}>{this.props.Units3And4}<span className="spaceFix"></span><span className="spaceFix"></span>等</dd>
					</dl>
				</li>
			</div>
		)
	}
});

var Undergraduate = React.createClass({
	render: function(){
		return (
			<div>
				<li className="timeline-item education-undergraduate">
					<h3 className="timeline-title">
						<time className="education-time">{this.props.TimeFrom}<span className="spaceFix"></span>~<span className="spaceFix"></span>{this.props.TimeTo}
						</time>
					</h3>
					<dl className="education-description timeline-content">
						<dt className="education-name" style={{backgroundImage:'url(' + this.props.UniLogo + ')'}}>{this.props.UniName}</dt>
						<dd className="education-major">{this.props.Major}<span className="spaceFix"></span>{this.props.Degree}</dd>
						<dd className="education-honor"><strong>{this.props.YourGPA}</strong><span className="spaceFix"></span>/<span className="spaceFix"></span>7.0<span className="spaceFix"></span>GPA</dd>
						<dd className="education-hiscore">{this.props.WellDoneUnits}<span><span className="spaceFix"></span>(6.0以上)</span></dd>
						<dd style={{marginLeft:'28px'}}>{this.props.Units1And2}</dd>
						<dd style={{marginLeft:'28px'}}>{this.props.Units3And4}<span className="spaceFix"></span><span className="spaceFix"></span>等</dd>
					</dl>
				</li>
			</div>
		)
	}
});

var Language = React.createClass({
	render: function(){
		return (
			<div>
				<section className="language">
				<LanguageTitle 
					Title="语言水平" EngTitle="Language" />
				<div className="sec-content">
					<dl className="language-certificates">
						{/*
						通过定义Percentage中的百分比数值来指定进度条高亮部分的长度,极值100%
						*/}
						<Language1 
							Name="国语" 
							Percentage="95%" 
							Level="精通" />
						<Language2 
							Name="英语" 
							Percentage="85%" 
							Level="熟练" />
						<Language3 
							Name="沪语" 
							Percentage="99%" 
							Level="地道" />
					</dl>
				</div>
				<AdditionalDesc />
				</section>
			</div>
		);
	}
});

var LanguageTitle = React.createClass({
	render: function(){
		return (
			<div>
			<div className="sec-title-wrapper">
				<h3 className="sec-title">
				<span className="sec-title-ch">{this.props.Title}</span>
				<span className="sec-title-en">{this.props.EngTitle}</span></h3>
			</div>
			</div>
		)
	}
});

var Language1 = React.createClass({
	render: function(){
		return (
			<div>
			<div className="language-cert-wrapper">
				<dt className="language-cert-type">{this.props.Name}</dt>
				<dd className="progress language-cert-score">
				<div style={{width:this.props.Percentage}} className="progress-bar">
					<span className="progress-label">{this.props.Level}</span>
				</div>
				</dd>
			</div> 
			</div>
		);
	}
});

var Language2 = React.createClass({
	render: function(){
		return (
			<div>
			<div className="language-cert-wrapper">
				<dt className="language-cert-type">{this.props.Name}</dt>
				<dd className="progress language-cert-score">
				<div style={{width:this.props.Percentage}} className="progress-bar">
					<span className="progress-label">{this.props.Level}</span>
				</div>
				</dd>
			</div> 
			</div>
		);
	}
});

var Language3 = React.createClass({
	render: function(){
		return (
			<div>
			<div className="language-cert-wrapper">
				<dt className="language-cert-type">{this.props.Name}</dt>
				<dd className="progress language-cert-score">
				<div style={{width:this.props.Percentage}} className="progress-bar">
					<span className="progress-label">{this.props.Level}</span>
				</div>
				</dd>
			</div> 
			</div>
		);
	}
});

var AdditionalDesc = React.createClass({
	render: function(){
		return (
			<div>
			<ul className="language-description">
				{/*
					描述性文字需直接在下面3列li标签中更改，需要加粗的文字用strong标签包起
				*/}
				<li className="language-desc-item">能够<strong>流畅阅读</strong>大部分英文网页，理解<strong>技术类</strong>官方文档</li>
				<li className="language-desc-item">能够用英语交流并讨论技术类问题</li>
				<li className="language-desc-item">能够<strong>无字幕观看</strong>并<strong>理解</strong>英文版网课或技术类发布会视频</li>
			</ul>  
			</div>
		);
	}
});

var Experience = React.createClass({
	render: function(){
		return (
			<div>
			<section className="experience">
				<ExperienceTitle 
					Title="项目与工作经验" 
					EngTitle="Experience" />
				<div className="timeline-wrapper">
					<ul className="sec-content timeline">
						<Job1 
							CompanyName="Tekkers" 
							Location="布里斯班" 
							TimeFrom="2015.07"
							TimeTo="至今"
							JobTitle="前端工程师"
							Subtitle="经手项目" />
						<Job2 
							CompanyName="广联达兴安得力" 
							Location="上海" 
							TimeFrom="2013.11" 
							TimeTo="2014.01" 
							JobTitle="网页设计与重构（实习）" />
						{/*
						Project 1,2 
						SourceCodeURL="源代码链接"
						DemoURL="Demo链接"
						若无,可省略
						*/}
						<Project1 
							Subtitle="个人项目" 
							ProjectName="ProjectMinder"
							SourceCodeURL="https://github.com/n8659150/ProjectMinderWebApp" 
							DemoURL="https://projectminder.firebaseapp.com" />
						<Project2 
							Subtitle="个人项目"
							ProjectName="ProjectMinderMobile"
							SourceCodeURL="https://github.com/n8659150/ProjectMinderMobile"/>
					</ul>
				</div>
			</section>
			</div>
		);
	}
});

var ExperienceTitle = React.createClass({
	render: function(){
		return (
			<div>
			<div className="sec-title-wrapper">
				<h3 className="sec-title">
					<span className="sec-title-ch">{this.props.Title}</span>
					<span className="sec-title-en">{this.props.EngTitle}</span>
				</h3>
			</div>
			</div>
		);
	}
});

var Job1 = React.createClass({
	render: function(){
		return (
			<li className="timeline-item experience-internship">
				<h3 className="timeline-title"><span className="experience-place">{this.props.CompanyName}<span className="spaceFix"></span>-<span className="spaceFix"></span>{this.props.Location}</span><time className="experience-time">{this.props.TimeFrom}<span className="spaceFix"></span>~<span className="spaceFix"></span>{this.props.TimeTo}</time></h3>
				<dl className="experience-description timeline-content">
					<dt className="experience-position">{this.props.JobTitle}</dt>
					<dd className="experience-task">
					<strong>分析项目需求，制定计划</strong>并按主流项目开发流程<strong>（敏捷开发）</strong>实现前端<strong>组件</strong>的<strong>开发与维护</strong>，与后端工程师<strong>配合</strong>实现项目<strong>功能对接</strong>
					</dd>
					<dt className="experience-position">{this.props.Subtitle}</dt>
					<dd className="experience-task"><strong>手机扫码</strong>点餐应用（支持iOS<span className="spaceFix"></span>/<span className="spaceFix"></span>安卓）
					</dd>
					<dd className="experience-task">澳大利亚<strong>著名面包店BreadTop</strong>面包供应商的<strong>订单管理系统</strong>
					</dd>
					<dd className="experience-task">澳大利亚热销净水器品牌Shield<span className="spaceFix"></span>Filter<strong>电商官网</strong>
					</dd>
				</dl>
			</li>
		)
	}
});

var Job2 = React.createClass({
	render: function(){
		return (
			<li className="timeline-item experience-internship">
				<h3 className="timeline-title"><span className="experience-place">{this.props.CompanyName}<span className="spaceFix"></span>-<span className="spaceFix"></span>{this.props.Location}</span><time className="experience-time">{this.props.TimeFrom}<span className="spaceFix"></span>~<span className="spaceFix"></span>{this.props.TimeTo}</time></h3>
				<dl className="experience-description timeline-content">
					<dt className="experience-position">{this.props.JobTitle}</dt>
					<dd className="experience-task">协助完成公司<strong>官网文库</strong>及公司旗下<strong>重要业务网站</strong>“平方建材网”的<strong>改版设计</strong>
					</dd>
					<dd className="experience-task">所设计的文库界面<strong>获得leader认可</strong>并列入征选范围
					</dd>
				</dl>
			</li>
		)
	}
});

var Project1 = React.createClass({
	render: function(){
		return (
			<li className="timeline-item experience-project">
			<h3 className="timeline-title"><span className="experience-project-type">{this.props.Subtitle}</span><span className="experience-title-aside"><a href={this.props.SourceCodeURL} className="experience-project-link">源代码</a><a href={this.props.DemoURL} className="experience-project-link">Demo</a></span></h3>
			<dl className="experience-description timeline-content">
				<dt className="experience-project-name">{this.props.ProjectName}</dt>
				<dd className="experience-task">专为<strong>昆士兰科技大学</strong>科技工程学院定制开发的<strong>项目信息管理系统</strong>
				</dd>
				<dd className="experience-task"><strong>独自</strong>完成<strong>用户验证</strong>模块，项目信息<strong>增删改</strong>模块，系统<strong>界面</strong>，<strong>表单</strong>，<strong>注册/登录</strong>及其他相关页面的<strong>设计与开发</strong>
				</dd>
				<dd className="experience-task"><strong>独自</strong>完成后端<strong>数据库</strong>与前端页面的<strong>对接</strong>与<strong>调试</strong>
				</dd>
				<dd className="experience-task"><strong>独自</strong>完成<strong>20分钟英语</strong>项目汇报演讲及<strong>12000字英语</strong>项目报告
				</dd>
			</dl>
			</li>
		)
	}
});

var Project2 = React.createClass({
	render: function(){
		return (
			<li className="timeline-item experience-project">
			<h3 className="timeline-title"><span className="experience-project-type">{this.props.Subtitle}</span><span className="experience-title-aside"><a href={this.props.SourceCodeURL} className="experience-project-link">源代码</a></span></h3>
			<dl className="experience-description timeline-content">
				<dt className="experience-project-name">{this.props.ProjectName}</dt>
				<dd className="experience-task">Project<span className="spaceFix"></span>Minder项目信息管理系统的<strong>配套手机应用</strong>
				</dd>
				<dd className="experience-task"><strong>独自</strong>完成系统<strong>原有模块</strong>，新增<strong>“用户会议管理”</strong>，<strong>“学生地点定位”模块</strong>，<strong>手机端</strong>界面的<strong>移植</strong>，<strong>设计</strong>，<strong>调试</strong>和<strong>二次开发</strong>
				</dd>
				<dd className="experience-task"><strong>独自</strong>完成<strong>20分钟英语</strong>项目汇报演讲及<strong>10000字英语</strong>项目报告
				</dd>
				<dd className="experience-task">项目汇报演讲获导师<strong>满分好评</strong>并考虑作为<strong>学校现有系统的新模块部署</strong>
				</dd>
			</dl>
			</li>

		)
	}
});


module.exports = ResumeBodyLeft;