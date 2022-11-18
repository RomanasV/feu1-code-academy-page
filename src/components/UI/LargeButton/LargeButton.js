import { ReactComponent as ArrowIcon } from '../../../images/arrow.svg';
import './LargeButton.css';

const LargeButton = ({content, customClass, url}) => {
  const classes = customClass ? "button-wrapper " + customClass : "button-wrapper";
  return (
    <div className={classes}>
      <a href={url} className="button-title">
        {content}
        <ArrowIcon />
      </a>
    </div>
  );
}

export default LargeButton;