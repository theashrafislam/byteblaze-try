import { Link } from "react-router-dom";
import notShowingImages from '../assets/404.jpg';
import { MdDelete } from "react-icons/md";



const BlogCard = ({ blog, deletable, handleDelete}) => {
    const { cover_image, description, title, id, published_at } = blog;


    return (
        <div className="flex relative">
            <Link to={`/blog/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || notShowingImages} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {deletable && <div onClick={() => handleDelete(id)} className="absolute bg-primary p-3 rounded-full hover:scale-105 -top-7 -right-0"><MdDelete size={20} className="text-secondary group-hover:text-primary"/></div>}
            
        </div>

    );
};

export default BlogCard;