import React from 'react';
import './bse.styles.css';

export default class Flippy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      isTouchDevice: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      isFlipped: typeof props.isFlipped === 'boolean' ? props.isFlipped : state.isFlipped
    };
  }
  handleHoverOn = (event) => {
    this.setState({
      isFlipped: true
    });
    this.props.onMouseEnter(event);
  }

  handleHoverOff = (event) => {
    this.setState({
      isFlipped: false
    });
    this.props.onMouseLeave(event);
  }

  render() {
    const { children, style, flipDirection, flipOnHover, flipOH,flipOnClick,flipInfosys,flipTCS } = this.props;
    const { isFlipped, isTouchDevice } = this.state;
    const methods = !!flipOnHover ? {
      onMouseEnter: this.handleHoverOn,
      onMouseLeave: this.handleHoverOff,
    } : flipOnClick ? {
    } : {};

    const method1 = !!flipOH ? {
      onMouseEnter: this.handleHoverOn,
      onMouseLeave: this.handleHoverOff,
    } : flipOnClick ? {
    } : {};

    const method2 = !!flipInfosys ? {
      onMouseEnter: this.handleHoverOn,
      onMouseLeave: this.handleHoverOff,
    } : flipOnClick ? {
    } : {};

    const method3 = !!flipTCS ? {
      onMouseEnter: this.handleHoverOn,
      onMouseLeave: this.handleHoverOff,
    } : flipOnClick ? {
    } : {};

    return (
      <div
        className="flippy-container"
        style={{
          ...style
        }}
        {...methods}
        {...method1}
        {...method2}
        {...method3}
      >
      <div className={`flippy-cardContainer-wrapper ${flipDirection}`}>
        <div
          className={`flippy-cardContainer ${isFlipped ? 'isActive' : ''} ${isTouchDevice ? 'istouchdevice' : ''}`}
        >
          {children}
        </div>
        </div>
      </div>
    );
  }
}

Flippy.defaultProps = {
  showNavigation: false,
  flipDirection: 'horizontal',
  flipOnHover: false,
  flipOH:false,
  flipInfosys:false,
  flipOnClick: true,
  usePrettyStyle: true,
  onMouseEnter: () => {},
  onMouseLeave: () => {},
};