import React, { PureComponent } from 'react'
import { BiUser } from 'react-icons/bi';

export class AppHeader extends PureComponent {
  render() {
    return (
        <div className='header' style={{display:'flex',backgroundColor: 'rgba(33, 37, 41)'}}>
            <div style={{flex:1}}>
              <div style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
              <h1 style={{color:'#69be94'}}>Eco</h1>
              <h1 style={{color:'white'}}>Chauffage</h1>
              </div>
              </div>
            <BiUser size='sm' style={{minWidth:'50', maxWidth:'5%'}}/>
        </div>
    )
  }
}

export default AppHeader