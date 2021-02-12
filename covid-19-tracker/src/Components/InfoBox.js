import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import './InfoBox.css';

const InfoBox = ({ isCasesActive, isRecoveredActive, isDeathActive, title, cases, total, ...props }) => {
    return (
        <>
            <Card onClick={props.onClick} className={`infoBox ${isCasesActive && 'bgRed'} ${isDeathActive && 'bgRed'} ${isRecoveredActive && 'bgGreen'} `}>
                <CardContent>
                    <Typography className="infoBox__title" color="textSecondary">
                        {title}
                    </Typography>

                    <h2 className="infoBox__cases">{cases}</h2>

                    <Typography className="infoBox__total" color="textSecondary">
                        {total} Total
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default InfoBox;

