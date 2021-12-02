import styles from "./LoadingSpinner.module.css"

export default function LoadingSpinner({ height }) {
    return (
        <svg
            height={height}
            width={height}
            className={`${styles.loadingSpinner}`}
            viewBox="0 0 600 600"
            aria-labelledby="spinner-id-0__title"
            fill="#111111"
        >
            <defs>
                <linearGradient
                    id="spinner-id-0__gradient1"
                    gradientTransform="rotate(90)"
                >
                    <stop offset="0%" className="spin__stop_end"></stop>
                    <stop offset="90%" className="spin__stop_mid"></stop>
                </linearGradient>
                <linearGradient
                    id="spinner-id-0__gradient2"
                    gradientTransform="rotate(90)"
                >
                    <stop offset="0%" className="spin__stop_start"></stop>
                    <stop offset="90%" className="spin__stop_mid"></stop>
                </linearGradient>
                <pattern
                    id="spinner-id-0__pattern"
                    x="0"
                    y="0"
                    width="600"
                    height="600"
                    patternUnits="userSpaceOnUse"
                >
                    <g transform="rotate(0, 300, 300)">
                        <rect
                            shapeRendering="crispEdges"
                            x="0"
                            y="0"
                            width="300"
                            height="600"
                            fill="#111111"
                        ></rect>
                        <rect
                            shapeRendering="crispEdges"
                            x="300"
                            y="0"
                            width="300"
                            height="600"
                            fill="#111111"
                        ></rect>
                    </g>
                </pattern>
            </defs>
            <path
                stroke="url(#spinner-id-0__pattern)"
                fill="transparent"
                strokeWidth="30"
                d="M 364 58 A 250 250 0 1 1 235 58"
            ></path>
        </svg>
    )
}
