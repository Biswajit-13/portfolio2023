import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button
} from "@material-tailwind/react";
import QuestHub from "../assets/QuestHub.jpg";
import FlavorFusion from "../assets/FlavorFusion.jpg";
import Blog from "../assets/Blog.jpg";

export function BlogCard({title,description,image,demo,code}) {
  return (
    <div className="relative max-w-1/2 overflow-hidden hover:shadow-md hover:cursor-pointer hover:bg-black">
      <img src={image} alt="ui/ux review check" className="hover:opacity-25 hover:bg-black transition-opacity" />
      <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity">
        <h4 className="text-white text-2xl">{title}</h4>
        <p className="mt-3 text-white font-normal">{description}</p>
        <div className="mt-3 flex flex-row gap-6">
          <a href={demo} className="inline-block">
            <button className="text-sm text-white flex items-center space-x-2">
              Demo
            </button>
          </a>
          <a href={code} className="inline-block">
            <button className="text-sm text-white flex items-center space-x-2">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default function Projects() {
  return (
    <div className="py-16 overflow-hidden">
      <Typography variant="h2" className="text-xl text-center animate-bounce
  text-white mb-10">My recent works</Typography>
      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-4">
        <BlogCard 
        image={FlavorFusion}
        title={"FlavorFusion-Eats"} 
        description={"Savor the virtual dining experience with my MERN restaurant app. Discover delectable dishes, view menus and order online, and make reservations seamlessly. Immerse yourself in a user-friendly interface designed for culinary exploration."}
        demo={"https://flavor-fusion-eats-client.vercel.app/"}
       code={"https://github.com/Biswajit-13/FlavorFusion-Eats-Client"}
       
      
        />
        <BlogCard 
        image={QuestHub}
        title={"QuestHUB"}
        description={"Connect and engage like never before through my innovative social media app. Share moments, connect with friends, and explore trending topics. Experience a platform that fosters meaningful interactions in a dynamic and visually appealing environment."}
        demo={"https://questhub.vercel.app/"}
        code={"https://github.com/Biswajit-13/QuestHUB"}
        />
        <BlogCard 
        image={Blog}
        title={"Blog"}
        description={"Dive into a world of insights with my personalized blog platform. Explore a collection of articles spanning diverse topics, from technology trends to lifestyle tips. Immerse yourself in thought-provoking content that's both informative and engaging."}
       demo={{}}
        code={"https://github.com/Biswajit-13/blog-mongo"}
        />
        <BlogCard 
        image={FlavorFusion}
        title={"Chat-O-Mania"}
        description={"Stay connected effortlessly with my MERN messaging app. Send instant messages, share media, and engage in real-time conversations. Experience smooth communication through a secure and intuitive interface, all powered by the MERN stack."}
        />
      </div>
    </div>
  )
}