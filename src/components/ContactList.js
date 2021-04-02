// import ContactListItem from './ContactListItem';
import { connect } from 'react-redux';
import { deleteContact } from '../redux/actions';
import PropTypes from 'prop-types';

const ContactList = ({ items, onDelete }) => {
  return (
    items.length > 0 && (
      <ul className="ContactList">
        {items.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              className="ContactList__btn"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
  );
};

const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const mapStateToProps = state => {
  const { filter, items } = state.phonebook;
  const filteredContacts = getFilteredContacts(items, filter);
  return { items: filteredContacts };
};

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// proptypes
ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
