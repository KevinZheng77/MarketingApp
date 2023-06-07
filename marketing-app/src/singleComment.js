import React from 'react';
import ReactDOM from 'react-dom';
import img1 from './img/img1.png';

const SingleComment = (props) =>{
    console.log(props);
    return(
        <div className='comment'>
            <a href='/' className='avatar'>
                <img src={img1} alt='profile picture' />
            </a>
            <div className='Content'>
                <a href= '/' className='author'>
                    {props.name}
                </a>
                <div className='metadata'>
                    <span className = 'date'>
                        today at 5:00 pm
                    </span>
                </div>
                <div className = 'text'>
                    This is amazing
                </div>
            </div>
        </div>
    )
}

export default SingleComment;