import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Button from "material-ui/Button";
import Directions from "material-ui-icons/Directions";

import { Map, FormDialog } from "../../Components";

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}

class Home extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            open: false,
        }

        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);

    }

    openDialog(){

        this.setState({ open: true });

    }

    closeDialog() {
        this.setState({ open: false });
    }

    render(){

        const { classes } = this.props;
        const { open } = this.state;

        return(
            <div className={ classes.root } >
                <AppBar position="static" >
                    <Toolbar>
                        <IconButton className={ classes.menuButton } color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={ classes.flex } >SafeRoute</Typography>
                        <Button color="inherit" onClick={ this.openDialog } >
                            Directions 
                            <Directions />
                        </Button>
                    </Toolbar>
                </AppBar>
                <Map />
                <FormDialog open={ open } handleClose={ this.closeDialog } />
            </div>
        );
    }

}

export default withStyles(styles)(Home);