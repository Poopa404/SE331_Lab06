import type { EventOrganizer } from '@/type'
import { defineStore } from 'pinia'
export const useOrganizerStore = defineStore('organizer', {
  state: () => ({
    organizer: null as EventOrganizer | null
  }),
  actions: {
    setOrganizer(organizer: EventOrganizer) {
      this.organizer = organizer
    }
  }
})
