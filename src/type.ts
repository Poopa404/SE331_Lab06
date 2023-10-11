export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: EventOrganizer
  images: string[]
}

export class EmptyEventItem implements EventItem {
  id: number = 0
  category: string = ''
  title: string = ''
  description: string = ''
  location: string = ''
  date: string = ''
  time: string = ''
  organizer: EventOrganizer = {id: 0, name: '', images: [], roles: []}
  images: string[] = []
}

export interface OrganizerItem {
  id: number
  address: string
  organizationName: string
}

export interface EventOrganizer {
  id: number
  name: string
  images: string[]
  roles: string[]
}