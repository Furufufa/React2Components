import PropTypes from 'prop-types'; 

export const SocialButton = ({ icon }) => {
  return (
    <div className='icons'>
      {icon.map((iconClass, key) => ( 
        <div className='subIcon' key={key}>
            <i className={iconClass}></i> 
        </div>
      ))}
    </div>
  );
};

SocialButton.propTypes = {
  icon: PropTypes.array,
};