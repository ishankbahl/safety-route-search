import React from "react";
import Downshift from "downshift";
import { withStyles } from "material-ui/styles";

class DownshiftMultiple extends React.Component{
    
    render(){

        const { classes } = this.props;

        return(
            <div className={ classes.root } >
                <Downshift>
                        {({
                            getInputProps,
                            getItemProps,
                            isOpen,
                            inputValue,
                            selectedItem,
                            highlightedIndex,
                        }) => (
                            <div className={ classes.container } >
                                {}
                            </div>
                        )}
                </Downshift>
            </div> 
        );
        
    }

}

const styles = {
    container: {
        flexGrow: 1,
        position: "relative",
    },
    root: {
        flexGrow: 1,
    }
}

export default Autocomplete;