export interface Company{
  id: number,
  name : string,
  city: string,
  address: string,
  description: string,
}
export interface Vacancy{
  id: number,
  name: string,
  description: string,
  salary: number,
  company: number,
}
