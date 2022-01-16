import { ReactSVG } from 'react-svg'

export interface IconProps {
    color?: any
    hover?: any
    size?: React.CSSProperties['width' | 'height']
    w?: React.CSSProperties['width']
    name?: string
    cursorPointer?: boolean
    currentColor?: boolean
    style?: React.CSSProperties
}

export const Icon: React.FC<IconProps> = ({
    name,
    color,
    size,
    hover,
    cursorPointer,
    currentColor,
    style,
}): React.ReactElement => {
    const defaultStyle = {
        color: color,
        display: 'inline-block',
        verticalAlign: 'middle',
        lineHeight: 0,
        width: size ? size + 'px' : '20px',
        height: size ? size + 'px' : '20px',
        ...style,
        // '&:hover': {
        //     color: hover ? hover : color?.replace(/main|light/gi, 'dark'),
        //     '& svg path,& svg rect': {
        //         fill: hover ? 'currentcolor' : '',
        //     },
        //     '& svg text': {
        //         fill: hover ? 'currentcolor' : '',
        //         fontSize: 'inherit',
        //     },
        // },
        // '& svg': {
        //     width: size ? size + 'px' : '20px',
        //     height: size ? size + 'px' : '20px',
        // },
        // '& svg path,& svg rect': {
        //     fill: currentColor ? 'currentcolor' : '',
        // },
        // cursor: cursorPointer ? 'pointer' : '',
    }
    return (
        <ReactSVG
            src={`/icons/${name}.svg`}
            className="svgIcon"
            style={defaultStyle}
        />
    )
}
