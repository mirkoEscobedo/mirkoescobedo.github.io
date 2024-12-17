import salutingFace from './../assets/saluting-face_1fae1.gif';
import portraitFace from './../assets/file - Copy.png';

const Title: React.FC = () => {
  return (
    <>
      <section className="flex">
        <div className="flex flex-col">
          <span className="flex gap-2">
            <h1 className="text-6xl font-bold">Hi, I'm Mirko </h1>
            <img src={salutingFace} className="h-16"></img>
          </span>
          <p className=" text-2xl">
            <strong>Jr. Full Stack Developer</strong>, CS, Bio and Gardening
            enjoyer; Cerified Gym Bro, Copium consumer and Prophet/Oracle but
            only for bad news 😥
          </p>
        </div>

        <img src={portraitFace} className="h-40 scale-x-[-1]"></img>
      </section>
    </>
  );
};
export default Title;
