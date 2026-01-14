export type POSTTYPE = {
    id?: number;
    _id?: number;
    content?: string;
    created_at?: string;
    updated_at?: string;
    likes?: number;
    comments?: number;
    user?: USERTYPE
    group?: GROUP_TYPE | any
    page?: PAGE_TYPE | any
    isPublic?: boolean

}

export type USERTYPE = {
    id?: number;
    _id?: number;
    email?: string;
    fullName?: string;
    created_at?: string;
    updated_at?: string;
}

export type COMMENTTYPE = POSTTYPE & {
    post?: POSTTYPE
}

export type FRIEND_TYPE = {
    _id?: any
    friend?: USERTYPE
    user?: USERTYPE

}

export type REQUEST_F_TYPE = {
    _id?: any
    sender?: USERTYPE
    receiver?: USERTYPE
    isConfirm: boolean
    isCancel: boolean
}

export type PAGE_TYPE = {
    _id?: any
    user?: USERTYPE
    name?: string
    description?: string
    created_at?: string
    updated_at?: string
}

export type GROUP_TYPE = {
    _id?: any
    user?: USERTYPE
    name?: string
    description?: string
    created_at?: string
    updated_at?: string
}

export type MEMBER_TYPE = {
    _id?: any
    member?: USERTYPE | any
    group?: GROUP_TYPE | any
    page?: PAGE_TYPE | any
    created_at?: string
    updated_at?: string
}

export type ARCHIVE_TYPE = {
    _id?: any
    posts?: POSTTYPE[]
    user?: USERTYPE
    messages?: MESSAGE_TYPE[]
    message?: MESSAGE_TYPE
    isMessage?: boolean
}

export type SHARE_TYPE = {
    _id?: any
    content?: string
    user?: USERTYPE
    post?: POSTTYPE
    created_at?: string
    updated_at?: string
}

export type EVENT_TYPE = {
    _id?: any
    title?: string
    description?: string
    isPublic?: boolean
    page?: PAGE_TYPE | any
    group?: GROUP_TYPE | any
    user?: USERTYPE | any
    created_at?: string
    updated_at?: string
}

export type INVITATION_TYPE = {
    _id?: any
    message?: string
    isInvited?: boolean
    isConfirmed?: boolean
    sender?: USERTYPE | any
    receiver?: USERTYPE | any
    event?: EVENT_TYPE | any
    group?: GROUP_TYPE | any
    page?: PAGE_TYPE | any
    created_at?: string
    updated_at?: string
}

export type PRODUCT_TYPE = {
    _id?: any
    name?: string;
    description?: string;
    price?: string;
    currency?: string;
    rate?: number;
    user?: USERTYPE | any

}

export type ORDER_TYPE = {
    _id?: any
    total_price?: string | number
    isPaid?: boolean
    products?: PRODUCT_TYPE[]
    user?: USERTYPE | any
    created_at?: string
    updated_at?: string
}

export type CART_TYPE = {
    _id?: any
    isOrdered?: boolean
    total_price?: string | number
    products?: PRODUCT_TYPE[]
    user?: USERTYPE | any
}

export type COLLECTION_TYPE = {
    _id?: any
    name?: string
    description?: string
    user?: USERTYPE | any
    posts?: POSTTYPE[]
    created_at?: string
    updated_at?: string
}

export type CHAT_TYPE = {
    _id?: any
    members?: USERTYPE[] | any[]
    created_at?: string
    updated_at?: string
}

export type MESSAGE_TYPE = {
    _id?: any
    content?: string
    user?: USERTYPE | any
    chat?: CHAT_TYPE | any
    created_at?: string
    updated_at?: string
}