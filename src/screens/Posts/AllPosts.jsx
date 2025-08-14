import React from "react";
import Posts from "../../components/Posts";
import { Typography } from "@material-tailwind/react";
import { listing, categories } from "../../assets/utils";
const AllPosts = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-3">
                <Typography
                    className="mb-3"
                    variant="lead"
                    style={{ color: "#008ECC" }}
                >
                    Guides and Tools
                </Typography>
                <div className="w-full flex flex-col gap-2">
                    {listing.map((list, index) => (
                        <Typography variant="paragraph" key={index}>{list}</Typography>
                    ))}
                </div>
            </div>
            <div className="col-span-9">
                <Typography
                    className="mb-2"
                    variant="lead"
                    style={{ color: "#008ECC" }}
                >
                    Trending Topics
                </Typography>
                <div className="w-full grid grid-cols-5">
                    {categories.map((category, index) => (
                        <button
                            variant="outlined"
                            key={index}
                            className="bg-white border-gray-800 px-2 py-1 rounded-full  text-xs font-thin hover:bg-blue-300 hover:text-white"
                        >
                            <Typography variant="paragraph">{category}</Typography>
                        </button>
                    ))}
                </div>
                <Posts />
            </div>
        </div>
    );
};
export default AllPosts;
