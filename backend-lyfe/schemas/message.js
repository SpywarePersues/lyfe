export default {
    name: 'message',
    title: 'Message',
    type: 'document',
    fields: [
        {
            name: "content",
            title: 'Content',
            type: 'string',
        },
        {
            name: "time",
            title: 'Time',
            type: 'datetime',
        },
        {
            name: "channel",
            title: 'Channel',
            type: 'string',
        },
        {
            name: "image",
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: "postedBy",
            title: 'PostedBy',
            type: 'postedBy',
        },
    ]
}