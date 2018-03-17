import React, { Component } from 'react';
// import Bio from './components/bio';
import Sidebar from './components/sidebar';
import Summary from './components/summary';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/projects';
import { updateBars, updateGallery } from 'libs/main';

class App extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      profile: {
        skills: []
      },
      experience: [],
      projects: []
    };
  }

  fixWindow() {
    $('.level-bar-inner').css('width', '0');
    $(window).on('load', function () {
      updateBars();
      updateGallery();
    });
  }

  componentDidMount() {
    this.fetchProfile();
    this.fetchExperience();
    this.fetchProjects();

    this.fixWindow();
  }

  fetchProfile() {
    fetch('data/profile.json')
      .then(response => response.json())
      .then((json) => {
        console.log('got the profile!');
        console.log(json);
        this.setState({
          profile: json
        });
      });
  }

  fetchExperience() {
    fetch('data/experience.json')
      .then(response => response.json())
      .then((json) => {
        console.log('got the experience!');
        console.log(json);
        this.setState({
          experience: json
        });
      });
  }

  fetchProjects() {
    fetch('data/projects.json')
      .then(response => response.json())
      .then((json) => {
        console.log('got the projects!');
        console.log(json);
        this.setState({
          projects: json
        });
      });
  }

  render() {
    console.log('App::render()');
    return (
      <div className="wrapper">
        <Sidebar profile={this.state.profile} />
        <div className="main-wrapper">
          <Summary profile={this.state.profile} />
          <Experience positions={this.state.experience} />
          <Skills skills={this.state.profile.skills} />
          <Projects projects={this.state.projects} />
        </div>
      </div>
    );
  }
}

export default App;
