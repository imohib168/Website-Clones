import { Card, CardContent, Typography } from '@material-ui/core';
import React, { forwardRef } from 'react';

const Message = forwardRef(({ message, username }, ref) => {

    const isUser = username === message.username;

    return (
        <div ref={ref}>
            <Card className={`message_card ${isUser ? 'message_user' : ''}`}>
                <CardContent>
                    <Typography
                        color="black"
                        variant="p1"
                        component="h4"
                    >
                        <span className="username">{!isUser ? `${message.username || "Unknown User"}` : ''}</span>
                        <span className="userMessage">{message.message}</span>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message;
