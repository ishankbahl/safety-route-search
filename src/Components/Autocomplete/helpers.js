import TextField from "material-ui/TextField";

export function renderInput(inputProps){

    const { InputProps, classes, ref, ...other } = inputProps;

    return(
        <TextField 
            {...other}
            inputRef={ ref }
            InputProps={{
                classes: {
                    input: classes.input,
                },
                ...InputProps,
            }}
        />
    );
}