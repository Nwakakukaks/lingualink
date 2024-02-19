import React, { useState } from 'react';
import { Text, Button } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { MatchTutorDialog } from '../dialogs/MatchTutorDialog';


const tutors = [
  {
    id: '1',
    imageUrl: '/matchtutor.svg',
    address: '0x997..457A35',
    rating: 4.5,
    subject: 'French',
    price: '$20'
  },
  {
    id: '2',
    imageUrl: '/matchtutor.svg',
    address: '0x997..457A35',
    rating: 4.5,
    subject: 'French',
    price: '$20'
  },
  {
    id: '3',
    imageUrl: '/matchtutor.svg',
    address: '0x997..457A35',
    rating: 4.5,
    subject: 'French',
    price: '$20'
  },
  {
    id: '4',
    imageUrl: '/matchtutor.svg',
    address: '0x997..457A35',
    rating: 4.5,
    subject: 'French',
    price: '$20'
  }
]

export const TutorList = () => {
  const [gridItemCount, setGridItemCount] = useState(tutors.length);
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleIncrement = () => {
    setGridItemCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setGridItemCount(prevCount => Math.max(prevCount - 1, 0));
  };

  const handleDialogOpen = (tutor:any) => {
    // Implement logic to open dialog with tutor's information
    console.log('Dialog opened with tutor:', tutor);
    setSelectedTutor(tutor);
    setIsDialogOpen(true)
  };

  return (
    <section className='font-body-2-body-2 '>
      <p className='font-extrabold text-9xl text-black1 text-left mb-4'>List of available tutors</p>
      <div className='grid grid-cols-3 justify-evenly gap-3'>
        {tutors.map(tutor => (
          <div key={tutor.id} onClick={() => handleDialogOpen(tutor)} className="flex space-x-3 bg-white py-4 px-4 border-2 border-gray-200 rounded-md mt-2 hover:bg-beige cursor-pointer">
            <img src={tutor.imageUrl} className="" alt="Tutor" />
            <div className="space-y-1">
              <Text color="black" fontWeight={500}>
                {tutor.address}
                <span className="font-light ml-2 text-gray1-100">
                  Average rating{' '}
                  <span className="text-blue font-normal ml-1">{tutor.rating}</span>{' '}
                  <StarIcon color="#F0BD22" w={4} h={4} className="mb-1"></StarIcon>
                </span>
              </Text>
              <Text className="text-gray1-100 font-light">
                {tutor.subject}
                <span className="ml-2 ">
                  {' '}
                  <span className="text-darkolivegreen font-medium">{tutor.price}</span>
                  /Session
                </span>
              </Text>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation buttons Prev & Next */}
      <div className="space-x-3 flex justify-end mt-6 font-medium">
        <Button
          className='font-light'
          colorScheme="blackAlpha"
          size='lg'
          borderRadius={18}
          variant='solid'
          leftIcon={<ChevronLeftIcon boxSize={7} />}
          onClick={handleDecrement}
          disabled={gridItemCount <= 15}
        >
          Previous
        </Button>
        <Button
          className="bg-black hover:bg-black1 font-light"
          size='lg'
          borderRadius={18}
          variant='solid'
          rightIcon={<ChevronRightIcon boxSize={7}/>}
          onClick={handleIncrement}
          disabled={gridItemCount <= 15}
        >
          Next
        </Button>
      </div>
      {selectedTutor && (
        <MatchTutorDialog tutor={selectedTutor} onClosed={() => setSelectedTutor(null)} isOpened={isDialogOpen} />
      )}
    </section>
  );
};

