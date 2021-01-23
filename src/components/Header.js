import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: 'Tracker App',
};

Header.propTypes = {
  title: PropTypes.string,
};

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// };

export default Header;
