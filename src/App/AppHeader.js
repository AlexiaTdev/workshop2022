import React, { PureComponent } from 'react'
import { BiUser } from 'react-icons/bi';

export class AppHeader extends PureComponent {
  render() {
    return (
        <div className='header' style={{display:'flex', border: '2px dashed #f69c55'}}>
        <p style={{flex:1, textAlign:'center', border: '2px dashed blue'}}>EcoChauffage</p>
        <BiUser size='sm' style={{border: '2px dashed green', minWidth:'50', maxWidth:'5%'}}/>
    </div>
    )
  }
}

export default AppHeader