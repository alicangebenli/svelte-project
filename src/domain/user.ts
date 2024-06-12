type Address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: GetLocation
}
export type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address
}