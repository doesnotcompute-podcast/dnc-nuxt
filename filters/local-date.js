export default function localDate (input) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return new Date(input).toLocaleDateString(
    'en-US',
    options,
  )
}
