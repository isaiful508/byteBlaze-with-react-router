
import { Link } from 'react-router-dom';
import placeholderImage from '/404.jpg'

const BlogCard = ({ blog }) => {
    const { cover_image, title, description, id, published_at } = blog
    return (
        <div>
            <Link to={`/blog/${id}`}>
                
                <div className="max-w-sm mx-auto transition border-2 border-primary hover:border-secondary border-opacity-30 hover:scale-105 group hover:no-underline focus:no-underline dark:bg-gray-50">
                    <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderImage} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                        <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                        <p>{description}</p>
                    </div>
                </div>

            </Link >
        </div>
    );
};

export default BlogCard;