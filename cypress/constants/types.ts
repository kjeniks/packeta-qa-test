type User = {
  mail: string
  password: string
}

type Adress = {
  street: string
  number: string
  city: string
  discrit: string
  zip: string
}

type Person = {
  name: string
  phone: string
  email?: string
}

type UserType = 'logged' | 'host'
