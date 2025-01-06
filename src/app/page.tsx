'use client'
import MyPortofolio from "@/component/MyPortofolio/page";
import Profile from "@/component/Profile/Profile";
import TitleLearning from "@/component/TitleLearning/page";
import SKill from "@/component/Skill/page";
import ProjectCard from "@/component/project-card/page";
import OurServices from "@/component/OurServices/page";
import ContactUs from "@/component/ContactUs/page";
import Footer from "@/component/footer/page";

export default function Home() {
  return (
    <>
      <main className="w-[100%]">
        <section className="flex justify-between  w-auto">
          <MyPortofolio />
          <Profile />
        </section>
        <section className="bg-[#1C1B22] lg:w-auto sm:w-[100%]">
          <TitleLearning />
          <SKill />
        </section>
        <section className="bg-[#1C1B22]">
          <ProjectCard />
        </section>
        <section id="our-services">
          <OurServices />
        </section>
        <section id="ContactUs">
          <ContactUs />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
     
    </>
  );
}
