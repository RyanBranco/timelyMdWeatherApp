import styles from "./Button.module.css"

export default function Button(props) {
    const { render, onClick, disabled, text, reverseFlow } = props

    const handleClick = (e) => {
        e.preventDefault()
        onClick()
    }

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={`${styles.button} ${
                reverseFlow && "dfrr"
            } br4 cp dfr aic pm t2`}
        >
            <p className={`${render && "mrs"}`}>{text}</p>
            <span className={`${reverseFlow && "mrs"} dfr ac`}>{render}</span>
        </button>
    )
}
