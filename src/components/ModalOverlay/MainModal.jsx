import React from 'react'

const MainModal = ({isModalOpen , children}) => {

    if(!isModalOpen) {
        return null;
    }

  return (
    <div className='modal-backdrop'>
      <div className='modal-content'>
        {children}
      </div>    
    </div>
  )
}

export default MainModal