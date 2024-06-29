




"use client"

import { useState } from 'react';
import { AnimatePresence, motion, useDragControls } from 'framer-motion';
import { Assessments } from '@/data/json/assessments';
import { IconDotsVertical, IconStar, IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react';
import Image from 'next/image';
import SectionComponent from '../Layouts/section';
import MainComponent from '../Layouts/main';
import DivComponent from '../Layouts/div';
import AssessmentRoot from './AssessmentRoot';
import AssessmentUser from './AssessmentUser';
import AssessmentMessage from './AssessmentMessage';
import AssessmentRating from './AssessmentRating';

export default function AssessmentComponent() {
  const [itemActive, setItemActive] = useState<number>(1);
  const [scroll, setScroll] = useState<number>(410)
  const [direction, setDirection] = useState(0); // New state for direction
  const dragControls = useDragControls();

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) { // Changed condition to match expected behavior
      // Drag to the right
      if (itemActive < Assessments.length - 1) {
        setDirection(1);
        setItemActive((prev) => prev + 1);
        setScroll(scroll - 410)
      }
    } else if (info.offset.x > 50) { // Changed condition to match expected behavior
      // Drag to the left
      if (itemActive > 0) {
        setDirection(-1);
        setItemActive((prev) => prev - 1);
        setScroll(scroll + 410)
      }
    }
  };
  const itemChange = (id: any) => {
    if (id < itemActive) {
      setDirection(-1);
      setItemActive((prev) => prev - 1);
      setScroll(scroll + 410)
    } else if (id > itemActive) {
      setDirection(1);
      setItemActive((prev) => prev + 1);
      setScroll(scroll - 410)
    }
  }


  return (
    <SectionComponent className="">
      <MainComponent className="">
        <DivComponent className="">
          <div className=''>
            <h1 className='_display_text _biggest'>Avalia<span className='text-neon_purple'>ções</span>
            </h1>
          </div>
        </DivComponent>

        <DivComponent className="">
          <motion.div
            animate={
              { translateX: scroll }
            }
            transition={{
              translateX: { type: "spring", stiffness: 350, damping: 80 },
            }}
            className={`flex gap-3 justify-center items-center h-full min-h-[400px]
              `}
            drag="x"
            dragControls={dragControls}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            <AnimatePresence initial={false} custom={direction}>
              {Assessments.map((item, index) => (
                <Assessment.Root
                  key={`rating-card-` + index}
                  id={index}
                  isActive={itemActive === index}
                  direction={direction} // Pass direction to the card
                  setItem={itemChange}
                >
                  <Assessment.User profile_name={item.profile_name} loged_from={item.loged_from} profile_img={item.profile_img}/>
                  <Assessment.Message message={item.rating_text}/>
                  <Assessment.Rating rating={item.rating_media}/>
                </Assessment.Root>
              ))}
            </AnimatePresence>
          </motion.div>
        </DivComponent>
        <DivComponent className="">
          <motion.div className='flex gap-3'>
            {Assessments.map((item, index) => {
              return (
                <motion.div
                  key={`bar-` + item.profile_name}
                  onClick={() => itemChange(index)}
                  className={`h-2 w-12 rounded-full cursor-pointer ${itemActive === index ? "bg-contrast_color_3" : "bg-contrast_color_2"}`}
                >

                </motion.div>
              )
            })}
          </motion.div>
        </DivComponent>
      </MainComponent>
    </SectionComponent>
  );
}


export const Assessment = {
  Root: AssessmentRoot,
  User: AssessmentUser,
  Message: AssessmentMessage,
  Rating: AssessmentRating,

}