import classes from './InputCustom.module.css';

function InputCustom(props) {
    return (
        <div className={props.type === undefined || props.type !== 'T2' ? classes.inputBox : classes.inputBoxT2}>
            <input type="text" required={true} onInput={(e) => {
                props.errors('');
                props.action(e.target.value)
            }
            } />
            <span>{props.text}</span>
        </div>
    )
}

export default InputCustom;