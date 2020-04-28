import React, { Component } from "react";
import "./tour.scss";

export class Tour extends Component {
  state = {
    showinfo: false,
  };

  handleInfo = () => {
    this.setState({ showinfo: !this.state.showinfo });
  };
  render() {
    const { id, name, img, info, city } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article className='tour'>
        <div className='img-contaner '>
          <img src={img} alt='image of the tour' />
          <span className='close-btn' onClick={() => removeTour(id)}>
            <i className='fas fa-window-close'></i>
          </span>
        </div>
        <div className='tour-info'>
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <i className='fas fa-caret-square-down'></i>
            </span>
          </h5>
          {this.state.showinfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}

export default Tour;
