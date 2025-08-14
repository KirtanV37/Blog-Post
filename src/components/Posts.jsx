import { useEffect, useState } from 'react'
import { getPosts } from '../assets/API'
import { Card, CardBody, Typography, Button } from '@material-tailwind/react'
import { getRandomDate, getRandomSubject } from '../assets/utils'
import { useNavigate } from 'react-router'

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate()
    const getUsers = async () => {
        try {
            setLoading(true);
            const response = await getPosts()
            const postsWithDates = response.data.map(post => ({
                ...post,
                date: getRandomDate(),
                subject: getRandomSubject()
            }));

            setPosts(postsWithDates)
            console.log(postsWithDates);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    // card
    const PostCard = ({ post }) => {
        const imageUrl = `https://picsum.photos/800/500?random=${post.id}`;

        return (
            <Card className="overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg" key={post.id}>
                <div className="relative h-56">
                    <img
                        src={imageUrl}
                        alt={post.title}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold">
                            {post.subject}
                        </span>
                    </div>
                </div>
                <CardBody className="p-4 w-fit h-fit">
                    <div className="mb-1 flex items-center justify-between">
                        <Typography variant="small" color="blue-gray" className="font-normal opacity-75">
                            {post.date}
                        </Typography>
                    </div>
                    <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
                        {post.title.length > 30 ? `${post.title.substring(0, 30)}...` : post.title}
                    </Typography>
                    <Typography className="mb-4 line-clamp-3 text-gray-700">
                        {post.body.length > 60 ? `${post.body.substring(0, 60)}...` : post.body}
                    </Typography>
                    <Button size="sm" variant="text" className="flex items-center gap-2" onClick={() => navigate(`/${post.id}`)}>
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </Button>
                </CardBody>
            </Card>
        );
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {posts.map((post) => (
                        <PostCard post={post} key={post.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Posts;