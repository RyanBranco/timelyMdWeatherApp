import styles from "./TextInput.module.css"

export default function TextInput(props) {
    const { onChange, label, id, placeholder, hideLabel } = props

    const handleChange = (e) => {
        onChange(id, e.target.value)
    }

    return (
        <span>
            <label className="dfr dif ac mbs" htmlFor={id}>
                {!hideLabel && label}
            </label>
            <input
                placeholder={placeholder}
                className={`${styles.textInput} br4 ps t2`}
                onChange={handleChange}
                id={id}
                type="text"
            />
        </span>
    )
}
