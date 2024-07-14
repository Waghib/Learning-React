import React from 'react'
import ReactDom from 'react-dom'

function PortalDemo() {  
  return ReactDom.createPortal(
    <div>Portals Demo</div>
    , document.getElementById('portal-root')
  )
}

export default PortalDemo