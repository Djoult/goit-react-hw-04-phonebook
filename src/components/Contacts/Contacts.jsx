import PropTypes from 'prop-types';
import { RxAvatar } from 'react-icons/rx';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {
  UlList,
  LiItem,
  SpanIcon,
  SpanName,
  SpanNumber,
  ButtonDlt,
} from './Contacts.styled';

function Contacts({ contacts, onDeleteContact }) {
  return (
    <UlList>
      {contacts.map(({ id, name, number }) => {
        return (
          <LiItem key={id}>
            <SpanIcon
              inputColor={`#${Math.floor(Math.random() * 16777215).toString(
                16
              )}`}
            >
              <RxAvatar />
            </SpanIcon>
            <SpanName>{name}</SpanName>
            <SpanNumber>{number}</SpanNumber>
            <ButtonDlt type="button" onClick={() => onDeleteContact(id)}>
              <RiDeleteBin6Line />
            </ButtonDlt>
          </LiItem>
        );
      })}
    </UlList>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func,
};

export default Contacts;
