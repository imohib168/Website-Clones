import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import Form from './Form/Form';
import List from './List/List';

import useStyles from './styles';

import { ExpenseTrackerContext } from '../../context/context';

const Main = () => {

    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Developed By Mohib Ismail" />
            <CardContent>
                <Typography variant="h5" align="center">
                    Total Balance ${balance}
                </Typography>
                {/* <Typography variant="subtitle1" style={{
                    lineHeight: '1.5em',
                    marginTop: '20px',
                }}>
                    Try Saying: Add income for $100 in category Salary for Monday...
                </Typography> */}
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main;
