// export interface EventType {
//     eventPageType: EventPageType
// }

export interface EventPageType {
    getDebutEventWithId: GetDebutEventWithId
}

export interface GetDebutEventWithId {
    _id: string
    createdBy: any
    debutEventName: string
    debutEventDescription: string
    debutEventDate: string
    debutEventLocation: string
    debutEventImage: string
    debutRegistry: DebutRegistry[]
    debutEventAttendees: any[]
    debutInvitationLink: string
    otherRelatedLinks: string[]
}

export interface DebutRegistry {
    _id: string
    debutRegistryName: string
    debutRegistryStatus: boolean
    debutRegistryItems: DebutRegistryItem[]
}

export interface DebutRegistryItem {
    _id: string
    registryItemName: string
    registryItemDescription: string
    registryItemImage: string
    registryItemPrice: string
    registryItemLink: string
    registryItemQuantity: string
    registryItemFullfiled: boolean
}
