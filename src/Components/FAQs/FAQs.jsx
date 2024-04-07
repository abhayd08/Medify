import styles from "./FAQs.module.css";
import { Accordion, AccordionItem } from "@nextui-org/react";
import AddIcon from "./AddIcon";
import { motion } from "framer-motion";

const FAQs = [
  {
    question: "Why choose our medical for your family?",
    answer:
      "Get top-notch medical care for your family with our comprehensive services, expert staff, and personalized approach.",
    id: "FAQ1",
  },
  {
    question: "Why we are different from others?",
    answer:
      "We stand out with our state-of-the-art facilities, compassionate care, and commitment to excellence.",
    id: "FAQ2",
  },
  {
    question: "Trusted & experience senior care & love",
    answer:
      "Our experienced team provides compassionate care and support tailored to meet the unique needs of seniors, ensuring they receive the love and attention they deserve.",
    id: "FAQ3",
  },
  {
    question: "How to get appointment for emergency cases?",
    answer:
      "For emergency cases, please call our dedicated emergency hotline or visit our clinic immediately. We have a team of professionals ready to assist you promptly.",
    id: "FAQ4",
  },
];

export default () => {
  return (
    <div className="bg-white px-2 pt-[70px] pb-[30px]">
      <motion.div
        whileInView={{
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        initial={{
          y: -50,
        }}
        className="flex flex-col justify-center items-center gap-[45px]"
      >
        <div>
          <h6 className="text-[#2AA7FF] font-semibold text-base leading-[27px] text-center">
            Get Your Answer
          </h6>
          <h4 className="text-[#1B3C74] mt-2 font-semibold text-[48px] leading-[62px] text-center">
            Frequently Asked Questions
          </h4>
        </div>
        <div className="flex justify-center flex-wrap w-full gap-[95px] gap-y-[60px] items-center">
          <div className="relative max-w-[500px] max-h-[480px]">
            <img src="/assets/FAQsImg.png" alt="Happy Customers" />
            <img
              className="absolute top-[70%] sm:max-w-[220px] -left-2 max-w-[160px] sm:left-[-4rem] translate-y-[-50%]"
              src="/assets/happyPatients.png"
              alt="Happy Patients"
            />
            <img
              className={`${styles.heartImg} absolute heartImg top-[40%] max-w-[65px] sm:max-w-[80px] -right-0.5 sm:right-1.5 translate-y-[-50%]`}
              src="/assets/heart.png"
              alt="Heart"
            />
          </div>
          <Accordion
            className="max-w-[464px] px-2"
            variant="light"
            showDivider={false}
            itemClasses={{
              base: "py-3 w-full",
              title: "font-semibold text-[#1B3C74] text-[18px]",
              indicator: "font-bold text-3xl text-[#2AA8FF]",
              content: "font-medium text-[#2AA8FF] text-[18px]",
            }}
          >
            {FAQs.map((FAQ) => {
              return (
                <AccordionItem
                  indicator={({ isOpen }) => (!isOpen ? <AddIcon /> : "~")}
                  key={FAQ.id}
                  aria-label="FAQ"
                  title={FAQ.question}
                >
                  {FAQ.answer}
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </motion.div>
    </div>
  );
};
