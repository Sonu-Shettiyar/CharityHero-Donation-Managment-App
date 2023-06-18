import React from 'react'

const PostCard = ({title,donor,img,desc,fund}) => {
  return (
    <div>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{desc}</p>
        <div>
            <h4>{fund}</h4> <h4>{donor}</h4>
        </div>
    </div>
  )
}

export default PostCard