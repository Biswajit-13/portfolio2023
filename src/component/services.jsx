import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CardWithLink({title,description,logo}) {
  return (
    <Card className="overflow-hidden h-full transition-transform hover:shadow-lg transform hover:scale-105">
      <CardBody>
        <Typography
          className="mb-4 h-12 w-12 text-4xl text-gray-900 mx-auto block"
        >
          {logo}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="text-center mb-2">
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default function Services() {
  return (
    <div className="py-16 overflow-hidden">
      <Typography variant="h2" className="text-xl text-center animate-bounce
    text-white mb-10">What I offer?</Typography>
      <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-4">

        <CardWithLink
          title={"Front-End Expertise"}
          description={"Transforming ideas into captivating digital experiences. Proficient in HTML, CSS, JavaScript, React, and Tailwind CSS, I craft intuitive user interfaces that captivate visitors from the first click. Elevate your web presence with responsive, visually stunning front-end designs that leave a lasting impression."}
          logo={"🎨"}
        />

        <CardWithLink
          title={"Back-End Mastery"}
          description={"Fueling seamless functionality under the hood. Leveraging Express, Node.js, and MongoDB, I architect dynamic back-end solutions that ensure streamlined data management, robust API development, and efficient server operations. Your website will operate with precision and deliver a top-notch user experience."}
          logo={"⚙️"}
        />
        <CardWithLink
          title={"Strategic Consulting"}
          description={"Guiding your digital vision to success. Beyond coding, I offer strategic insights to enhance your online platform's performance. Whether it's optimizing user journeys, improving conversion rates, or suggesting the latest technologies, count on me to provide expert advice that drives tangible results."}
          logo={"🔍"}
        />
      </div>
    </div>
  )

}