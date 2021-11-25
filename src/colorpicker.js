import React from 'react'
import { SketchPicker } from 'react-color'
import reactCSS from 'reactcss'


class ColorPickerComponent extends React.Component {
    
    state = {
      displayClrPkr: false,
      color: {
        r: '215',
        g: '159',
        b: '55',
        a: '1',
      },
    };
 
    onClick = () => {
        this.setState({ 
          displayClrPkr: !this.state.displayClrPkr 
        })
    };
 
    stateClose = () => {
      this.setState({ 
        displayClrPkr: false 
      })
    };
 
    onChange = (color) => {
        this.setState({ 
          color: color.rgb 
        })
    };
 
    render() {
 
      const styles = reactCSS({
        'default': {
          color: {
            width: '50px',
            height: '20px',
            borderRadius: '4px',
            background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
          },
          popover: {
            position: 'absolute',
            zIndex: '2',
          },
          cover: {
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            position: 'fixed',            
          },
          swatch: {
            padding: '5px',
            background: '#ffffff',
            borderRadius: '3px',
            cursor: 'pointer',
            display: 'inline-block',
            boxShadow: '0 0 0 2px rgba(0,0,0,.3)',
          },          
        },
      });
 
      return (
        <div>
          <div style={ styles.swatch } onClick={ this.onClick }>
            <div style={ styles.color } />
          </div>
          { this.state.displayClrPkr ? <div style={ styles.popover }>
            <div style={ styles.cover } onClick={ this.stateClose }/>
            <SketchPicker color={ this.state.color } onChange={ this.onChange } />
          </div> : null }
 
        </div>
      )
    }
}
 
export default ColorPickerComponent