import React from 'react';
import bg3 from '../bg3.png';

const X1Proyect = () => {
    return (
        <div className="project-item">
            <p className="project-title">
                X1
            </p>
            <p className="project-description">
                La innovación en chips
            </p>
            <img alt="X1" className="img-project" src={bg3} />
            <p className="project-copyright">
                Copyright 2021
            </p>
        </div>
    )
};

export default X1Proyect;