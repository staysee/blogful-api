function makeArticlesArray(){
    return [
        {
            id: 1,
            date_published: '2029-01-22T16:28:32.615Z',
            title: 'First test post!',
            style: 'How-to',
            content: 'Lorem ipsum dolor sit amet.',
            author: 1
        },
        {
            id: 2,
            date_published: '2100-05-22T16:28:32.615Z',
            title: 'Second test post!',
            style: 'News',
            content: 'Lorem ipsum dolor sit amet.',
            author: 1
        },
        {
            id: 3,
            date_published: '1919-12-22T16:28:32.615Z',
            title: 'Third test post!',
            style: 'Listicle',
            content: 'Lorem ipsum dolor sit amet.',
            author: 2
        },
        {
            id: 4,
            date_published: '1919-12-22T16:28:32.615Z',
            title: 'Fourth test post!',
            style: 'Story',
            content: 'Lorem ipsum dolor sit amet.',
            author: 2
        }
    ]
}

function makeMaliciousArticle(){
    const maliciousArticle = {
        id: 911,
        title: 'Naughty naughty very naughty <script>alert("xss");</script>',
        style: 'How-to',
        content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`
    }

    const expectedArticle = {
        ...maliciousArticle,
        title: `Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;`,
        content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
    }

    return {
        maliciousArticle,
        expectedArticle
    }
}

module.exports = {
    makeArticlesArray,
    makeMaliciousArticle
}