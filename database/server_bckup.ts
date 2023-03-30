import * as fs from 'fs/promises';
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type Geo = {
  lat: string;
  lng: string;
};

export const ids: number[] = [9, 4, 2, 3, 1];
export async function fetchData(id: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  const data = await res.json();
  const isAddress = data.address.length === 0;
  const user = JSON.stringify(
    isAddress ? data : data.address,
  );

  console.log(data);
  console.log(user);

  return addData(user);
}

export function addData(user: string) {
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
