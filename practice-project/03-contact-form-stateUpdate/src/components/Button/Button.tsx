import './Button.css';

interface ButtonProps {
    icon?: React.ReactNode,
    text: string,
    color: string,
    background: string,
    border?: string,
    width?: string
}

const Button = ({icon,text,color,background,border,width}:ButtonProps) => {
  return (
    <button style={{
        color: color,
        background:background,
        border: border,
        width: width
    }} >
        {icon}
        {text}
    </button>
  )
}

export default Button