import React from 'react'
import Modal from '../../../components/modal/Modal'

const Session = () => {
  return (
      <div>
   {/* <!-- Button trigger modal --> */}

   <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
         modal
      </button>
{/* <!-- Modal --> */}
<Modal  />
    </div>
  )
}

export default Session