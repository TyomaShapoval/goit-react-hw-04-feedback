import { Sections, Title } from './Section.styled';
import PropTypes from 'prop-types';

export default function Section({ title,  children }) {
  return (
    <Sections>
      {/* Якщо title не є порожнім рядком, то він відображається в якості заголовку */}
      {title && <Title>{title}</Title>}
 {children}
    </Sections>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};