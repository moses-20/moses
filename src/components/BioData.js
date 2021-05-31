import React, { useContext } from "react";
import { BioContext } from "../contexts/BioContext";

// material-ui
import {
  Avatar,
  Card,
  CardHeader,
  makeStyles,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@material-ui/core";
import red from "@material-ui/core/colors/red";

// icons
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

// custom styles
const useStyles = makeStyles((theme) => ({
  app: {
    maxWidth: "700px",
    margin: "auto",
  },
  item: {
    margin: "0 auto",
  },
  bioCard: {
    maxWidth: 500,
    margin: "0 auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  tag: {
    ...theme.typography.button,
    padding: theme.spacing(1),
    textTransform: "lowerCase",
  },
}));

function BioData() {
  const classes = useStyles();
  const { bio } = useContext(BioContext);

  return (
    <Grid className={classes.app} container spacing={3}>
      {bio.map((item) => {
        return (
          <Grid className={classes.item} item key={item.id}>
            <Card className={classes.bioCard} elevation={5}>
              <CardHeader
                avatar={
                  <Avatar style={{ backgroundColor: red[600] }}>
                    {item.initials}
                  </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.name}
                subheader={item.email}
              />
              <CardMedia
                className={classes.media}
                image={item.img}
                title={item.id}
              />
              <CardContent>
                {item.languages.map((itm, idx) => {
                  return (
                    <Button key={idx} className={classes.tag}>
                      {itm}
                    </Button>
                  );
                })}
                {item.interests.map((int, idx) => {
                  return (
                    <Button key={idx} className={classes.tag}>
                      {int}
                    </Button>
                  );
                })}
              </CardContent>
              <CardActions>
                <IconButton>
                  <FavoriteIcon style={{ color: red[600] }} />
                </IconButton>
                <IconButton>
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default BioData;
