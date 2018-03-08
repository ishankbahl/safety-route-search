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
            mapNode: null,
            directions: null,
        }

        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.getMapNode = this.getMapNode.bind(this);
        this.setDirections = this.setDirections.bind(this);

    }

    openDialog(){

        this.setState({ open: true });

    }

    closeDialog() {

        this.setState({ open: false });

    }

    getMapNode(node){

        this.setState({ mapNode: node });

    }

    setDirections(directions){

        this.setState({ directions });

    }

    render(){

        const { classes } = this.props;
        const { open, mapNode, directions } = this.state;

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
                <Map getMapNode={ this.getMapNode } directions={ directions }  />
                <FormDialog open={ open } handleClose={ this.closeDialog } map={ mapNode } setDirections={ this.setDirections } />
            </div>
        );
    }

}

export default withStyles(styles)(Home);