export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: string
}

export interface Student {
  id: number
  studentId: string
  name: string
  surname: string
  gpa: string
  image: string
  penAmount: number
  description: string
}