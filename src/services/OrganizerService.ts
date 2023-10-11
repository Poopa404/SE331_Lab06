import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { EventOrganizer } from '@/type'
import apiClient from './AxioClient'

export default {
  getOrganizers(): Promise<AxiosResponse<EventOrganizer[]>> {
    return apiClient.get<EventOrganizer[]>('/organizers')
  },
  saveOrganizer(org: EventOrganizer): Promise<AxiosResponse<EventOrganizer>> {
    return apiClient.post<EventOrganizer>('/organizers', org)
  },
  getOrganizerById(id: number): Promise<AxiosResponse<EventOrganizer>> {
    return apiClient.get<EventOrganizer>('organizers/' + id.toString())
  },
}
