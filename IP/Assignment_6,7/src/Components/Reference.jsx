import React, { Component, createRef, forwardRef } from 'react';
import Navbar from './Navbar';

const ForwardedTextInput = forwardRef((props, ref) => {
  return <input ref={ref} type="text" {...props} />;
});

class References extends Component {
  constructor() {
    super();
    this.createRefExample = createRef();
    this.callbackRef = null;
    this.forwardedRef = createRef();
    this.state = {
      createRefValue: '',
      callbackRefValue: '',
      forwardedRefValue: '',
    };
  }

  componentDidMount() {
    if (this.createRefExample.current) {
      this.createRefExample.current.focus();
    }
    if (this.callbackRef) {
      this.callbackRef.focus();
    }
  }

  handleCreateRefClick = () => {
    this.createRefExample.current.focus();
    this.setState({ createRefValue: 'Create Ref is focused' });
  }

  handleCallbackRefClick = () => {
    if (this.callbackRef) {
      this.callbackRef.focus();
      this.setState({ callbackRefValue: 'Callback Ref is focused' });
    }
  }

  handleForwardRefClick = () => {
    this.forwardedRef.current.focus();
    this.setState({ forwardedRefValue: 'Forward Ref is focused' });
  }

  render() {
    return (
      
      <div>
        <Navbar />
        <div>
          <button onClick={this.handleCreateRefClick}>Focus Create Ref</button>
          <input
            ref={this.createRefExample}
            type="text"
            placeholder="Using Create Ref"
          />
          <p>{this.state.createRefValue}</p>
        </div>

        <div>
          <button onClick={this.handleCallbackRefClick}>Focus Callback Ref</button>
          <input
            ref={(ref) => (this.callbackRef = ref)}
            type="text"
            placeholder="Using Callback Ref"
          />
          <p>{this.state.callbackRefValue}</p>
        </div>

        <div>
          <button onClick={this.handleForwardRefClick}>Focus Forward Ref</button>
          <ForwardedTextInput ref={this.forwardedRef} placeholder="Using Forward Ref" />
          <p>{this.state.forwardedRefValue}</p>
        </div>
      </div>
    );
  }
}

export default References;
