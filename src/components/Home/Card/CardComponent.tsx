import { Card } from "flowbite-react";
import { Products } from "../HomeComponent";

export default function CardComponent({ title, description, image }: Products) {
  return (
    <Card
      className="max-w-sm"
      renderImage={() => (
        <img width={300} height={300} src={image} alt="image 1" />
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal line-clamp-3 text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
}
