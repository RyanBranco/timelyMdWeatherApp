import styles from "./TextInput.module.css"

export default function TextInput(props) {
    const { onChange, label, id, placeholder, hideLabel, error } = props

    return (
        <span className="pr">
            <label
                className={`${
                    hideLabel && `${styles.hideLabel}`
                } dfr dif ac mbs`}
                htmlFor={id}
            >
                {label}
            </label>
            <input
                placeholder={placeholder}
                className={`${styles.textInput} ${
                    error && styles.error
                } br4 ps t2 bs`}
                onChange={(e) => onChange(id, e.target.value)}
                id={id}
                type="text"
            />
            {error && (
                <small className={`${styles.errorType} errorText pa`}>
                    {error}
                </small>
            )}
        </span>
    )
}
