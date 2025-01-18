import React from "react";
import HeaderTxt from "./HeaderTxt";
import Image from "next/image";
import { motion } from "motion/react";

const Posts = ({ title, para, image }) => {
  return (
    <div
      className={
        "flex lg:flex-row flex-col justify-between gap-x-10 items-center"
      }
    >
      <div className={"flex lg:gap-14 gap-8 flex-wrap"}>
        <div
          className={"h-52 md:w-52 w-full rounded-3xl relative overflow-hidden"}
        >
          <Image src={image} alt={"planet"} fill objectFit={"cover"} />
        </div>
        <div
          className={"flex-1 flex justify-center items-start flex-col gap-4"}
        >
          <h1 className={"text-3xl md:text-4xl font-medium"}>{title}</h1>
          <p className={"text-lg text-gray-500 font-medium"}>{para}</p>
        </div>
      </div>
      <div
        className={
          "w-full hidden md:w-28 h-fit mt-4 md:mt-0 md:flex justify-end items-center"
        }
      >
        <div
          className={"h-10 w-10 text-end md:w-16 md:h-16 flex-center relative"}
        >
          <Image
            src={"/arrow.svg"}
            alt={"arrow"}
            layout={"fill"}
            objectFit={"contain"}
          />
        </div>
      </div>
    </div>
  );
};

const posts = [
  {
    title: "The launch of the Metaverse makes Elon musk ketar-ketir",
    para: "Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.",
    image: "/planet-06.png",
  },
  {
    title: "7 tips to easily master the madness of the Metaverse",
    para: "Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum",
    image: "/planet-07.png",
  },
  {
    title: "With one platform you can explore the whole world virtually",
    para: "Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem",
    image: "/planet-08.png",
  },
];

const Insight = () => {
  return (
    <div className={"width-body min-h-screen"}>
      <div className={"size-full flex flex-col"}>
        <div>
          <HeaderTxt title={"Insight"} />
        </div>
        <div className={"text-center mt-8"}>
          <h1 className={"md:text-6xl text-5xl font-semibold"}>
            Insight about metaverse
          </h1>
        </div>
        <div className={"flex-1 size-full"}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={"size-full flex flex-col gap-8 mt-11"}
          >
            {posts.map((post, index) => (
              <Posts
                key={index}
                title={post.title}
                para={post.para}
                image={post.image}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-full mx-auto px-4 mt-10 md:mt-16 lg:mt-24 xl:mt-36">
        <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 xl:gap-11 h-[500px]">
          <div className={"relative md:col-span-1 xl:row-span-1"}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: false, amount: 0.25 }}
              className="border size-full p-5 md:p-7 rounded-3xl"
            >
              <div className="flex flex-col gap-y-6 md:gap-y-8 xl:gap-y-11">
                <div>
                  <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold">
                    Samantha
                  </h2>
                  <p className="text-sm md:text-base">Founder of Metaverse</p>
                </div>
                <div>
                  <p className="text-lg md:text-xl xl:text-2xl">
                    "With the development of today's technology, metaverse is
                    very useful for today's work, or can be called web 3.0. by
                    using metaverse you can use it as anything"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:col-span-1 xl:col-span-3 h-64 md:h-full rounded-3xl relative"
          >
            <div className={"size-full rounded-3xl overflow-hidden"}>
              <motion.a
                href={"#explore"}
                initial={{ opacity: -1, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                className={
                  "absolute hidden lg:block h-40 w-40 -left-[10%] z-50 rounded-full overflow-hidden"
                }
              >
                <Image
                  src={"/stamp.png"}
                  alt={"Stamp"}
                  layout={"fill"}
                  objectFit={"cover"}
                />
              </motion.a>
              <img
                src="/planet-09.png"
                alt="planet"
                className={"size-full object-cover"}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Insight;
