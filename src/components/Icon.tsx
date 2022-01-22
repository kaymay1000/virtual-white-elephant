import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IconProps = {
  iconName: IconDefinition;
}

const Icon = ({
  iconName,
}: IconProps): JSX.Element => {
  return (
    <FontAwesomeIcon icon={iconName}></FontAwesomeIcon>
  )
}

export default Icon;
