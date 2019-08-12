import React, { Component } from 'react';
import './componentWithSliders.css';
import PresetsDropdownSelector from '../presetsDropdownSelector';
import AllBlocks from '../allBlocks';
import SavePressetModalBlock from '../savePressetModalBlock';
import FilterToggler from '../filterToggler';
import { saveIcon } from '../../assets/icons/icons';
import Button from '../button';

class ComponentWithSliders extends Component {
  state = {
    isModalBlockShow: false,
  }

  showHideModalBlock = (mouseOrKeyEvent) => {
    const { isModalBlockShow } = this.state;
    if (((mouseOrKeyEvent.type === 'keydown') && (mouseOrKeyEvent.key === 'Escape'))
        || (mouseOrKeyEvent.type === 'click')) {
      this.setState({
        isModalBlockShow: !isModalBlockShow,
      });
    }
  }

  render() {
    const { isModalBlockShow } = this.state;
    return (
      <section className="SlidersComponent">
        {isModalBlockShow && <SavePressetModalBlock showHideModalBlock={this.showHideModalBlock} />}
        <header className="SlidersComponent__header">
          <Button
            className="ButtonStyleTemplate SavePresetButton"
            onClick={this.showHideModalBlock}
            icon={saveIcon}
            value="Save Preset"
          />
          <FilterToggler />
          <PresetsDropdownSelector />
        </header>
        <main className="SlidersComponent__main">
          <AllBlocks />
        </main>
      </section>
    );
  }
}

export default ComponentWithSliders;
