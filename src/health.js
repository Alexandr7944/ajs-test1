/* eslint-disable linebreak-style */
export default function getHealth(value) {
  let result;
  if (value.health > 50) {
    result = 'healthy';
  } else if (value.health <= 50 && value.health > 15) {
    result = 'wounded';
  } else {
    result = 'critical';
  }
  return result;
}
