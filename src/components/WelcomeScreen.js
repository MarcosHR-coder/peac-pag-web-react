import React from "react";

import X1Proyect from "./jobs/X1Proyect";

const WelcomeScreen = () => {
    return (
        <div className="container-welcome">
            <div className="welcome-screen">
                <h2 className="welcome-screen-title">Peac Inc</h2>
                <p className="welcome-screen-text">Innovando para tí,</p>
                <p className="welcome-screen-text">innovando contigo</p>
            </div>
            <div className="welcome-screen-information">
                <p className="text-info">
                    Peac es una StartUp centrada en el desarrollo de tecnología 
                    para el uso del día a 
                    día de las personas. Liderada por Juan Lo Sapio Perona 
                    y Andrés Ricardo
                </p>
            </div>
            <div className="container">
                <div className="welcome-screen-jobs">
                    <X1Proyect />
                </div>
            </div>
        </div>
    )
}

export default WelcomeScreen;