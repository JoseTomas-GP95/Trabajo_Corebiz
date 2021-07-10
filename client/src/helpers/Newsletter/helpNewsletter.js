export function helpNewsletter (newsletter) {
  return fetch('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
    method: 'POST',
    body: JSON.stringify({
      name: newsletter.name,
      email: newsletter.mail
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())
}
