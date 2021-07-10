export function helpGetProducts () {
  return fetch('https://corebiz-test.herokuapp.com/api/v1/products')
    .then((data) => data.json())
    .then((result) => {
      return result
    })
}
