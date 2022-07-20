import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    }
  }

  handleChangeDisplay = () => {
    this.setState({ display: true });
  }

  handleChangeDisplayFalse = () => {
    this.setState({ display: false });
  }

  render() {

    if (this.state.display) {
      return (
        <div>
          <h2 style={{ backgroundColor: 'green' }}>Conditional Rendering</h2>
          <button type='button' onClick={this.handleChangeDisplayFalse}>Đóng giới thiệu</button>
          <p>Trong bài hướng dẫn này, chúng ta sẽ xây dựng một trò chơi đơn giản.
            Bạn có thể không muốn đọc tiếp vì bạn không làm game — Đừng làm vậy nhé! Hãy kiên nhẫn một chút.
            Kiến thức trong bài này chính là lý thuyết cơ bản để xây dựng một ứng dụng React,
            master nó sẽ giúp bạn hiểu sâu hơn về React.</p>
        </div>
      )
    }

    if(!this.state.display){
      return (
        <div>
          <h2 style={{ backgroundColor: 'green' }}>Conditional Rendering</h2>
          <button type='button' onClick={this.handleChangeDisplay}>Xem giới thiệu</button>
        </div>
      )
    }

  }
}

export default App;