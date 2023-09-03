import { Typography, Avatar, Rating, Carousel } from "@material-tailwind/react";

function RatingWithComment() {
  return (
    <div className="px-8 text-center">
      <Typography color="white" className="mb-6 font-medium lg:text-2xl">
        &quot;This is an excellent product, the documentation is excellent and
        helped me get things done more efficiently.&quot;
      </Typography>
      <Avatar
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image"
        size="lg"
      />
      <Typography variant="h6" className="mt-4 text-white">
        Tania Andrew
      </Typography>
      <Typography color="gray" className="mb-4 font-normal text-white">
        Lead Frontend Developer
      </Typography>
      <Rating value={5} readonly />
    </div>
  );
}

export default function Ratings() {
  return (
    <div className="py-16 overflow-hidden">
      <Typography variant="h2" className="text-xl text-center animate-bounce
  text-white mb-10">Some words from my clients</Typography>
      <Carousel className="rounded-xl h-80" loop={true}>
        <RatingWithComment />
        <RatingWithComment />
        <RatingWithComment />
      </Carousel>
    </div>
  )
}