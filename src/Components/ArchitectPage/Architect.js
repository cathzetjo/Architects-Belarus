import React from 'react';
import MediaQuery from 'react-responsive';
import { Container, Typography, CardMedia } from '@material-ui/core'

import TimeLine from './TimeLine'
import ActivityMap from './ActivityMap'
import Projects from './Projects'
import VideoModal from './VideoModal'
import useStyles from './makeStyles'
import PhotoGallery from './PhotoGallery'

function Architect(props) {
    const classes = useStyles();

    return (
      <>
        <Container className={classes.container} maxWidth="md" justify="center">
            <MediaQuery query="(max-device-width: 500px)">
              <CardMedia className={classes.img} style={{maxWidth: 250}} component="img" image={props.image} title={props.name} alt="Photo" />
            </MediaQuery>
            <MediaQuery query="(min-device-width: 501px)">
              <CardMedia className={classes.img} component="img" image={props.image} title={props.name} alt="Photo" />
            </MediaQuery>
            <Typography className={classes.name} variant="h4" component="h2">{props.name}</Typography>
            <Typography className={classes.years} variant="h6">{props.lang.years}: {props.born} - {props.deceased}</Typography>
            <Typography className={classes.description} paragraph={true}>{props.description}</Typography>
            <Typography className={classes.title} variant="h4">{props.lang.bio}</Typography>
            <TimeLine data={props.bio} />
            <Typography className={classes.title} variant="h4">{props.lang.projects}</Typography>
            <Projects data={props.project} column={props.lang.projectHeader}/>
            <Typography className={`${classes.video} ${classes.title}`} variant="h4">{props.lang.video}</Typography>
            <VideoModal data={props.video} langButton={props.lang.videoButton} />
            <Typography className={`${classes.map} ${classes.title}`} variant="h4">{props.lang.map}</Typography>
            <ActivityMap data={props.mapData}/>
            <Typography className={`${classes.gallery} ${classes.title}`} variant="h4">{props.lang.gallery}</Typography>
            <PhotoGallery data={props.photos}/>
        </Container>
    </>
  )
}

export default Architect
