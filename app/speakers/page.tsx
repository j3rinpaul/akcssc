import React from 'react';
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { title } from '@/components/primitives';

// Assuming your JSON data looks something like this:
const jsonData = [
  {
    title: "Card 1",
    description: "Description for Card 1",
    imageSrc: "/akcssc.jpeg",
  },
  {
    title: "Card 2",
    description: "Description for Card 2",
    imageSrc: "/akcssc.jpeg",
  },
  // Add more objects for additional cards as needed
];

const CardList = () => {
  return (
    <div className='pt-10 '>
        <div className='justify-center pl-16'>

			<h1 className={title()}>Events</h1>
        </div>
    <div className="flex pt-16 justify-center">
      {jsonData.map((cardData, index) => (
        <div key={index} className="mr-4 ml-10" style={{ width: '400px' }}>
          <Card isFooterBlurred radius="lg" className="border-none">
            <Image
              alt={cardData.title}
              className="object-fill"
              height={400}
              src={cardData.imageSrc}
              width={400}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Available soon.</p>
              <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                Notify me
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CardList;