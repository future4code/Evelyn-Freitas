export type Transaction = {
    value: number,
    date: Date,
    description: string
}

export type Account = {
    name: string,
    CPF: string,
    birthDay: Date,
    balance: number,
    statement: Transaction[]
}

