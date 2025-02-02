import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const PlaceDetails = ({ place }) => {

    const classes = useStyles();

    return (
        <Card elevation={4}>
            <CardMedia
                style={{ height: '350px' }}
                image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" >{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                    <Typography gutterBottom variant="subtitle1" >Out of {place.num_reviews} reviews</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1" >Price</Typography>
                    <Typography gutterBottom variant="subtitle1" >{place.price_level ? place.price_level : '---'}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1" >Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1" >{place.ranking ? place.ranking : '---'}</Typography>
                </Box>
                {place?.awards?.map(award => (
                    <Box my={1} display="flex" justifyContent="space-between">
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}
                {place.address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon />{place.address.length > 50 ? (
                            <acronym title={place.address}>
                                {place.address.slice(0, 40)}
                            </acronym>
                        ) : place.address}
                    </Typography>
                )}
                {place.phone && (
                    <Typography variant="body2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {place.phone}
                    </Typography>
                )}
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default PlaceDetails
