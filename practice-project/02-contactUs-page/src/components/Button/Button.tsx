import './Button.css';

interface ButtonProps {
    name: string,
    color: string,
    textColor: string
}

const Button = ({name, color,textColor}: ButtonProps) => {
  return (
    <div>
        <button className="bttn"
        style={{backgroundColor: color,
          color: textColor
        }}>
            {name}
        </button>
    </div>
  )
}

export default Button