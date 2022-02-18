export type Task = {
  id: string
  title: string
  description: string
}

export type PaginateData<T> = {
  results: []
  page: number
  limit: number
  totalPages: number
  totalResults: number
}
