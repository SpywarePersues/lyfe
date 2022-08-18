export default {
    name: 'channel',
    title: 'Channel',
    type: 'document',
    fields: [
        {
            name: "title",
            title: 'Title',
            type: 'string',
        },
        {
            name: "slug",
            title: 'Slug',
            type: 'slug',
        },
    ]
}