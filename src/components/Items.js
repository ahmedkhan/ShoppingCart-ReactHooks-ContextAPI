import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { CartContext } from '../Context/CartContext';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },

    badge: {
        right: -15,
        top: 5,
        padding: '0 4px',
    },

});

export const Items = (props) => {

    const classes = useStyles();
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        console.log(cart)
        const Items = { name: props.name, price: props.price };
        setCart(currentState => [...currentState, Items]);
    }
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.photo}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                        <Badge color="secondary" overlap="circle" badgeContent={props.price} className={classes.badge} />
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={addToCart} >
                    Add to cart
        </Button>
                <Button size="small" color="primary">
                    Add to Wish List
        </Button>
            </CardActions>
        </Card>
    )
}




