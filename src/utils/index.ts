export const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export const weeks = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

export const getTimeFormat = (date: string) => {
  const dt = new Date(date);
  const dayOfweek = weeks[dt.getDay()];
  const month = months[dt.getMonth()];
  const day = dt.getDate();
  const year = dt.getFullYear();
  return `${dayOfweek} ${month} ${day},  ${year}`
}

