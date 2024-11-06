import React from 'react';
import 'tachyons';

const Card = ({name, email, id}) => {
return(
    <div className="bg-light-blue dib br2 pa2 ma1 tc grow bw1 shadow-3"> 
        <img alt='photo' src={`https://robohash.org/${id}`}/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
)
}
//uses tachyons for styling

export default Card;