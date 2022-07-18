import PropTypes from 'prop-types';

const Header = () => {
  return (
    <header className='header'>
      <h1>Sample React App</h1>
    </header>
  )
};

Header.defaultProps = {
  title: 'Sample React App',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
