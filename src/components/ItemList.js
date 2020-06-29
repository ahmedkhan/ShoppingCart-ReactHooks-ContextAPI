import React from 'react'
import { Items } from './Items'
import { dummyProducts } from "../services/dummy";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(15)
    },    
}));
export const ItemList = () => {
    const classes = useStyles();

    const database = dummyProducts
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={16} spacing={1}>
                    {
                        database.map(item => (
                            <Items name={item.name}
                                price={item.price}
                                key={item.id}
                                photo={item.photo}
                                description={item.description} />
                        ))
                    }
                </Grid>
            </Grid>
        </div>
    )
}
