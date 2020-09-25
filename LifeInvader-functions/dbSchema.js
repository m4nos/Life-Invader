let db = {
    users: [
        {
            userId: 'S88PJEGkc6ecGozBP5G5fJCCnXv2',
            email: 'user@email.com',
            handle: 'user',
            createdAt: '2019-11-11T21:57:31.688Z',
            imageUrl: '/image/sdfgsdfgsdfg/sdfgsdfgs',
            bio: 'mikri maimou',
            website: 'https://user.com',
            location: 'alvania'
        }
    ],
    posts: [
        {
            userHandle: 'user',
            body: 'this is the body of the post',
            createdAt: 'date',
            likeCount: 69,
            commentCount: 420
        }
    ],
    likes: [ 
        {
            userHandle: 'user',
            postId: 'ijhfjksdhfasdf'
        }
    ],
    comments: [
        {
            userHandle: 'user',
            postId: 'asdfasdfasdfg',
            body: 'this  is a comment',
            createdAt: '2029-11-11T21:57:31.688Z'
        }
    ],
    notifications: [
        {
            recepiant: 'user1',
            sender: 'user2',
            read: ' true | false ',
            postId: 'qhwdgfqsjhkdfb',
            type: ' like | comment ',
            createdAt: '2029-11-11T21:17:31.688Z'
        }
    ]
};

const userDetails = {
    //Redux data
    credentials: {
        userId: 'S88PJEGkc6ecGozBP5G5fJCCnXv2',
        email: 'user@email.com',
        handle: 'user',
        createdAt: '2019-11-11T21:57:31.688Z',
        imageUrl: '/image/sdfgsdfgsdfg/sdfgsdfgs',
        bio: 'mikri maimou',
        website: 'https://user.com',
        location: 'alvania'
    },
    likes: [
        {
            userHandle: 'user',
            postId: 'PJEGkc6ecGozB'
        },
        {
            userHandle: 'user2',
            postId: 'PJEGkc6ecGozBasdf'
        }
    ]
}