import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField, Button, Typography, Chip, Divider, IconButton } from '@material-ui/core';
import { blue, red, grey, white, purple, blueGrey } from '@material-ui/core/colors';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

//icons
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: blueGrey[100],
        borderRadius: '10px',
        width: '500px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
    },
    sections: {
        border: ''
    },
    title: {
        marginRight: theme.spacing(1)
    },
    chips: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    header: {
        backgroundColor: blueGrey[500],
        height: '200px',
        paddingBottom: theme.spacing(2),
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'flex-end',
        marginBottom: theme.spacing(3),
        color: 'white'
    },
    content: {
        marginBottom: theme.spacing(3),
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: theme.spacing(1),
        borderRadius: '5px'
    }
}));

const Feedback = (props) => {
    const classes = useStyles();
    const elevation = 5;
    const labelVariant = 'body1';
    const chipSize = 'small';

    return (

            <Grid container className={classes.root} component={Paper} justify='center'>
                <Grid item className={classes.header} xs={12}>
                    <Typography variant='h5'></Typography>
                    <Divider variant='middle'></Divider>
                    <Typography variant='h6'>Feedback</Typography>
                </Grid>

                <Grid item className={classes.content} xs={11}>
                    <Paper elevation={elevation} className={classes.paper} >
                        <Typography className={classes.title} variant={labelVariant}>Name</Typography>
                        <TextField color='secondary' variant='outlined' size='small' fullWidth />
                    </Paper>
                    <br />
                    <Paper elevation={elevation} className={classes.paper} >
                        <Typography variant={labelVariant}>Which experience did you enjoy the most?</Typography>
                        <div className={classes.chips} >
                            <Chip
                                icon={<AccessibilityNewIcon />}
                                label="Connected Worker"
                                clickable
                                color="secondary"
                                deleteIcon={<DoneIcon />}
                                size={chipSize}
                            />
                            <Chip
                                icon={<LocalHospitalIcon />}
                                label="Secure Cold Chain"
                                clickable
                                color="secondary"
                                deleteIcon={<DoneIcon />}
                                size={chipSize}
                            />
                            <Chip
                                icon={<AirplanemodeActiveIcon />}
                                label="Connected Cabin"
                                clickable
                                color="secondary"
                                deleteIcon={<DoneIcon />}
                                size={chipSize}
                            />
                        </div>
                    </Paper>
                    <br />
                    <Paper elevation={elevation} className={classes.paper}>
                        <Typography variant={labelVariant}>Would you recommend a tour of our center to your network?</Typography>
                        <div className={classes.chips}>
                            <Chip
                                icon={<ThumbUpIcon />}
                                label="Yes"
                                clickable
                                color="secondary"
                                deleteIcon={<DoneIcon />}
                                size={chipSize}
                            />
                            <Chip
                                icon={<ThumbDownIcon />}
                                label="No"
                                clickable
                                color="secondary"
                                deleteIcon={<DoneIcon />}
                                size={chipSize}
                            />
                        </div>
                    </Paper>
                    <br />
                    <Paper elevation={elevation} className={classes.paper}>
                        <Typography variant={labelVariant}>How was the over all experience?</Typography>
                        <div className={classes.chips} >
                            <Chip
                                icon={<SentimentVerySatisfiedIcon />}
                                label="Amazing"
                                clickable
                                color="secondary"
                                deleteIcon={<DoneIcon />}
                                size={chipSize}
                            />
                            <Chip
                                icon={<SentimentSatisfiedAltIcon />}
                                label="Good"
                                clickable
                                color="secondary"
                                deleteIcon={<DoneIcon />}
                                size={chipSize}
                            />
                            <Chip
                                icon={<SentimentDissatisfiedIcon />}
                                label="Okay"
                                clickable
                                color="secondary"
                                deleteIcon={<DoneIcon />}
                                size={chipSize}
                            />
                            <Chip
                                icon={<SentimentVeryDissatisfiedIcon />}
                                label="Mehh"
                                clickable
                                color="secondary"
                                deleteIcon={<DoneIcon />}
                                size={chipSize}
                            />
                        </div>
                    </Paper>
                    <br />
                    <Paper elevation={elevation} className={classes.paper}>
                        <Typography variant={labelVariant}>Any additional comments?</Typography>
                        <TextField color='secondary' variant='outlined' size='small' multiline rows={4} fullWidth />
                    </Paper>


                </Grid>

                <Grid item className={classes.sections} xs={12} style={{ backgroundColor: blueGrey[500] }}>
                    <Button color='primary' variant='contained' size='large' style={{ borderRadius: '25px', width: '250px', margin: '25px' }}>Submit</Button>
                </Grid>
            </Grid>
    )
}

export default Feedback;
