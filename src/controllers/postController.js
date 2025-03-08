const prisma = require('../helpers/prisma');

const getPosts = async(req, res) => {
    try {
        const posts = await prisma.post.findMany()

        return res.json({
            message: 'Posts retrieved successfully',
            statuscode: 200,
            data: posts
        })
    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message: 'Error retrieving posts',
            statuscode: 500
        });

    }
}

module.exports ={
    getPosts
}