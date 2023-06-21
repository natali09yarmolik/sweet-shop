type FieldErrorType = {
    error: string
    field: string
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
    fieldsErrors: FieldErrorType[]
}

export type ItemType={
    id: number
    picture: string
    title: string
    price: number
    unit: string
    count?: number
}

export type AddItemArgType = {
    itemId: number
}