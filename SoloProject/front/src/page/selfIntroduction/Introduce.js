import React from 'react';
import { accordionData } from './VueList.js';
import Accordion from '../../Accordion';

const Introduce = () => {


    return (
        <div id='accordion'>
            {accordionData.map(({ title, content, img }) => (
            <Accordion title={title} content={content} img={img} />
            ))}
        </div>
    );
};

export default Introduce;