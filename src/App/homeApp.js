import React, { PureComponent } from 'react';

import AppHeader from './AppHeader'
import NavBarre from './NavBarre'

export class homeApp extends PureComponent {
  render() {
    return (
        <>
            <AppHeader/>
            <NavBarre/>
        </>
    )
  }
}
export default homeApp