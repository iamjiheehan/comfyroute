export type PriorityMode = "fast" | "quiet"

export type ThemeMode = "dark" | "light" | "system"

export interface CommutePreferences {
    seatPriority: boolean
    minimizeTransfer: boolean
    crowdThreshold: number
    priorityMode: PriorityMode
}

export interface NotificationSettings {
    push: boolean
    crowdAlert: boolean
    aiRecommend: boolean
}

export interface SettingsState {
    commute: CommutePreferences
    notifications: NotificationSettings
    theme: ThemeMode
}
