import React from 'react'

const House = ({ params }: { params: { id: string } }) => {
  return (
    <div>House {params.id}</div>
  )
}

export default House