import * as fs from 'fs/promises';
export const ids = [9, 4, 2, 3, 1];
export async function fetchData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    const isAddress = data.address.length === 0;
    const user = JSON.stringify(isAddress ? data : data.address);
    console.log(data);
    console.log(user);
    return addData(user);
}
export function addData(user) {
    fs.appendFile('test.json', `, ${user}`);
}
ids.forEach((id) => fetchData(id));
/*
Promise.all(
  ids.map(
    ( id ) =>
      fetch(
        `https://jsonplaceholder.typicode.com/users/${ id }`,
      ).then(
        ( response ) => response.json()
      ),
  ),
).then(
  ( data ) => {
    return addData( data );
  }
); */
