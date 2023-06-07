import React from 'react';
import ReactDOM from 'react-dom';
import img1 from './img/img1.png';
import SingleComment from './singleComment';

const App = () => {
    return(
        <div className='ui comments'>
            <SingleComment name ='Alex' />
            <SingleComment name ='Jack'/>
            <SingleComment name = 'Sarah'/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)