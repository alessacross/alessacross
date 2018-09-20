const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      liked: false 
    };
  }

  render() {
    if (this.state.liked) {
      return 'Clicked about me.';
    }

    return e(    <div id="top_bar">
     <a href="education.html">Education</a>
     <a href="experience.html">Experience</a>
     <a href="projects.html">Projects</a>
     <a href="resume.pdf" target="_blank">Resume</a>
     <a href="contact_me.html">Contact Me</a>
    </div>
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'About Me'
    );
  }
}

const domContainer = document.querySelector('#about_me');
ReactDOM.render(e(LikeButton), domContainer);