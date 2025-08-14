import { categories } from "../assets/utils";
import { Typography } from "@material-tailwind/react";

const Categories = () => {
    return (
        <>
            <Typography className="mb-2" variant="lead" style={{ color: '#008ECC' }}>Trending Topics</Typography>
            <div className="w-full grid grid-cols-5">
                {categories.map((category, index) => (
                    <button variant='outlined' key={index} className="bg-white border-gray-800 px-2 py-1 rounded-full  text-xs font-thin hover:bg-blue-300 hover:text-white">
                        <Typography variant="paragraph">{category}</Typography>
                    </button>
                ))}
            </div>
        </>
    );
};

export default Categories;
