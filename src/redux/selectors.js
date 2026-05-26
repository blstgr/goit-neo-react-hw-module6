export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = (state) => {
  const contacts = selectContacts(state);
  const normalizedFilter = selectNameFilter(state).trim().toLowerCase();

  if (!normalizedFilter) {
    return contacts;
  }

  return contacts.filter(({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();

    return (
      normalizedName.includes(normalizedFilter) ||
      normalizedNumber.includes(normalizedFilter)
    );
  });
};
