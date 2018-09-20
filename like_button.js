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

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'About Me'
    );
  }
}

const domContainer = document.querySelector('#about_me');
ReactDOM.render(e(LikeButton), domContainer);