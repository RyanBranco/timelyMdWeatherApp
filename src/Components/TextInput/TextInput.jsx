import styles from "./TextInput.module.css"

export default function TextInput(props) {
    const { onChange, label, id, placeholder, hideLabel } = props

    return (
        <span>
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
                className={`${styles.textInput} br4 ps t2`}
                onChange={(e) => onChange(id, e.target.value)}
                id={id}
                type="text"
            />
        </span>
    )
}
