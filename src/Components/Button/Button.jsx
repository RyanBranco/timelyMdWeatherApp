import styles from "./Button.module.css"

export default function Button(props) {
    const { render, onClick, disabled, text } = props

    const handleClick = (e) => {
        e.preventDefault()
        onClick()
    }

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={`${styles.button} br4 bs dfr aic pm t2`}
        >
            <p className={`${render && "mrs"}`}>{text}</p>
            <span className="dfr ac">{render}</span>
        </button>
    )
}
