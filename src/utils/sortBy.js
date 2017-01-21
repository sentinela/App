import moment from 'moment';

export default function sortBy(arr, by = 'updatedAt', asc) {
  if (by === 'createdAt' || by === 'updatedAt' || by === 'deletedAt') {
    if (asc) return arr.sort((a, b) => moment.utc(a[by]).diff(moment.utc(b[by])));
    return arr.sort((a, b) => moment.utc(b[by]).diff(moment.utc(a[by])));
  }
  return arr;
}
