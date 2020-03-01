const formatAddress = row =>
  `${row.name ||
    row.terms[0].value
      .replace('Avenida', 'Av.')
      .replace(',', '')} - ${row.vicinity || row.terms[1].value}`;

export const getDescriptionData = row =>
  row.name || row.terms ? formatAddress(row) : row.description;

export const getAddressData = data => ({
  address: formatAddress(data),
  area: data.rating || data.terms[2].value,
});

export const getCoordinatesData = details => ({
  latitude: details.geometry.location.lat,
  longitude: details.geometry.location.lng,
});

export const copyArray = data => {
  const newCopy = [...data];

  return newCopy;
};

export const overiedFirstInput = (data, item) => {
  if (data.length === 1) {
    return [item];
  }

  const clone = copyArray(data);
  const newArray = clone.pop();

  const AddToFront = [item].concat(newArray);
  return AddToFront;
};

export const overiedLastInput = (data, item) => {
  if (data.length === 1) {
    return [item];
  }

  const clone = copyArray(data);
  clone.pop();

  const AddToLast = clone.concat(item);
  return AddToLast;
};
