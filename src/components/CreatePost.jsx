import {
    Button,
    Typography,
    Input,
    Textarea,
    Card,
} from "@material-tailwind/react";

import { NavLink } from "react-router";

const CreatePost = () => {
    return (
        <>
            <Card color="transparent" className="mt-[10%] mx-auto max-w-xl sm:w-96 md:w-1/3 md:h-1/2 lg:w-1/2 lg:h-1/2">
                <form>
                    <header className="font-body">
                        <Typography variant="h5" className="place-self-center">Create Post</Typography>
                    </header>
                    <p className="font-medium text-black">Blog Title</p>
                    <Input
                        className="appearance-none ring-0 mt-[2px] !border-blue-gray-100 text-sm placeholder:text-blue-gray-300 placeholder:opacity-100 focus:border-[1px] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        placeholder="Enter Blog Title..."
                        name="task"
                    />{" "}
                    <br />

                    <div className="flex justify-between">
                        <div>
                            <p className="font-medium text-black">Date</p>
                            <Input
                                className="appearance-none ring-0  !border-blue-gray-100 text-sm placeholder:text-blue-gray-300 placeholder:opacity-100 focus:border-[1px] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                type="date"
                                name="date"
                            />
                        </div>
                        <div>
                            <p className="font-medium text-black">Author</p>
                            <Input
                                className="appearance-none ring-0  !border-blue-gray-100 text-sm placeholder:text-blue-gray-300 placeholder:opacity-100 focus:border-[1px] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                type="text"
                                name="time"
                                placeholder="Author"
                            />
                        </div>
                    </div>
                    <br />
                    <div>
                        <p className="font-medium text-black">Enter your content</p>
                        <Textarea
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            className="appearance-none ring-0 mt-[2px] !border-blue-gray-100 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:border-[1px] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            placeholder="Tell us something cool..."
                            name="description"
                        />
                    </div>
                    <footer className="flex justify-end gap-2">
                        <NavLink to='/'><Button type="button" variant="text" color="red">
                            Discard
                        </Button></NavLink>
                        <Button
                            type="submit"
                            variant="text"
                            color="light-blue"
                            className="hover:bg-blue-300 hover:text-white"
                        >
                            Post
                        </Button>
                    </footer>
                </form>
            </Card>
        </>
    );
};

export default CreatePost;

/*
<p className="font-medium text-black">Subject</p>
                    <Input
                        className="appearance-none ring-0 mt-[2px] !border-blue-gray-100 text-sm placeholder:text-blue-gray-300 placeholder:opacity-100 focus:border-[1px] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        placeholder="Health & Nutrition, Self-improvemnet, Time-management, Finance  Etc..."
                        name="subject"
                    />
                    <br />
                    */