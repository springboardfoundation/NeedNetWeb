import React, {MouseEventHandler} from 'react';
import './Button.css'

type Props = {
    onClick: MouseEventHandler;
    text: string;
};

const Button: React.FunctionComponent<Props> = ({onClick, text}) => (
    // <button className="buttonBigBlue" onClick={onClick}>{text}</button>
    <div className="buttonBigBlue">
        <span className="buttonBigBlueText">
  {text}
</span>
    </div>
);

export default Button;