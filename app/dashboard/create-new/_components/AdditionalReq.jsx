import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function AdditionalReq( {AdditonalRequirementInput}) {
  return (
    <div className='mt-1'>
        <label className='text-gray-400'>Enter Additional Requirements (Optional)</label>
        <Textarea className='mt-1' onChange={(e) => AdditonalRequirementInput(e.target.value)} />
    </div>
  )
}

export default AdditionalReq
